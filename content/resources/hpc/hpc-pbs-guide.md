---
title: HPC PBS Guide
---

# Introduction

If you have a lot of analysis to do, your institute's high performance computing (HPC) resources might be a good solution. These are collections of many computers that are shared among a lot of people. To use them, you submit "jobs" which are queued in a scheduler called PBS.

PBS jobs are used to run your code on HPC.  The code is not run immediately, but queued to run when resources open up. The time in the queue depends on how busy HPC is and how much time your job will take.

Here are some guides available online

[cqu](https://www.cqu.edu.au/eresearch/high-performance-computing/hpc-user-guides-and-faqs/pbs-commands)

TODO: add more guides


PBS **batch jobs** are useful when you want to run your analysis on many files independently. That is, the results from one file are not used for the analysis of another and they can be done in any order.  This means that they each can be sent to a different computer and run in parallel at the same time. An example of this might be running a species recognizer over thousands of audio files.

To run a batch job you need to:

1) Create a PBS batch script
2) Transfer your analysis scripts and PBS batch script to HPC storage
3) Set up the environment on HPC, such as making sure python or R dependencies are available
4) run the PBS commandline command to queue the batch job

In this guide we first show how to complete these steps with a basic, minimal batch script. Then, we extend the script to show the basics of common tasks like running python, R, and subbatching. 


# PBS batch job script

To launch a PBS batch job, you must first create a pbs batch script. 
This is a bash script (a kind of scripting language) with some special PBS instructions. 

In this section we will show an basic example script and explain all the bits. 

## Minimal example

First we will just show a bare minimum empty example. This will simply output the all the rows of a csv, with each row being assigned to a different PBS job within the PBS batch. 


```bash
#!/bin/bash -l
#PBS -N MyAnalysis
#PBS -l ncpus=8
#PBS -l mem=8GB
#PBS -l walltime=00:11:00
#PBS -j oe
#PBS -m abe
#PBS -M my.email.address@university.edu.au
#PBS -J 0-987


# cd to dir where directory was created
cd $PBS_O_WORKDIR
echo 'working directory is $PBS_O_WORKDIR'

# the environment variable $PBS_ARRAY_INDEX
# resolves to what ever the current job index
# in the array is
echo "Array index is $PBS_ARRAY_INDEX"

# this the path to the csv (relative to the directory on HPC storage where you launch the batch job)
export data_file=./list_of_audio_files.csv

# this extracts the row of the csv that corresponds to the current PBS job within the batch
line=$(sed -n "${${PBS_ARRAY_INDEX} + 1}p" "$data_file")

echo "processing row:"
echo  $line

```

The above code should be put in a file that has the extension `.sub`, for example `my_batch_job.sub`



### Configuration Options

The first few lines, prefixed with `#PBS` are configuration for the script.

- `#PBS -N MyAnalysis` This is the name of the job, just for your reference
- `#PBS -l ncpus=8` The number of CPUs. The more cpus you allocate, the longer it might take to be scheduled because it has to wait for available resources. 
- `#PBS -l mem=8GB` The amount of RAM needed. Again, more ram might mean a longer wait
- `#PBS -l walltime=00:11:00` The amount of time you estimate each job will take to process at most. The scheduler will try to fit your jobs in based on this, so the higher the walltime, the longer it might take to get schedule. If a job takes longer than this, it will terminate early. This example we specify 11 minutes. 
- `#PBS -j oe` This merges standard error to standard output. TODO: explain this
- `#PBS -m abe` This defines when to send you an email. Because you don't have control and don't know when the job will start or has finished executing, or had a problem and aborted, it is useful to receive this information by email. In this case the options specify that mail should be sent when the when the job is aborted by PBS (a), when the job begins execution (b) and when the job terminates (c).
- `#PBS -M my.email.address@university.edu.au` This is where to send the notification emails.
- `#PBS -J 0-987` The indexes that will be executed. In this case, it will run this script with the `$PBS_ARRAY_INDEX` environment variable set to the integers 0 to 987

### Environment Variables

There are several environment variables that are available to the script.

