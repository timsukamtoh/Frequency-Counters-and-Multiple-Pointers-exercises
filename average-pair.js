// add whatever parameters you deem necessary & write docstring
/**
 * Step 1:
 * takes a sorted array of numeric values and a target average
 * determines if there is a pair of numbers in the array whose average matches the target average
 * there may be multiple pairs
 * returns a boolean - true if there is a pair and false if there is not
 * Step 2:
 * averagePair([1, 2, 3], 2.5);         // true
 * averagePair([], 6);                  // false
 * Step 3:
 *  1. create 2 pointers to be used in loop
 *  2. create the loop that we iterate through
 *  3. create the comparison for every iteration that checks the pair of pointers to the target (if equal to, return true)
 *  4. if the target is greater than the avgerage, increment the lower pointer, and vice versa
 *  5. if finishes the loops finishes, return false
 * Step 4:
 */
function averagePair(nums, targetAvg) {
  let lower = 0;
  let higher = nums.length - 1;

  while(lower < higher) {
    const pairAvg = (nums[lower] + nums[higher]) / 2;
    if(pairAvg === targetAvg) {
      return true;
    }
    if(targetAvg > pairAvg) {
      lower++;
    } else {
      higher--;
    }
  }

  return false;
}

