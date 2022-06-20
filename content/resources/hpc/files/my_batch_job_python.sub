#!/bin/bash -l
#PBS -N MyAnalysis
#PBS -l ncpus=1
#PBS -l mem=2GB
#PBS -l walltime=00:05:00
#PBS -j oe
#PBS -m abe
#PBS -M j.bloggs@myuniversity.edu.au
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

