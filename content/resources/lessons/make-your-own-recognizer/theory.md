---
title: Ecoacoustic Recognizer Explanations
weight: 2
draft: true
---

This page accompanies the build-your-own-recogniser practical coding steps, described in [Practical Steps]({{< ref "practical" >}})

## 1. Dataset Preparation

The recogniser is is a binary classifier, meaning it assigns one of two labels (positive or negative) to segments of audio. In a basic Convolutional Neural Network (CNN), these segments are fixed-sized spectrogram images. In the training phase, these fixed-size segments are fed into the CNN along with their labels.  Therefore we need to be have a collection of fixed-length labelled segments. 

Because animal vocalisations are not of a fixed-duration, we need to deal with that somehow. There are several approaches to this: We can either resize the spectrogram image to the predetermined fixed size, distorting the image, or we can crop out a section of audio, which may discard some of the vocalisation or may add some padding audio around the vocalisation. For the recogniser we are developing today we have chosen the second method (cropping). 

There are two compatible ways to provide labelled data for the recogniser:
- Pre-segented
- Annotated

The annotated files have sections of audio delimited with start and end offsets, indicating where to crop from. For the "pre-segmented" files, we assume we can crop from anywhere. 

The way that this is implemented in the recogniser scripts you are using in this lesson is that 
1. A preprocessing script reads all the annotation files for your audio segments and creates a single list of all annotations
    - for those presegmented files that don't have an associated annotation file, we know that the entire file can be treated as an annotation
2. One at a time each annotation is selected for training
3. A random-fixed length segment is cropped out from the audio matching the current annotation and then that is fed into the CNN


Short annotations (less than the length of the fixed-length segment we are cropping) are cropped so that the entire annotation fits in the crop. This is illustrated below. Extra audio is included outside the annotation to acheive the fixed-duration. The blue area is the annotation and green area shows the possible time interval we can crop from. 

![short annotation](short_annotation.png)


Longer annotations (more than the length of the fixed-length segment) are cropped so that the cropped segment fits within the annotation. This is shown in the figure below. 

![long annotation](long_annotation.png)

#### Creating annotations

The process described above requires a text file that contains the annotation information, i.e. information about the start and end offset of each vocalisation. There exist a few software tools that can be used to generate this annotation file. The one that we recommend for this lesson is Raven (or Raven Lite), but the A2O or Ecosounds, or Audacity can also perform a similar task. 

The resulting file is tabular data, where each row is an annotation, and two of the columns respectively contain information describing the start time (relative to the start of the file) and the end time or duration. 

These two tutorial videos show how to annotate audio files in Raven or Raven lite
https://ravensoundsoftware.com/video-tutorials/english/02-selections-and-measurements/
https://ravensoundsoftware.com/video-tutorials/english/03-saving-selection-tables/


### Spectrogram Generation
 
The CNN used is an image classifier. The sound is converted to an image in the form of a spectrogram.  The spectrogram is created by taking short (possibly overlapping) slices of the audio signal and calculating the discrete spectrum of them with a discrete Fourier transform. Each spectrum-slice then forms a column of the spectrogram, and when arranged side by side form a two dimensional grid. 

Each row of the grid represents a frequency band of equal frequency range. However, in nature, usually more information is encoded within a given frequency range at low frequencies than the same frequency range at higher frequencies. Therefore, most ecoacoustic CNNs use a mel-scale spectrogram, in which have a higher frequency resolution at low frequencies and a lower frequency resolution at higher frequencies. 

There are several parameters you can modify when generating spectrograms:

