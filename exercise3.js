//Arrow function w/ map() to square each number
    const numbers = [1, 2, 3, 4, 5];

    const squared = numbers.map(num => num * num);

    //map iterates through each element in the array.
    //creates a new array w/ squared values.

// arrow function with fiter() to get even numbers
    const evens = numbers.filter(num => num % 2 === 0);

// Arrow func w/ reduce()
    const sum = numbers.reduce((total, num) => {
        return total + num
    }, 0);

    // Outputs:
    console.log("Squared:", squared);
    console.log("Even Numbers:", evens);
    console.log("Sum:", sum);