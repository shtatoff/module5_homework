let arr = [2, 4, 12, 22, 67];
console.log(arr.length);
arr.splice(3, 0, 108);
console.log(arr);
arr.pop();
console.log(arr);
for (let i = 0; i < arr.length; i++){ 
    console.log(arr[i]); 
}