In the above example we use the variables `$PBS_O_WORKDIR` and `$PBS_ARRAY_INDEX`

We use the `$PBS_ARRAY_INDEX` to output a different row of our csv file for each job in the batch. The script is run many times (as many as we told it to) with this value changed each time. 

[Here is a complete list of environment variables](../hpc-pbs-variables)


# Transferring your batch script to HPC over SSH

After the previous section, you will have created a pbs batch script in a text editor and saved it on your computer with the extension `.sub`, for example `my_batch_job.sub`

To submit this batch job, you first need to transfer this file (along with any other files your batch job needs, such as the csv of files to process, any scripts, etc) to your HPC storage. 

There are several ways to do this. Many universities allow users to access storage via the network. This might look like a network drive, or network share for you. For Mac and Linux users you can access this share using the SMB protocol. However since each university is different you'll need to access your institution's documentation for advice.

As far as we know, every HPC supports access via SSH. This means you can use programs like [WinSCP](https://winscp.net/) or [rclone](https://rclone.org/). Again, you'll need to refer to your institution's documentation for details.



# Submitting a PBS Batch Job 

In this section we are going to do the following steps

1. In a terminal, SSH in to your institution's HPC
2. Submit the job
3. Check the status
4. Confirm the output is what we expect

## SSH to your institute's HPC 

Note: This process may differ between institutions, so consult your the relevant documentation.

In a terminal use the command `ssh username@hostname` for example `ssh joebloggs@hpc.myuniversity.edu.au` 

The username and hostname will be provided by your institute. There may be a firewall that prevents you from doing this from off campus without connecting to your institute's VPN.

Once you have connected with ssh, use the `cd` command to change directory to the location where you copied the `my_batch_job.sub` file in the previous section. 

## Submit the job and check its status

Use the command `qsub my_batch_job.sub` to submit your batch job. This will queue it to be started when resources open up. The batch job will be given an ID, which is outputted to the terminal (e.g. `2178039[].pbs` will be output for an id of e.g `2178039[]`). Take a note of this so you can use it to check the job's status. 

To check the status use the command `qstat -xJf myjobid` (where myjobid is the value returned by the previous qsub command). This spits out a lot of information, for example `Output_Path` and `Error_Path` show you where the files will be saved with the output and error output. 

The main things you want to check is whether the job has started, how many jobs within the batch job have been completed and remain, which is the line that begins with `array_state_count`. You can use `grep` to view only this line of the output with `qstat -xJf myjobid | grep array_state_count`

You can view only the line that tells you the 

## Check the output 

In our example batch script, we are simply outputting the line of the csv that corresponds to the array index. If the batch job ran correctly we will have an output file for each array index submitted. Remember, we specify the array indexes in the `#PBS -J 0-987` configuration option. The location of these files is given in the in output of the `qstat -xJf` command. 

The output should look like this (this is job number 31)

```
working directory is /home/myusername/pbs_test_1
Array index is 31
processing row:

PBS Job 2180532[31].pbs
CPU time  : 00:00:00
Wall time : 00:00:04
Mem usage : 0b
```

# PBS batch script example for python

So far we have got the PBS batch script working, but it doesn't actually run any analysis. This example will show how to run a python script. 

1. SSH to your HPC and create a virtual environment and install your python dependencies 
2. Create a batch script 
3. Run the batch script 

## Python batch virtual environment and dependencies 

After SSHing into your HPC account (see previous section) we are going to load Anaconda so we can create a conda virtual environment. We are then going to install python packages in this virtual environment.  Note, this is done outside of the PBS batch script, since we only want to do this once at the beginning, not repeat it for each job index. 

Run the command `module load anaconda3`.  Here we are loading **Anaconda**, which is a distribution of python. This gives us access to the **conda** package manager.  Generally, software is not automatically available on HPC and we need to load it using the `module load` command. 

Now run `conda create --name myenv`

After the virtual environment has been created, run `source activate myenv` to activate it. 

For more complete documentation on managing conda environments see [Managing environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)

With the virtual environment activated, we can now install packages into it. In the example below we use the pandas package. We will install this with `conda install pandas` (actually pandas comes with anaconda so this is probably not necessary, but your script might have other dependencies and this illustrates the process). 


## Batch script for running python

For the purpose of this demo, we will create a python script that accepts as an argument a row number and a csv which lists wav files. It then checks if the wav file in the specified row exists. In your own script you would then read the wav file and do further analyis.

Save the following python into a file called `check_wavs.py` and copy it onto your hpc storage. 

```python
import argparse
import os
import pandas as pd

def check_file (csv, row):
    """
    Checks that the file in the given csv at the given row exists
    """

    print(f'checking row {row} in csv {csv}')
    # use pandas to read the csv into a dataframe
    df = pd.read_csv(csv)
    # extract the value of the cell from the given row in the 'file_name' column
    wav_file = df.at[row,'file_name']
    # check if the file exists and print the result
    file_exists = os.path.exists(wav_file)
    print(f'wav file {wav_file} {"exists" if file_exists else "does not exist"}')


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("-f", "--file_list_csv", required=True, help="path to csv")
    ap.add_argument("-r", "--row", default=0, help="csv row to process")

    args = vars(ap.parse_args())
    check_file(args['file_list_csv'], int(args['row']))

```

Below is an updated version of the pbs bash script, this time loading python and calling the above script.

```bash
#!/bin/bash -l
#PBS -N MyAnalysis
#PBS -l ncpus=1
#PBS -l mem=2GB
#PBS -l walltime=00:05:00
#PBS -j oe
#PBS -m abe
#PBS -M phil.eichinski@qut.edu.au
#PBS -J 0-44


# cd to dir where directory was created
cd $PBS_O_WORKDIR
echo "working directory is $PBS_O_WORKDIR"
echo "Array index is $PBS_ARRAY_INDEX"

# this the path to the csv (relative to the directory on HPC storage where you launch the batch job)
export data_file=./list_of_audio_files.csv

# load the anaconda3 module so we can use python
module load anaconda3

# activate the virtual environment we created earlier
source activate myenv

# call our python script, passing in the data file and the current array index
python3 check_files.py -f $data_file -r $PBS_ARRAY_INDEX
```

You should see the output of this this pbs batch script as well as your python script in your pbs output files.


# Sub Batching

So far we have been processing one audio file (row of our csv) per pbs batch job array index. Your institution may have imposed a limit on how many array indexes you can submit. You should check with your institution's HPC documentation to find what this limit is.

If you have more files to process than this limit, then you will need to process multiple files per array index. The following example batch script shows how to accomplish this.

In this example we have a csv with 123 rows and a limit of 50 (in reality the limit will be more like 2000, but let's keep things small for the demo)

We need to calculate the "set size", i.e. the number of rows per job: `set_size = ceiling(num_rows / limit) = 3`.

```bash
#!/bin/bash -l
#PBS -N MyAnalysis
#PBS -l ncpus=1
#PBS -l mem=2GB
#PBS -l walltime=00:05:00
#PBS -j oe
#PBS -m abe
#PBS -M phil.eichinski@qut.edu.au
#PBS -J 0-50


cd $PBS_O_WORKDIR
echo "working directory is $PBS_O_WORKDIR"
echo "Array index is $PBS_ARRAY_INDEX"

# this the path to the csv (relative to the directory on HPC storage where you launch the batch job)
export data_file=./list_of_audio_files.csv

# load the anaconda3 module so we can use python
module load anaconda3

# activate the virtual environment we created earlier
source activate myenv

# number of rows per job
set_size=3
# total number of rows
number_records=123
let "start_row = PBS_ARRAY_INDEX * $set_size"
let "end_row = $start_row + $set_size - 1"
let "end_row = ($end_row > $number_records - 1) ? $number_records - 1 : $end_row"

# loop from the start to the end row, calling the python script on each execution
# alternatively, you could code your python script to do the loop,  
# passing in the start and end rows as arguments

for (( idx = start_row;  idx <= end_row; idx++ )); do
  echo "starting $idx, batch $PBS_ARRAY_INDEX"
  python3 check_files.py -f $data_file -r $PBS_ARRAY_INDEX
done

```


