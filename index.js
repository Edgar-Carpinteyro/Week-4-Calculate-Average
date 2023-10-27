let arrayOfNumbers = [10, 10, 10];

function calculateAverage(arrayOfNumbers) {
    let sumOfNumbers = 0

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sumOfNumbers += arrayOfNumbers[i];
    }

    let averageOfNumbers = sumOfNumbers / arrayOfNumbers.length;
    console.log(averageOfNumbers); 
}

calculateAverage(arrayOfNumbers);