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
/*var marks = [20,56,67,22,78,100]
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

 //let total=marks.reduce((Sum,totalMarks)=>sum+totalMarks,0)
 //console.log(total)
//******************************Just print onlu even number */
 /*var scores=[12,13,14,16,20,22,18]
 var evenScores =[]
 console.log(scores.length);
 for(let i=0;i<scores.length;i++)


    {
        
    if(scores[i] %2==0)
        {
            evenScores.push(scores[i])
        }
    }
    console.log(evenScores)
    let newFilterEvenScores =scores.filter(score=>score%2==0)
    console.log(newFilterEvenScores)*/
 /********************* MAP ******************************* */
 //Basically map is from one valuye to new value
 /*let mapArray=newFilterEvenScores.map(score=>score*3)
 console.log(mapArray)
  let totalValue=mapArray.reduce((sum,val)=>sum+val,0)
  console.log(totalValue)*/

  //create above code in minmum line
  var scores1=[2,6,8,12,15,19,22,24,26,29]
   let sumValue=scores1.filter(scores1=>scores1%2==0).map(scores1=>scores1*3).reduce((sum,val)=>sum+val,0)
   console.log(sumValue)
   /*SORTING AN ARRAY USED STRING and sort array*/
   let fruits=["mango","pear","apple","cherry","berry"]
   console.log(fruits.sort())
   // want to reverse the sort order use:- 
   console.log(fruits.reverse())
   
   /*sort an array if we have number with custom logic*/

   var scores1=[2,6,8,12,65,89,22,24,29] //we are using bubble sort with recurcive manner

   console.log(scores1.sort((a,b)=> a-b)) // reverse order  console.log(scores1.sort((a,b)=> b-a))














