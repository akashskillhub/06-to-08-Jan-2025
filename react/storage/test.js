
const arr = [10, 20, 30]
const arr1 = [40, 50, 60]
const [x] = [...arr, arr1]
console.log(x)

/* [
        10, 
        20,
        30,
        [40, 50, 60]
   ] 
 */