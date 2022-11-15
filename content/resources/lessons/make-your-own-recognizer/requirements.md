---
title: Requirements
weight: 1
---

-   This is a face to face workshop and all attendees will be required to register for the main symposium, as well as attending the workshop on Friday.
-   Participants will need to attend an online pre-workshop session and to bring along example labelled call data for the workshop (20-200 example calls, and 20-100 negative examples from real recordings), plus a few hours of unlabelled audio that is known to contain your call of interest; exact details will be provided to participants.
-   To undertake the workshop participants need to be comfortable with executing simple command line programs; it’s also advantageous to have some programming experience (e.g. R or Python) although programming experience is not required. All the tools used to build the recogniser will be freely available, as will the workshop notes.
-   This is part of an open science initiative. Participants need to be willing to make their recogniser available under an open-source licence (Apache 2.0 https://opensource.org/licenses/Apache-2.0) so that others may use it, and for the recogniser to be published in a registry.


# Datasets

You will need to bring two datasets: 

  - A training / testing dataset of short labelled examples
  - An inference dataset of unlabelled longer recordings

## Training / Testing dataset

You will need to provide between 20 and 200 positive examples and negative examples. Negative examples are examples of audio that do not contain the target call and should include things that might get confused with it.  

Positive and negative examples should be separated into different folders, i.e. a folder named "positive" and a folder named "negative" 

There are two possible formats for you to prepare the training/testing data:

- "Pre-segmented"
- "Annotated"

You can have a combination of both formats if it suits you. 

#### Pre-segmented

- The contents of the file is completely filled by the target call. 
- There should be no “gaps” between target calls longer than 1 second. ​ For example, a repetitive bird call that continues for an entire 20 second clip with 0.5 seconds between repetitions, or a koala bellow that continues uninterrupted for the entirety of the file. 
- If your calls are quite short, you should include some padding either side so that the whole recording file is not shorter than **4 seconds**. 

#### Annotated

- Each recording has been annotated in Raven or Raven Lite, with bounding boxes drawn over the calls in the spectrogram. 
- This will give an annotation text file that is paired with the recording file.  
- The annotation filename should match the wav filename, the way Raven saves it by default. E.g. the annotation file of an audio file named `site_1_20220326_042500.wav` should be named `site_1_20220326_042500.Table.1.selections.txt`. The scripts provided in the workshop will take the audio filename (minus the extension) and look for a matching annotation file whose filename begins with that string of characters. 
- For instructions installing Raven Lite, see the instructions at the bottom of this document. 


Whichever of the two formats you use, your negative files should have a wide variety of sounds that are likely to appear in audio that is recorded when your recogniser is deployed. It should also resemble the audio from the positive examples as closely as possible. It would be good to take some negative and positive examples from the same original longer recordings if possible. 


## Unlabelled Inference Dataset

You should bring between 1 and 3 GB of longer wav files (between 5 and 60 mins) which will be put through your trained recogniser. You should make sure that your target call is contained in those recordings somewhere, the more examples the better.  Ideally none of your training/testing labelled examples should have been taken from these longer recordings. 

 
# Software

 The following software will be used in the workshop. If you are bringing your own laptop, please install them. 

- Anaconda
- Raven or Raven Lite 

## Anaconda 

Anaconda allows you to create python virtual environments and manage the packages used by those environments. Below are links to instructions on installing Anaconda 

- On Windows: https://docs.anaconda.com/anaconda/install/windows/
- On Mac: https://docs.anaconda.com/anaconda/install/mac-os/

## Raven Lite 

Raven Lite is the free version of Raven, which allows you to open up audio files on your computer and annotate them. 

1) Download the software
  - 1.1 Go to https://ravensoundsoftware.com/software/raven-lite/ and click on “GET RAVEN LITE”
  - 1.2 click “DOWNLOAD RAVEN LITE”,
  - 1.3 Choose your operating system
2) Get the free license
  - 2.1 This process acts as if you are buying a physical product to be delivered by post, but actually you are just going to get an email with your license number.
  - 2.2 On the same page you downloaded the software (https://ravensoundsoftware.com/raven-lite-downloads/) click "GET A FREE LICENSE"
  - 2.3 This takes you to https://store.birds.cornell.edu/collections/raven-sound-software/products/raven-lite-2-0-free-license, where you can add the license to your cart 
  - 2.4 Click on "view cart", enter your details and check out
  - 2.5 Put shipping information. They don’t actually ship anything to this address, but you need to put something in here to continue the checkout process. It is important that you put in a valid email address because that is where the license is sent.
  - 2.6 After clicking “continue to shipping”, it should calculate that shipping is free. Click “continue to payment”, and then “complete order”
3) Install the downloaded software
  - 3.1 Install the file you downloaded in step one in the normal way you install software on your operating system
  - 3.2 When you open it for the first time, it will display a screen asking for the serial number and email address. 
  - 3.3 Enter the serial number you should have received after completing step 2, along with the email address 
