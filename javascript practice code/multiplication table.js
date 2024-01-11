//Print a table containing multiplication tables
const tabbelRange = 10;

for(let i=1; i<=tabbelRange;i++) {
    let row =  " ";
    for(let j=1; j<=tabbelRange; j++){
        row +=`${i}x${j}=${i*j}\t`
    }
    console.log(row)
}


// This code uses two nested for loops to generate the multiplication table. The outer loop iterates from 1 to 10 (or any other number you specify in tableRange), representing the multiplicand, and the inner loop iterates from 1 to 10 (the multiplier). It calculates the product and prints the result in a tab-separated format.

// You can easily expand this code to generate multiplication tables for numbers higher than 10 by changing the tableRange variable to the desired number.