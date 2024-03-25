const nemo = ["nemo"];
const large = new Array(100).fill("nemo");
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "hank",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "nemo",
];
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found NEMO!");
    }
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("Found NEMO!");
    }
  }
};
findNemo(everyone);
findNemo2(everyone);
findNemo3(everyone);
