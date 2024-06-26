// What is the Big O of the below function? (Hint, you may want to go line by line)
anotherFunction = (i) => {
    console.log('Another function= '+ i);
  }
function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)
  
    for (let i = 0; i < input.length; i++) { //O(n)
      anotherFunction(i); //O(n)
      let stranger = true; //O(n)
      a++; //O(n)
    }
    return a; //O(1)
  }

  funChallenge([1,2,3,4,5,6,7,8,9,10]); // O(n log(n)) --> Logarithmic Time

  // Big O(3 + 4n)
  