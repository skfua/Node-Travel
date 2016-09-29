var arr = []

for (i = 0; i <= 100; i++ ) {
    arr.push(i);
  };

arr.forEach(function (item) {
  if (item % 15 ===0 && item != 0) {
    console.log(item + "FizzBuzz")
  } else if (item % 5 === 0 && item != 0) {
    console.log(item + "Fizz")
  } else if (item % 3 === 0 && item !=0) {
    console.log(item + "Buzz")
  } else {
    console.log(item)
  }
});




// console.log(arr)
