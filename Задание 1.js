let n = +prompt('Введите число');
if(typeof n !== 'number'){
    alert('Это не число')
}else if (isNaN(n)){
    alert('Это не число (NAN)')
}
else if (n % 2 === 0){
    alert('четное')
}else{
    alert('нечетное')
}