---
title: HPC Templates
---

# Introduction

If you have a lot of analysis to do, your insitute's high performace computing (HPC) resources might be a good solution.

These are collections of many computers that are shared among a lot of people. To use them, you submit "jobs" which are queued in a scheduler called PBS. 

PBS jobs are used to run your code on HPC.  The code is not run immediately, but queued to run when resources open up. The time in the queue depends on how busy HPC is and how much time your job will take.

Here are some guides available online

[https://www.cqu.edu.au/eresearch/high-performance-computing/hpc-user-guides-and-faqs/pbs-commands](cqu)

PBS *batch jobs* are useful when you want to run your analysis on many files independently. That is, the results from one file are not used for the analysis of another and they can be done in any order.  This means that they each can be sent to a different computer and run in parallel at the same time. An example of this might be running a species recognizer over thousands of audio files.

To run a batch job you need to:

1) Create a PBS batch script
2) Transfer your analysis scripts and PBS batch script to HPC storage
3) Set up the environment on HPC, such as making sure python or R dependencies are available
4) run the PBS commandline command to queue the batch job



# PBS batch job script

To launch a PBS batch job, you must first create a pbs batch script. 
This is a bash script (a kind of scripting language) with some special PBS instructions. 

In this section we will show an basic example script and explain all the bits. 

## Minimal example

First we will just show a bare minimum empty example. This will simply output the all the rows of a csv, with each row being assigned to a different PBS job within the PBS batch. 


```bash

#!/bin/bash -l
#PBS -N SpeciesClassifier
#PBS -l ncpus=8
#PBS -l mem=8GB
#PBS -l walltime=${walltime}
#PBS -j oe
#PBS -m abe
#PBS -M philip.eichinski@qut.edu.au
#PBS -J 0-${num_jobs}


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

The above code should be put in a file that has the extension `.sub`. 

The first few lines, prefixed with #PBS are configuration for the script. 

### configuration options

- `#PBS -N myNiceAnalysis` This is the name of the job, just for your reference
- `#PBS -l ncpus=8` The number of CPUs. The more cpus you allocate, the longer it might take to be scheduled because it has to wait for available resources. 
- `#PBS -l mem=8GB` The amount of RAM needed. Again, more ram might mean a longer wait
- `#PBS -l walltime=10` The amount of time you estimate each job will take to process at most. The scheduler will try to fit your jobs in based on this, so the higher the walltime, the longer it might take to get schedule. If a job takes longer than this, it will terminate early. 
- `#PBS -j oe` This merges standard error to standard output. TODO: explain this
- `#PBS -m abe` This defines when to send you an email. Because you don't have control and don't know when the job will start or has finished executing, or had a problem and aborted, it is useful to receive this information by email. In this case the options specify that mail should be sent when the when the job is aborted by PBS (a), when the job begins execution (b) and when the job terminates (c).
- `#PBS -M my.email.address@university.edu.au` This is where to send the notification emails.
- `#PBS -J 0-987` The indexes that will be executed. In this case, it will run this script with the `$PBS_ARRAY_INDEX` environment variable set to the integers 0 to 987

### environment variables

There are several environment variables that are available to the script. 

- PBS_ENVIRONMENT
  - set to PBS_BATCH to indicate that the job is a batch job;
  - otherwise, set to PBS_INTERACTIVE to indicate that the job is a PBS interactive job
- PBS_JOBID 
  - the job identifier assigned to the job by the batch system
- PBS_JOBNAME 
  - the job name supplied by the user
- PBS_NODEFILE 
  - the name of the file that contains the list of the nodes assigned
to the job
- PBS_QUEUE 
  - the name of the queue from which the job is executed
- PBS_O_HOME 
  - value of the HOME variable in the environment in which qsub was executed
- PBS_O_LANG value of the LANG variable in the environment in which qsub
was executed
- PBS_O_LOGNAME 
  - value of the LOGNAME variable in the environment in which
qsub was executed
- PBS_O_PATH 
  - value of the PATH variable in the environment in which qsub
was executed
- PBS_O_MAIL 
  - value of the MAIL variable in the environment in which qsub
was executed
- PBS_O_SHELL 
  - value of the SHELL variable in the environment in which qsub
was executed
- PBS_O_TZ 
  - value of the TZ variable in the environment in which qsub was
executed
- PBS_O_HOST 
  - the name of the host upon which the qsub command is running
- PBS_O_QUEUE 
  - the name of the original queue to which the job was submitted
- PBS_O_WORKDIR 
  - the absolute path of the current working directory of the qsub
command


