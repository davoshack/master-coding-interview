
#Requirements: Return the original names as batches, where
#Each batch has only unique items
#You use as few batches as possible
input_list = [1, 2, 3, 4, 5, 6, 6]
#expected_autput= [[1, 2, 3, 4, 5, 6], [6]]


#original_email_address = [“Alice”, “John”, “John”, “Alice”, “Cindy”, “Alice”]

#data_to_sent = [[“Alice”, “John”, “Cindy], [“Alice“, “John”], [“Alice”]]

#[1, 2, 3, 4, 5, 6, 6]

#[[1, 2, 3, 4, 5, 6], [6]]
# 1) going to the input list and try to find duplicates email
# 2) if theer is any duplicate items  in the list, create differentes batches
# 3) Minimum number of batches

def batch_names(input_list):
    for item in input_list:
        # Add indented block of code here
        pass

#input_listInput [1, 2, 3] —> [[1, 2, 3]]
#Input [1, 2, 3, 3] —> [[1, 2, 3], [3]]
#Input [1, 2, 3, 3, 2] —> [[1, 2, 3], [2, 3]]
#Input [1,2, 3, 4, 4, 5, 5] -> [[1, 2, 3, 4] [4, 5]]