let arr = [1, 2, 5, 6, 8, undefined, null, ''];
let resultEven = 0;
let resultOdd = 0;
let resultOther = 0;
for(i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
        if (arr[i] % 2 === 0){
            resultEven += 1;
        }else if(arr[i] % 2 !== 0){
            resultOdd += 1;
        }
    }else{
        resultOther += 1;
    }
}
console.log(`Четные ${resultEven}`)
console.log(`Нечетные ${resultOdd}`)
console.log(`Другие элементы ${resultOther}`)