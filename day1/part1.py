import math
sum = 0
with open('data.txt', 'r') as dataFile:
    for line in dataFile:
        sum += int(math.floor(int(line.rstrip())/3) - 2)
print(sum)
