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