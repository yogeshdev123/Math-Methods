
console.log("Round each element to 2 decimal places in the following array")
var arr=[12.3450, 67.89, 34.00];
console.log(arr)
for(let i in arr){
arr[i]=arr[i].toFixed(4);    
}
console.log(arr);
console.log("Convert each element to an integer using parseInt()");
var arr=['123abc', '456def', '789ghi'];
console.log(arr)
for(let i in arr){
arr[i]=parseInt(arr[i]);
}
console.log(arr);

console.log("Below code Checks if each element is an integer using isInteger()");
var arr=[12, 34.56, 78, 90.12];
console.log(arr)
for(let i of arr){
if(Number.isInteger(i))console.log(i,"is an integer");
else console.log(i,"is not an integer");
}

console.log("Below code Checks if each element is an NaN using isInteger()");
var arr=['abc', 123, 'def', 456];
console.log(arr)
for(let i of arr){
if(isNaN(i))console.log(i,"is an NaN");
else console.log(i,"is not an NaN");
}

console.log("Below code Formats each element to have a precision of 4 significant digits");
var arr=[123.456, 789.012, 345.678];
console.log(arr)
for(let i in arr){
arr[i]=arr[i].toPrecision(4)
}
console.log(arr);
console.log("5 digit OTP Generator");
console.log(Math.floor(Math.random()*(99999-10000)+10000))