def binary_search(arr, item):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        guess = arr[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

test_arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(binary_search(test_arr_1, 5)) # 4

test_arr_2 = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28]
print(binary_search(test_arr_2, 14)) # 2

test_arr_3 = list(range(100000000))
print(binary_search(test_arr_3, 10000)) # 10000
