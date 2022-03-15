/*
  Rewrite the Problem in your Own Words here:

  Return true if the sum of any pair of numbers inside array equals to the target number.
*/
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const getSum = array[i] + array[j];
      if(getSum === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here:

  Quadratic 0(n^2) - needs optimization!
*/

/* 
  Add your pseudocode here:

  for every pair of numbers in the array
    if the sum of two equal to the target
      return true.
*/

/*
  Add written explanation of your solution here
  I used a couple of for loops to iterate through the array two numbers at a time, then used an if statement to return true if the sum of two of those numbers equal the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('');

  console.log('Expecting: false');
  console.log('=>', hasTargetSum([7, 2, 8, 3, 6, 9], 21));
  
  console.log('');

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
