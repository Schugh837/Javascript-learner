//js object:-collection of properties
//What is properties:-

let person= {                //person is there object
    firstName: 'Silky',
    lastName: 'chugh',
      age : 26,
      fullName : function()
      {
        console.log(this.firstName+this.lastName)
      }

}
console.log(person.fullName()) //() this is importent when added function
console.log(person.lastName)     //object.property
//console.log(person['lastName'])
//person.firstName = 'silky silk'  //change the property value
//console.log(person.firstName) 
person.gender = 'male'
console.log(person)
//delete person.gender
//console.log(person)
//Checking property exist in object
console.log('gender' in person)
//print all the values of the js object
for(let key in person)
{
    console.log(person[key])

}
                     