- **Windows Size** is the number of audio samples in each slice of the audio. This determines both the time resolution (a shorter window gives a more precise point in time for the resulting column) and the frequency resolution (a longer window gives more information to determine the spectrum - the contribution of wavelengths that don't fit in the window will be ignored)

- **Overlap** is how many audio samples each window overlaps by. Having a large overlap will increase the number of spectrogram columns for a given window size for a given length of audio. 

- **Time window**  is the number of seconds of audio in each spectrogram image fed into the CNN. However, note that whatever value is chosen for this, the resulting spectrogram will be reshaped into a size of 128x256 pixels. Setting a very large value for the time window will result in loss of time resolution when this reshaping is done. 

- **maximum frequency** only the rows of the spectrogram under this frequency are included. If your target call only occurs at low frequencies, then you can fit a greater frequency resolution into the spectrogram pixel height if the top frequency is reduced. For example, if your target call is no higher than 1000Hz, they you may want to set the maximum frequency of your spectrogram to say 4000Khz. Including sound above that may not help the accuracy of the classifier, and the useful part of the spectrum will be squashed into the bottom of the spectrogram. You do want to include some frequency range above the top frequency of your target call, as there will be some information there that can be used to distinguish between confusing sounds. For example, there may be a confusing sound that appears very similar to your target call at the frequency of your target call but also includes other signal above that frequency, and it's that higher-frequency signal that is the distinguishing part. 

It is important that whatever spectrogram parameters are used during training are also used when the network is deployed. 


### Balancing dataset 

The number of examples from each class that the CNN trains on influences the predictions that it makes. If 90% of the examples are positive and 10% are negative, then even a terrible model with no capacity to learn anything about the call itself will eventually optimise its weights to always guess positive and acheive a 90% accuracy. Therefore, we ideally want to provide a similar number of examples from each class for the training examples.  In practice, it's usually a lot easier to source negative examples. Furthermore there is usually more variety amongst the negative examples that we would like to include. 

We can still include more negative examples than positive examples, and then 'oversample' the positive examples - feeding the CNN positive examples multiple times for each negative example - to ensure that the CNN is fed the same number of positive and negative examples. However, we recommend that this is not done to extreme and you only include at most 2 to 3 times as many negative examples as positive examples. 


## 2. Training


### Training and Validation split 

When creating a Machine Learning model, meaning a model that learns from examples, we generally split our data into three sets:
1. Training
2. Validation
3. Test

The training set are the examples that are actually used by the algorithm to update the internal parameters.  The simplified overview of training is: 
1. A prediction (probability of it being positive) is made on a training example.
2. The prediction is compared with the true label to get an error
3. This error is used to update the weights in a way that would make that prediction better
4. Repeat many times with many examples

We can look at these predictions as training progresses to see whether it is improving on the training set, but this only tells us how well it is memorising that particular set of examples. What we want to know is how well it works on examples it has never seen before, i.e. if it can recognise the class of audio event (the call type) it is being trained on. 

Therefore, as training progresses, we use the model to make predictions on the **validation set**. This tells us how well the model does at distinguishing the class of examples it has never "seen", which is what we want to know. 

During the course of developing a recogniser, many modifications to it will be made to what are called "hyperparameters", e.g. the spectrogram configuration, the learning rate (more on these later), etc, to try to improve the validation set accuracy. This introduces a chance of "overfitting" to the validation set. Just as the CNN algorithm updates its internal parameters based on the training set, we are updating the "hyperparameters" based on the validation set. 

How do we know that the particular values for the hyperparameters is not tuned specifically to our validation set? This is role of the 3rd set, the **test set**. It is a set of data whose only role is to check the accuracy at the end of creating the model, and its accuracy result should not be used to modify any hyperparameters. 

For this workshop, we won't have the opportunity to spend too long on training and retraining with modified hyperparameters, so we don't worry about the validation set, and the dataset is only divided (randomly) into two parts: *training* and *test*.  We will also use the test set as the validation set - that is to report accuracy during the training process. Since we are not going to be tuning the hyperparameters much during training, this validation accuracy is close to the test accuracy. If we want to be thorough, we should have a third data split which we never look at until the end. 

What proportion of examples should go into training and into testing? The more we put in training, the better our network will learn. The more we put into testing, the more confident we can be of the reported accuracy on the test set. Generally around 10-20% of the examples in the text set is common. Normally the bigger the total number of examples, the smaller the proportion dedicated to testing. 


#### Training / Testing cross contamination

Ideally, the difference between the training examples and the testing examples should be as great as the difference between the training examples and the audio that will be encountered during deployment (that is when the recogniser is run on unlabelled data collected from the field to gather ecological information). 

Therefore, if for example you will deploy your recogniser on recordings taken from a location other than where your training recordings were made, then your test set will also come from a different location from your test set. 

The pipeline used in this workshop randomly divides your recordings into training and testing. That means that, if you have provided files with multiple annotations, all of these annotations will either be used for training or testing. This is what we want, since consecutive vocalisations are likely to be more similar to each other than they are to vocalisations encountered during deployment. If we train on a vocalisation and then test on a consecutive vocalisation from the same individual, this might be an easier task for the recogniser than the kinds of vocalisations it encounters during deployment, and therefore the reported accuracy will be optimistic. 

However, because the individual recordings are allocated randomly to training or testing, the same problem will occur if these recordings are sourced from the same original longer recordings close in time. This is why we recommended to source your recordings from a wide variety of locations and times of day. 


### Basic explanation of a CNN



To get an intuition on how what calculations a CNN is doing to go from a spectrogram to a prediction, we will start with something familiar, a simple linear function and modify it in small steps until we get to the CNN. 

You don't need to know this to build the recogniser, but you might find it interesting.

1. Linear model with 1 input variable

A function is something that maps an input to an output. An example of a function is

`f(x) = a * x + b`

Let’s say we have two variables about a bunch of people: foot size and height. We could maybe use a function like the one above to predict foot size f(x) from height (x). We could use an algorithm to find the best values for the parameters a and b so that for those observations, the output of the function is as close as possible to the observation’s foot size value.  The process of finding these parameters for the line of best fit is linear regression. 

![linear model](nn/lm_1_var.png)

2. Linear model with many input variables

`f(x1, x2, x3) = (a1 * x1) + (a2 * x2) + (a3 * x3)`

Here, we have three input variables: x1, x2 and x3, and 3 parameters a1, a2 a3. The output will be a single number. By adjusting the parameters a1, a2 and a3, we can change how the function behaves (we are ignoring that last parameter b from now on, it’s not super important for this basic explanation)

![linear model many inputs](nn/lm_3_vars.png)

3. Linear models with many outputs

We could also combine a few of these functions, each with different parameters, so that we map the three input variables to a list of say two output variables. The number of parameters of the function is the number of input variables multiplied by the number of output variables. In our example, we have 3 inputs and 2 outputs for a total of 6 parameters. 

![many inputs many outputs](nn/lm_3_2.png)

4. Chained together

We could then chain these together so that the output values from the first set of linear functions is used as the inputs for the next set, and so on.

![chained together](nn/chained.png)

5. Non linear tranformation

By putting a non-linear transformation between these layers, we have constructed a big non-linear function. This is a deep neural network.  At each layer, the number of parameters is still the number of inputs * the number of outputs, i.e. the layer is fully connected

![non linear transformation](nn/nonlinear.png)

6. Non-fully-connected

Imagine a version of this network where each of the outputs of a layer only uses some of the inputs. That is, each output would have a receptive field that corresponds to some part of the input, this is represented by the picture below. Here, the first layer has 3 inputs and 2 outputs, but each output only has a receptive field of 2, so we have a total of 4 parameters in this layer, instead of 6 in the fully connected version.

![not fully connected](nn/non_fc.png)

7. Shared weights

Now we take this non-fully connected version and we reuse the same weights for each of the outputs. Notice in the image that there are 4 connections but the same weights are used. So the first layer has 3 inputs and 2 outputs, but only needs to store 2 parameters. 

![shared weights](nn/shared_weights.png)

8. Grids for inputs and outputs. 

So far, we have been using a 1-dimensional column of values to represent the inputs and outputs. The input for our CNN is a two dimensional grid of spectrogram pixels.  So, we can take the same concept of shared weights above and just reshape it to 2 dimensions.  

A set of shared weights is applied to a small square section of the input grid to produce a single pixel of the output, then moved to another position of the input to produce another output.  This small grid of weights is called a kernel. At each layer we have multiple kernels, each producing an output grid arranged in a 3-dimensional volume. 

![grid inputs outputs](nn/grid.png)

9. Fully connected final layer 

This is basically the idea behind how the function to go from an input to an output is constructed, with one more addition. After the final convolutional layer, we do a fully connected layer, so we can collapse it down to a single output value.  The output is a value between zero and one that represents the probability that the input was the target species.   

There are many other additions we are not going to go into, such as pooling, dropout, padding, etc, but we have described the basic structure. 

![grid inputs outputs](nn/cnn.png)

#### Updating the weights. 

So the CNN is just a very big mathematical function on the inputs to produce an output, which contains a whole lot of parameters. But for understanding how the parameters are learned, it’s not much different from the tiny function in step 1.

We mentioned above that for the very first function we could use an algorithm to find the optimal values of the parameters to fit our training examples. There is an algorithm called gradient descent that can be used to achieve this, and this algorithm is how neural networks learn.

1. For each labelled example it sees, it runs it through the big function to produce a number between 0 and 1 representing the probability that the example is a positive example (i.e. it contains your target call).
2. It then compares the calculated probability with the desired probability (i.e. 1 if it was a positive example and 0 if it was a negative example), using something called a "loss function" - the output of the loss function for a given example's prediction is called its "loss".
3. It then does some calculus to figure out which direction to nudge each parameter so that the loss for that example would be smaller. In a neural network it does this step by step from the last layer to the first layer using a process called "back propagation".

Actually, the training works in small batches of say 4 or 8 examples. The predictions for all examples in the batch are made, their loss is calculated, and the parameters are updated so that the average loss across the batch is reduced.

 
### Training loss, validation loss, validation accuracy

When training, each example will be fed into the CNN many times. Each round of feeding all the examples in is called an **epoch**. After we have fed all the examples in once, we have done one epoch of training. After each epoch we can calculate the average loss across all the examples. Training loss is the average loss across all the training examples. validation loss is the average loss across the validation examples. 

With each epoch, the training loss should go down, because the training algorithm's job is to reduce this loss. If it doesn't go down then something is quite wrong with the configuration of the network. At some point it will stßop improving. 

What we are more interested in is the validation loss. This will always be higher than the training loss, because these examples were never seen during training. As long as the validation loss is still decreasing, the network is still learning in a way that generalises to examples it's never seen before. At some point the validation loss will stop improving, usually before the training loss does. The validation loss might even increase after a while. This is a sign that the network is overfitting to the training set. This means that it is memorising the individual training examples while reducing its capacity to generalise its understanding of the target call type. 

 The probabilities and loss can be useful for some analysis, but really at the end of the day, the examples have been labelled as binary positive/negative and so what we are interested in is the binary predictions. Generally anything with a predicted probability over 50% is a 'positive' prediction and anything less is a 'negative' prediction.  The accuracy is the proportion of examples that were correctly labelled.


 ### Error Analysis

The first step to do after training is to check the examples that the network misclassified. Often we find that some of the training or validation set are labelled incorrectly. It's likely that mislabelled examples are "misclassified" by the network (i.e. classified correctly as belonging to a class that does not match the label). We can then correct the label of these examples and retrain. 

We might also notice that many of the misclassified examples have something in common that indicates an inadequacy with the training/testing dataset. For example we might find that many insect tracks are labelled as positive. This might mean that your positive examples often have insect tracks in the background, and maybe your negative examples don't have insect tracks. You could then go back to your original recordings and extract some segments of the same types of insect tracks to include in your negative examples. 

You might also find that very faint positive examples are incorrectly labelled as negative. You might be able to improve this false-negative rate by adding more very faint calls into your dataset. However, this is tricky, because this might actually increase the number of false positives. If finding all these very faint calls once the system is deployed is important, then you might just have to add plenty of faint examples and a corresponding number of negative examples that can be confused with faint positive examples. However, it might be that to answer your ecological question, these faint calls are not important. In this case it might be better to simply exclude them completely from the training/testing set. 


## 3. Inference


So far we have trained the network. This took a set of fixed sized spectorgram images and fed them forward to make predictions, then performed backpropagation to update the weights. 

Inference refers to making predictions on unlabelled data. This is what happens when we deploy our recogniser to do its job. 

Unlike our train/test set, in deployment we will *normally* be recording longer continuious files, with the intention of locating the target call within these longer files. Therefore, our inference pipeline has a few differences from our training pipeline:

- we need to segment the audio recordings
- we don't need to calculate loss or do any backpropagation (we can't with no labels)
- we need to assemble the individual predictions in a way that gives us information in the context of the original unsegmented audio file. 


