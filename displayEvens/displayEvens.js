function errorCheck() {
    for (var loopCounter = 0; loopCounter < document.forms['evenForm'].elements.length; loopCounter++) {
        if (document.forms['evenForm'].elements[loopCounter].parentElement.className.indexOf('has-') != -1) {
            document.forms['evenForm'].elements[loopCounter].parentElement.className = 'form-group';
        }
    }
}


function displayEvens() {
    errorCheck();
    var num1 = document.forms["evenForm"]["startNum"].value;
    var num2 = document.forms['evenForm']['endNum'].value;
    var stepInterval = document.forms['evenForm']['step'].value;
    if ((num1 == "") || (isNaN(num1))) {
        alert('Starting Num needs to be a number');
        document.forms['evenForm']['startNum'].parentElement.className = 'form-group has-error';
        return false;
    }
    if (stepInterval == "" || (isNaN(stepInterval))) {
        alert('Step needs to be a number');
        document.forms['evenForm']['step'].parentElement.className = 'form-group has-error';
        return false;
    }
    if (num2 == "" || (isNaN(num2))) {
        alert('Ending Number needs to be a number');
        document.forms['evenForm']['endNum'].parentElement.className = 'form-group has-error';
        return false;
    }
     if (num2 <= num1) {
        alert('Ending number need to be higher than Starting Number');
       document.forms['evenForm']['endNum'].parentElement.className = 'form-group has-error';
        return false;
    }
    document.getElementById('results').style.display = 'block';
    document.getElementById('startDis').innerText = num1;
    document.getElementById('endDis').innerText = num2;
    document.getElementById('stepDis').innerText = stepInterval;
    var evenNums = [];
    for (var i = Number(num1); i <= num2; i = i + Number(stepInterval)) {
        if (i % 2 == 0) {
            evenNums += i +"\n";
        }
        document.getElementById('evenResults').innerText = evenNums;
        
    }
    return false;
}