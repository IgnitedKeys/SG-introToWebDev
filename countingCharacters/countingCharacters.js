function countingCharacters(stringToCount){
    console.log(stringToCount + ' has ' + stringToCount.length + ' characters.');
}

function countingCharacters2(stringToCount, characterToFind) {
    var characterCount = 0;
    for (var characterPos = 0; characterPos < stringToCount.length; characterPos++) {
        if (stringToCount[characterPos] == characterToFind){
            characterCount++
        }
    }
    console.log('String to search in : ' + stringToCount);
    console.log('Character to find: ' + characterToFind);
    console.log('Number of times the character appears: ' + characterCount);
}

function countingCharacters3(str, search){
    var count = 0;
    var numChars = search.length;
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
        var current = str.substring(index, index + numChars);
        if (current == search){
            count++;
        }
    }
    return count;
}