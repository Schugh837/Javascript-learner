//print First 3 digit which matches 2 and 5 multiple values
let n =0
for(let k=1;k<=100;k++)
{
    if(k%2 == 0 && k%5 == 0)
    {
        n++
        console.log(k)
        if(n == 3)
        break
        }
    }
    console.log("************************************")

    let s = "Silky chugh arora" //only vowels should print
    let c, i
    for (i=0; i<=s.length-1; i++){
      c = s[i]  // or s.charAt(i)
      if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" ||
      c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
      console.log(c)
      }
    }

    //print table of 2
    let tableName =2
    for(let s=1;s<=10;s++)
    console.log(s* tableName)
console.log("****************************************************")
let tableNmame=4  //print table of 4
for(let v=1;v<=20;v++)
console.log(v* tableName)
//if i added two digit it should be print ,according to symbol[+,-,*,%] two digit work