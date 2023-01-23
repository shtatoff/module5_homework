function reverseString(str){
    if(str === ""){
        return str
    }else{
        return reverseString(str.slice(1)) + str.charAt(0)
    }
}
console.log(reverseString('Hello'))