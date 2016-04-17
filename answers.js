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

//OR

//function addNumbersTogether2(number1, number2)

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
    var newString = "";
    var i = 0;
    while (i < number) {
        if (i != number) {
            newString = newString + string + "\n";
            i++;
        }
    }
    return newString;
}

//console.log(returnStringXTimes("Hello there", 5));
// returnStringXTimes("How are you doing", 2);
// returnStringXTimes("Yes?", 5);

/*Write a function that takes a string, and returns the reverse of that string. 
For example, if you pass the function the string “hello”, it should return “olleh”. 
Test your function on a few inputs, including the empty string.*/

function reverseString(string) {
    return string.split("").reverse().join("");
}
reverseString("Hello");
reverseString("The longest string in the history of the universe");
reverseString("");

/*Write a function that takes a number and returns the factorial of a number.*/

function returnNumberFactorial(number) {
    var j = 1;
    for (var i = 1; i <= number; i++) {
        j = j * i;
    }
    return j;
}


returnNumberFactorial(5);
returnNumberFactorial(0);
returnNumberFactorial(-5);

/*Write a function that takes a phrase as a string, and returns the longest word in that phrase. 
If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.*/

function returnLongestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

returnLongestWord("The last word is quite long unexpected");
returnLongestWord("Chibugaga the first word is the longest");
returnLongestWord("NewFoundLand is a long word");

//OR with REDUCE

function returnLongestWord2(string1) {
    var newArray = string1.split(" ");
    return newArray.reduce(function(prev, next) {
        if (prev.length < next.length) {
            prev = next;
        }
        return prev;
    });
}

//console.log(returnLongestWord2("The last word is quite long unexpected"));

/*Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". 
Test your function of a few inputs.*/

function capFirstLetterEachWord(string) { 
    return string.replace(/\w\S*/g, 
    function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        
    });  
}  

capFirstLetterEachWord("This is a phrase");
capFirstLetterEachWord("Here is another phrase");
capFirstLetterEachWord("This is another try");

/*Write a function that takes an array and returns the largest number of the array. 
Test your function on a few inputs.
*/

function largestElementArray(array) {
    var thisIsTheNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (thisIsTheNumber < array[i]);
        thisIsTheNumber = array[i];
    }
    return thisIsTheNumber;
}

//or

function largestElementArray(array) {
    array.sort(function(a, b){return b-a});
    return array[0];
}



//OR

function largestElementArray2(array1) {
    return array1.reduce(function(prev, next) {
        if (prev < next) {
            prev = next
        }
        return prev;
    })
}

largestElementArray([10, 50, 100, 80, 50]);
largestElementArray([10, 100, 200, 80, 50]);
//console.log(largestElementArray([900, 100, 200, 80, 800, 9999999]));

/*Write a function that takes an array, and returns a filtered array. 
The filtered array should only contain the truthy values from the initial array. 
Hint: there is an array method called filter that can help you with this :)
*/

function filteredArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

filteredArray([0, 50, 40, "", "hello",]);
filteredArray([0, 0, 0, "", "hello",]);
filteredArray([0, false, false, "", "hello",]);

//or

function filteredArray2(array) {
    return array.filter(function(value) {
        if(value) {
            return value;
        }
    })
}

filteredArray2([0, 50, 40, "", "hello",]);
filteredArray2([0, 0, 0, "", "hello",]);
filteredArray2([0, false, false, "", "hello",]);

//or

function myFilter(value) {
    if(value) {
        return value;
    }
}

function filteredArray3(array3) {
    return array3.filter(myFilter);
}

//console.log(filteredArray2([0, 50, 40, "", false, "hello",]));

/*Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.*/

function sumNumbersArray(array) {
    var number = 0;
    for(var i = 0; i < array.length; i++) {
        number += array[i];
    }
    return number;
}

sumNumbersArray([1, 1, 1]);
sumNumbersArray([20, 1, 1]);
sumNumbersArray([1, 5, 4]);

//or , with reduce

function sumUp(array55) {
    return array55.reduce(function(prev, next) {
        prev += next;
        return prev;
    })
}

//console.log(sumNumbersArray([20, 1, 1]));

/*Write a function that takes two arrays, and returns an array of all elements that are only in one array.*/

function twoArraysSliced2(array1, array2) {
    var newArray = [];
    array1.forEach(function(num) {
        if (array2.indexOf(num) === -1) {
            newArray.push(num);
        }
    })
    array2.forEach(function(num) {
        if (array1.indexOf(num) === -1) {
            newArray.push(num);
        }
    })

    return newArray;
}

//OR with concat

function concatArrays (array1, array2) {
    return array1.concat(array2);
}

twoArraysSliced2([1,2,3,4], [1,2,5,6,7]);
twoArraysSliced2([1,8,4,6,1], [10,2,1,6,7]);
//console.log(concatArrays([1,2,3,4], [1,2,5,6,7]));

/*write a function that takes an array and a function as arguments. 
The function should return a new array that maps every element of the input array by passing it through the function you received. 
You are not allowed to use Array.map for this challenge, otherwise it would be too easy*/

function mapArray(array, func) {
    var newArray = [];
    array.forEach(function(element){
        newArray.push(func(element));
    })
    return newArray;
}
console.log(mapArray([0,5,9,4,5], function(ele){return ele + 1}));