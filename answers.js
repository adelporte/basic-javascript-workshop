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