numbers = [1, 4, 2, 4]


def has_pair_with_sum(numbers, sum):
    numbers.sort()
    low = 0
    high = len(numbers) - 1
    while low < high:
        s = numbers[low] + numbers[high]
        if s == sum:
            return numbers[low], numbers[high]
        if s > sum:
            high -= 1
        else:
            low += 1
    return None, None

number1, number2 = has_pair_with_sum(numbers, 8)  # True
print(number1, number2)
print(number1 + number2)

