

//Part 1: Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`Fizz Buzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz `);
  } else if (i % 5 == 0) {
    console.log(`Buzz ` + i);
  } else {
    console.log(i);
  }
}

console.log(`....................`);
//Part 2: Prime Time
let number = 14796;

let isPrime = true;

for (let i = 2; i < number; i++) {
  // console.log(i)

  if (number % i === 0) {
    console.log(i, "it is not a prime");
    isPrime = false;
  }
}
if (isPrime) {
  console.log(number + " is prime");
} else {
  console.log(number + " is not a prime");
}





//part 3
//Feeling loopy Problem
//new line is used as a escape line
//
let csvData = ["ID","Name","Occupation",
"Age","\n","42","Bruce","Knight","41","\n","57",
"Bob","Fry","Cook","19","\n","63",
"Blaine","Quiz","Master",
"58","\n","98","Bill","Doctor’s","Assistant","26"]

for (let i =0; i<csvData.length; i++){

    if(csvData[i]==ln){
       console.log(`cell1`);
    }
}




console.log(`....................`);

let mixString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41,\n,57,Bob,Fry,Cook,19,\n,63,Blaine,Quiz-Mster,58,\n,98,Bill,Doctor’s-Assistant,26"
//let Data = "Index, Mass (kg), Spring 1(m), Spring 2(m)" 


   let cell1 = '';
   let cell2 = '';
   let cell3 = '';
   let cell4 = '';


for( let i = 0; i < mixString.length; i++){
 let char = mixString[i]
     cell1 += char;
     if(char === '\n'){
        continue;
   }
}
   console.log(cell1);
  
    

 