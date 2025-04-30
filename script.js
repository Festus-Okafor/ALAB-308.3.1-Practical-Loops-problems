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
