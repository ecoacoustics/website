---
title: PBS example with Python
---

## PBS batch script example for python

So far we have got the PBS batch script working, but it doesn't actually run any analysis. This example will show
how to run a python script.

1. SSH to your HPC and create a virtual environment and install your python dependencies
2. Create a batch script
3. Run the batch script

### Python batch virtual environment and dependencies

After SSHing into your HPC account (see previous section) we are going to load Anaconda so we can create a conda
virtual environment. We are then going to install python packages in this virtual environment. Note, this is done
outside of the PBS batch script, since we only want to do this once at the beginning, not repeat it for each job index.

Run the command `module load anaconda3`. Here we are loading **Anaconda**, which is a distribution of python.
This gives us access to the **conda** package manager. Generally, software is not automatically available on HPC and
we need to load it using the `module load` command.

Now run `conda create --name myenv`

After the virtual environment has been created, run `source activate myenv` to activate it.

For more complete documentation on managing conda environments see [Managing environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)

With the virtual environment activated, we can now install packages into it. In the example below we use the pandas
package. We will install this with `conda install pandas` (actually pandas comes with anaconda so this is probably not
necessary, but your script might have other dependencies and this illustrates the process).

### Batch script for running python

For the purpose of this demo, we will create a python script that accepts as an argument a row number and a csv which
lists wav files. It then checks if the wav file in the specified row exists. In your own script you would then read
the wav file and do further analyis.

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
```

You should see the output of this this pbs batch script as well as your python script in your pbs output files.
