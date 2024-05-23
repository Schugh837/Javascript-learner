//block of code can be execute together or wrapping the code is called function
function add(a,b)
{
    return a+b
}
let sum= add(2,3)
console.log(sum)
//anonymous function=>donot have name(function expression) two way to wite anonymous fun

let sumOfIntegers = function(c,d)
{
    return c+d
}
console.log(sumOfIntegers(5,9))

let sumOfNumbers = (c,d)=> c*d //=> this sign represnt anonymous function
   console.log(sumOfNumbers(4,6))

//Scope let,var,const keyword