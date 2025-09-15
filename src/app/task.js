// 1.
const minmax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        } 
    }
    return {min, max};
}
console.log(minmax([4, 9, 2, 11, 7]));

// 2.
const isPrime = (n) => {
    if (n <= 1) {
        return 'Tub son emas'; 
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return 'Tub son emas';
        }
    }
    return 'Tub son'
}

console.log(isPrime(1));

// 3.
const reverseNumbers = (n) => {
    for(let i = n; i >= 1; i--){
        console.log(i);
    }
}
reverseNumbers(20);

// 4.
const digitSum = (n) => {
    let sum = 0;

    while(n > 0){
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(digitSum(999));

// 5.
const reverseNumber = (n) => {
    for(let i = 0; i < n; i--){
        console.log(i);
    }
}
reverseNumber(123)

// boshqa masalalarga unchalik tushinmadim ustoz :(





