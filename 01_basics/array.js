//array is collection of elements
//let marks = Array(6) //it is one way that var hold 6 values 

//let mark = new array(20,56,67,22,78,100)

/*
var marks = [20,56,67,22,78,100] //it is using most
console.log(marks[2])
marks[3] = 45 // replaced with this numbr
console.log(marks[3])
console.log(marks)
console.log(marks.length)
marks.push(65)//increase the array size
console.log(marks)
marks.pop()// deleted last number from array
marks.unshift(6) //this is use to add numbr to begning to the array
console.log(marks)
*/
var marks = [20,56,67,22,78,100]
submarks=marks.slice(2,5)//Want to create sub array from main array
console.log(submarks)
console.log(marks)
console.log(marks.indexOf(100))
//135 is present in array or not so how we checked
console.log(marks.includes(135))
console.log(marks.includes(78))
console.log("******************************")
//qus:-add all the number which is present in array

var sum = 0

for(let i =0;i<marks.length;i++)
{
    //console.log(marks[i])
sum = sum + marks[i]
}
console.log(sum)

/*var multiple = 1

for(let i =1;i<marks.length;i++)
{
    //console.log(marks[i])
multiple = multiple * marks[i]
}
console.log(multiple)*/
//*****************************REDUCE/FILTER/MAP*****************************/
/*The map() method is used for creating a new array from
 an existing one, applying a function to each one of the elements of the first array.*/
 
 /*The filter() method takes each element in an array and it applies a conditional statement against it. 
 If this conditional returns true, the element gets pushed to the output array. 
 If the condition returns false, the element does not get pushed to the output array.
 */ 

 /*The reduce() method reduces an array of values down to just one value. 
 To get the output value, it runs a reducer function on each element of the array.*/

 













