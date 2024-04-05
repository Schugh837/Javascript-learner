/* let a = 4 //let is as a var, if we can declare var use let , const
console.log(a)
console.log(typeof(a))

let b = "Silky"
console.log(typeof(b))

let required = true
console.log(typeof(required))


//we cannot redeclare variable with let keyword but possible with var keyword */

// *********************LOOPS**********************************
//if else
/* const flag = true

if(!flag)
{
console.log("condition statisfied")
}
else{
    console.log("condition not statisfied")   
}
*/
//while loop
/* while(true)
{
  //  console.log("i am inside loop")
}*/

/*let i = 0
while(i<10)
{
    i++
    console.log(i)
}*/

/*let i = 0
while(i>10)
{
    i++
    console.log(i)
}
do  //do while is used when before condition check do condition should be execute
{
  i++
}while(i>10);
console.log(i)*/

//For loop
/*for(let k=0;k<=10;k++)
{
  console.log(k)
}*/
// now print multiple of 2 and 5 so built logic here so from 1 to 10 we print common multiple of 2 and 5
for(let k = 1;k<=100;k++)
{
  //if (k%2== 0 && k%5 == 0) && this used as and means output should same comparsing both || OR Opreator used output come from both
  if (k%2== 0 || k%5 == 0)
  console.log(k)
}
