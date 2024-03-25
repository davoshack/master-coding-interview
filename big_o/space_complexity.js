//Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

boooo([1, 2, 3, 4, 5]);

function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  console.log(hiArray);
  return hiArray;
}

// New array is created with n elements
// O(n) space complexity
arrayOfHiNTimes(6);