### Segment overlap (temporal precision vs computational work) 

Our particular type of neural network classifies fixed-length segments of audio. It does not tell us whereabouts within the segment the target call occured. One approach to running this classifier as a call recogniser on a longer file is to split the longer file into non-overlapping consecutive fixed length segment, and then classify each of these. We will then know where the target call has been recognised with a time resolution equal to the duration of the fixed-length segment. 

Alternatively, we could overlap these segments. For example, we can take a 2.5 second segment every 1 second. This approach makes it less likely that a target call will be missed, since it will appear in several of the segments with varying time-offsets. With non-overlapping segments, many of the target calls will be cut in half across two segments, whereas if we overlap the segments, it means that there is likely to be at least one of the segments that contains a complete enough section of the call to produce a positive classification. 

The downside of overlapping is that the amount of computation that needs to be performed. 

You can adjust the overlap in the `config.ini` file


### Verification of Results

Our inference script generates a raven annotation file. 

To check through the results, you can open one of your inference wav files in raven, and then open the annotation file. 

A couple of things to note:
- The temporal "resolution" of the annotations will be determined by the segment size and the overlap. 
- overlapping contiguous positively identified patches will be merged into a single annotation. 
- there is no frequency information in the annotation, as the recognizer is not designed to detect frequency bounds. 


