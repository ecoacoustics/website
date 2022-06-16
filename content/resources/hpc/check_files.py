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
