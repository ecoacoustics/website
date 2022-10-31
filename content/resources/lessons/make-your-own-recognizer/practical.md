---
title: Practical Steps
---

The materials for this workshop will be delivered in a **Jupyter Notebook**. 

A Jupyter Notebook allows you to run python code embedded in a web page, that you can view in your web browser.

To get started, you will need to 

1) Use Anaconda to create and activate a virtual environment
2) Download the recognizer python scripts
3) Use Anaconda to launch the jupyter notebook

# Create your virtual environment

You should already have anaconda installed on your computer. If you don't, you can find how to install it here: 

- On Windows: https://docs.anaconda.com/anaconda/install/windows/
- On Mac: https://docs.anaconda.com/anaconda/install/mac-os/

Once you have anaconda installed, you can open it like any other program. 

1) On the left, select the `Environments` Tab

![Conda Environments](create_venv_1.jpg){ style="width=75%" }

2) At the bottom of the screen click `create`

![Create Conda Virtual Environment](create_venv_2.jpg){ style="width=75%" }

3) Give the environment a name. It doesn't matter what, but something like "recogniser-workshop". 
4) Choose a python version. Version 3.8.x or 3.9.x will work fine. 
5) Click "create"

![Create Conda Virtual Environment](create_venv_3.jpg){ style="width=75%" }


This creates a "conda environment". This is a folder on your computer that will contain all of the python related dependencies for running the recognizer python scripts. 

For more information see https://docs.anaconda.com/navigator/tutorials/manage-environments/

# Download the recognizer python scripts

1) navigate to https://github.com/QutEcoacoustics/recognizer_workshop/archive/refs/heads/main.zip and download the zip file to your computer
2) In your computer's file explorer, find the file you downloaded and unzip it

# Use Anaconda to launch the jupyter notebook 

Back in the anaconda desktop app, 

1) Go to the Home tab in the Applications pane on the right

![Create Conda Virtual Environment](launch_notebook_1.jpg){ style="width=75%" }

2) Find the Jupyter Lab tile and click the Install button 

![Create Conda Virtual Environment](launch_notebook_2.jpg){ style="width=75%" }

3) After installation is complete, click "Launch"

![Create Conda Virtual Environment](launch_notebook_3.jpg){ style="width=75%" }


This will open a page in a web browser, with the url starting with "localhost". You should see a file browser on the left

![Create Conda Virtual Environment](launch_notebook_4.jpg){ style="width=75%" }

4) Use that file browser to navigate to the folder you unzipped in step 2 above. 
5) Click on the file `workshop.ipynb`

This should open up a page in your browser where you can see the materials for the workshop











