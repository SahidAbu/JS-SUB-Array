const arr = [1, 2, 3, 4, [10,20,30],5,3,2,1,[40,50,60],4,5];
const Arr=arr.toString().split(",")
let Array=JSON.parse('[' +Arr.join(',')+']');
console.log(Array);