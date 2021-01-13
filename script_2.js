const arr = [10, 15, 3, 7];
const k = 17;

const subjectOne = (arr, k) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;
};

console.log(subjectOne(arr, k));




