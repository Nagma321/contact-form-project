import sys

data = sys.argv[1]

with open("data.txt", "a") as file:
    file.write(data + "\n")

print("Saved")
