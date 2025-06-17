# 🧩 Problem: Two Sum (LeetCode #1)
# Given an list of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

# create a function that takes in 2 arguments: an array and a target number
#  loop through the array
#  for each number, check if there is another number in the array that adds up to the target
# if yes, return an list with both of their indexes
# if no pair is found, return an empty list or null

num_list = [2,7,11,15] 
target = 9 

def two_sum(y, target):
    for i in range(len(y)):
        for j in range(i +1, len(y)):
            if y[i] + y[j] == target:
                return [i, j]
    return None

print(two_sum(num_list, target))