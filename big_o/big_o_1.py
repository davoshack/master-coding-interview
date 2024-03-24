import time

list_movies = ['nemo']
start_time = time.time()

# Your loop code here
for i in list_movies:
    if i == 'nemo':
        print('Found Nemo!')

end_time = time.time()
execution_time = end_time - start_time
print(f"Execution time: {execution_time} seconds")
