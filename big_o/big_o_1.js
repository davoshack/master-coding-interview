const nemo = ['nemo'];
const large = new Array(100).fill('nemo');
const everyone = ['dory', 'bruce', 'marlin', 'hank', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'nemo'];
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log('running')
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}
findNemo(everyone) // O(n) --> Linear Time

// O(1) --> Constant Time
//const boxes = [0,1,2,3,4,5];
//function logFirstTwoBoxes(boxes) {
//  console.log(boxes[0]); // O(1)
//  console.log(boxes[1]); // O(1)
//}
function hasCommonItems(list1, list2) {
  for (let item1 of list1) {
    for (let item2 of list2) {
      if (item1 === item2) {
        return true;
      }
    }
  }
  return false;
}

const list1 = ['apple', 'banana', 'orange'];
const list2 = ['pear', 'grape', 'banana'];

console.log(hasCommonItems(list1, list2)); // Output: true

function hasCommonItems2(list1, list2) {
  let map = {};
  for (let item1 of list1) {
    if (!map[item1]) {
      map[item1] = true;
    }
  }
  for (let item2 of list2) {
    if (map[item2]) {
      return true;
    }
  }
  return false;
}