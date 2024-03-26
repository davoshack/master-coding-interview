import math
import os
import random
import re
import sys


def minimumBribes(q):
    n = len(q)
    bribes = 0
    for i in range(n-1, -1, -1):
        if q[i] - (i + 1) > 2:  # If anyone has moved more than 2 places ahead
            print("Too chaotic")
            return
        # Check from two positions ahead of the original position to the current position
        # to count how many people the current person has passed
        for j in range(max(0, q[i] - 2), i):
            if q[j] > q[i]:
                bribes += 1
    print(bribes)

if __name__ == '__main__':
    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        q = list(map(int, input().rstrip().split()))

        minimumBribes(q)