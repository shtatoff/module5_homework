let x = null;
if(typeof x === 'number'){
    console.log('Х это число');
}else if(typeof x === 'boolean'){
    console.log('Х это логичиский тип данных');
}else if(typeof x === 'string'){
    console.log('Х это строка')
}else{
    console.log('Тип Х неопределен')
}