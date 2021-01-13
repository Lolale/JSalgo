const randomArray = () => {
  let str = ""
  for(let i = 0; i <=10; i++){
    str += (Math.floor((Math.random () *100 - Math.random () * 100)) % 50) + ""
  }
  console.log(str);
}
const big = [8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321]
const lil = [48, -2, 6, 12, 0, -4]


const insertionSort = (inputArr) => {
  let count = 0;
  inputArr = inputArr.split('');
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && inputArr[j] > key) {
        count++;
          inputArr[j + 1] = inputArr[j];
          j = j - 1;
      }
      inputArr[j + 1] = key;
  }
  return [`${count} : `,inputArr];
};