Look through some of your files to see how the recogniser did. If there are false positives (there probably will be lots), we can take these and put them in our negative set to reduce the false positive rate. 

In raven, go

1. `Go file > selection table`
2. Select the tab of the selection table, right click, and rename Tab to 'neg'
3. scroll through the file looking for false negative annotations. When you see one, draw a new annotation over the top (while the new 'neg' selection table is active). 
  - this annotation will be saved as a short audio clip, so make sure the annotation includes some padding around the call. For a 2.5 second CNN input size, around 4 seconds total duration for the annotation works. 
4. Repeat this until you have a collection of several false positives in your neg selection table. 
5. Go to `file > save all selections in current table as`
  - this will save a folder of short wav files. Rename this file "neg_iteration_01"
  
You might also notice some false negatives (i.e. the target species that was not found by the recogniser). In this case you can do a similar process to above, in a different new selection table. 


## 4. Retraining


After adding examples to your negative folder (and maybe the positive folder too), scroll up to the top of this workbook and repeat all of the steps from sections 1 (dataset preparation) and 2 (training). 

See if your accuracy improved. 

You can then repeat section 3 Inference again, to see if you can improve further. 

### Proceed with caution

This iterative process of adding in examples based on inference output works great, however it can skew things a bit.

If your recogniser has poor recall (meaning it misses lots of examples i.e. false negatives), then adding in the false positives to your negative set won't help this.   

You can add in the positive detections to your positive set, but the particular examples that it finds are those which it's already good at finding. If there are certain variations that it's good at finding and certain ones that it's bad at finding, it won't improve at those that it has difficulty with. 

Remember that the training and testing split is done randomly. If you add many new examples in from the same inference file, or the same location, especially if they are near each other within that file, your test/validation set will start to resemble your training set a bit too much to give reliable accuracy.  Remember that ideally we want to test the model on data that is at least as different from your training data as the deployment data. 

If you want to be thorough about this, you can modify the model so that you manage the training/validation split manually in a principled way, and have a holdout test set at the end of the process from a different set of recordings not used, but that's beyond the scope of this workshop. 

