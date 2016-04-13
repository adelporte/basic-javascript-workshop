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