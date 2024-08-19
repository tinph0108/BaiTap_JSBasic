// Print numbers from 1 to 10
for ( i = 1; i <= 10; i++) {
    console.log(i);
}

// Print the odd numbers less than 100
for ( i = 1; i < 100; i += 2) {
    console.log(i);
}

//Print the multiplication table with 7
for ( i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// Print all the multiplication tables with numbers from 1 to 10
for ( i = 1; i <= 10; i++) {
    console.log(`Bảng cửu chương của ${i}:`);
    for ( j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-----------------');
}


// Calculate the sum of numbers from 1 to 10
sum = 0;
for ( i = 1; i <= 10; i++) {
    sum += i;
}
console.log('Tổng từ 1 đến 10 là:', sum);


// Calculate 10!
factorial = 1;
for ( i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log('10! =', factorial);


// Calculate the sum of even numbers greater than 10 and less than 30
 evenSum = 0;
for ( i = 12; i < 30; i += 2) {
    evenSum += i;
}
console.log('Tổng các số chẵn lớn hơn 10 và nhỏ hơn 30 là:', evenSum);


// Create a function that will convert from Celsius to Fahrenheit
 function chuyenCsangF(celsius) {
     return celsius * 9/5 + 32;
 }

 console.log('25°C =', chuyenCsangF(25), '°F');

// Create a function that will convert from Fahrenheit to Celsius
function chuyenFsangC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log('77°F =', chuyenFsangC(77), '°C');

// Calculate the sum of numbers in an array of numbers
 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 arraySum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Tổng của các số trong mảng là:', arraySum);


// Calculate the average of the numbers in an array of numbers
 average = arraySum / numbers.length;
console.log('Trung bình cộng của các số trong mảng là:', average);
