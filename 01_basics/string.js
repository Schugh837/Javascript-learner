//string is collection of characters
let day = 'tuesday '
console.log(day.length)
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])
//if we split one string into two
let splitDay = day.split("s")
console.log (splitDay[1].length)
console.log (splitDay[1].trim())//trim remove whitespace from left and right 

let date = '23'
let nextDate = "27"
let diff= parseInt(nextDate) - parseInt(date)//convert string into integer ->back int to string use toString()
console.log(diff)

//Concat method in js:-means joins two or more strings- returns a new string
let newQuote =day+ "is Funday"
console.log(newQuote) 
//i want to know where day is present
let val =newQuote.indexOf("day",5)
console.log(val)