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