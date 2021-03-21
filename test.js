//Slow version | 5n + 2 operations or O(n)
const slowAddUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
// faster version | has 3 operations or O(1)
const fastAddUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(fastAddUpTo(200000000000000));
/* this is an axample of a frequency counter with this method we can 
avoid using nexted loops which means we get a runtime of O(n) instead
of a runtime of O(n>2)*/
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let checkString = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    checkString[letter]
      ? (checkString[letter] += 1)
      : (checkString[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!checkString[letter]) {
      return false;
    } else {
      checkString[letter] -= 1;
    }
  }
  return true;
};

console.log(anagram('aaaaaa', 'aaaaaa'));

/*here are two examples of muliple Pointer functions, they use two
points of data and move up and down the array. this is a replacement for nested
loops*/

const multiplePointers = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(multiplePointers([1, 1, 2, 2, 2, 3, 5, 6, 6]));

const multiplePointers2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(multiplePointers2([-4, -3, -2, 0, 1, 3, 5, 7, 8]));

var findLucky = function (arr) {
  // init an anwser array
  let lookupNumbers = {};
  // loop threw the arr and sort the numbers
  for (let number of arr) {
    lookupNumbers[number]
      ? (lookupNumbers[number] += 1)
      : (lookupNumbers[number] = 0);
  }
  return lookupNumbers;
  // check to see if a number repeted the amount = to the number
  //if there is one return it if there isnt one return -1
};

console.log(findLucky([4, 5, 6, 3, 2, 2, 8, 8, 4]));
