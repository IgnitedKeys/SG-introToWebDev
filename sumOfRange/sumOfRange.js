var testArray = [17,42,311,5,9,10,28,7,6];
var sum = 0;
for (var arrayPostion = 0; arrayPostion <testArray.length; arrayPostion++) {
    sum += testArray[arrayPostion];
}
console.log('the sum of ' + testArray + ' is: ' + sum);

function findMax(array) {
    var currentMax = 0;  
    for (var arrayPostion = 0; arrayPostion < array.length; arrayPostion++){
        if (array[arrayPostion] > currentMax){
            currentMax = array[arrayPostion];
        }
    }
    console.log(currentMax);
}   