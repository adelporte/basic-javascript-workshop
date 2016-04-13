//Return first character of string

function firstCharacter(word) {
    return word.substring(0,1);
}

firstCharacter("Hello");
firstCharacter("Da");
firstCharacter("");

//Return last character of string

function lastCharacter(word) {
    return word.substring(word.length -1, word.length);
}

lastCharacter("Hello");
lastCharacter("Da");
lastCharacter("");

/*Function that takes a string and a number, 
and returns the character at the position represented by the number.*/

function stringAndNumber(word, number) {
    return word.substring(number -1, number);
}

stringAndNumber("hello", 1);
stringAndNumber("Augustin", 8);
lastCharacter("");

/*Function that takes two numbers and adds them together. 
When we pass something else than a number, it simply adds the values we passed together.*/

function addNumbersTogether(number1, number2) {
    return number1 + number2;
}

addNumbersTogether(5, 5);
addNumbersTogether(10, 10);
addNumbersTogether("Hello", "You");

/*Function that takes two numbers and multiplies them together. 
When we pass soemthing else than a number, NaN is displayed as only numbers can be multiplied.*/

function multiplyNumbers(number1, number2) {
    return number1 * number2;
}
multiplyNumbers(10,10);
multiplyNumbers(2, 3);
multiplyNumbers(5,5);
multiplyNumbers("Hello", "You");

/*Write a function that takes two numbers and a string. 
If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. 
If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.*/

function twoNumbersAndString(number1, number2, string) {
    if (string === "add") {
        return number1 + number2;
    } else if (string === "subtract") {
        return number1 - number2;
    } else if (string === "mult") {
        return number1 * number2;
    } else if (string === "div") {
        return number1 / number2;
    } else {
        return 0;
    }
}

twoNumbersAndString(5, 5, "add");
twoNumbersAndString(10, 5, "subtract");
twoNumbersAndString(2, 3, "mult");
twoNumbersAndString(10, 5, "div");
twoNumbersAndString(10, 10, "hello");

//Second way to do that

function twoNumbersAndString2(number1, number2, string) {
    switch (string) {
        case "add":
            return number1 + number2;
            break;
        
        case "subtract":
            return number1 - number2;
            break;

        case "mult":
            return number1 * number2;
            break;
        
        case "div":
            return number1 / number2;
            break;
        
        default:
            return 0;
    }
}

twoNumbersAndString2(5, 5, "add");
twoNumbersAndString2(10, 5, "subtract");
twoNumbersAndString2(2, 3, "mult");
twoNumbersAndString2(10, 5, "div");
twoNumbersAndString2(10, 10, "hello");

/*Write a function that takes a string and a number, and returns the string repeated that many number of times. 
Test your function with various inputs.*/

function returnStringXTimes(string, number) {
    for (var i = 0; i <= number; i++) {
        console.log(string);
    }
}

console.log(returnStringXTimes("Hello there", 5));
console.log(returnStringXTimes("How are you doing", 2));
console.log(returnStringXTimes("Yes?", 5));