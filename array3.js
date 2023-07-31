let nos =[1,2,3,4,5];
//shift method 
let fno =nos.shift()
console.log("Array after shift :",nos);
console.log("The no got shifted:",fno);
//unshift
nos.unshift(10);
console.log("Array after unshift:",nos);
let nums=[1,2,3,4,5];
//noms.splice(4,5);
nums.splice(2,0,10);//index no,no of elements to replace 
console.log("Array after splice insertion:", nums);
