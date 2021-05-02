// pin generator event handler
let generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
    let pinNumber = pinGenerator();
    document.getElementById('pinNumber').value = pinNumber;
});

function pinGenerator(){
    let pinNumber = Math.round(Math.random() * 9999);

    if(pinNumber >= 1000 && pinNumber <= 9999) {
        return pinNumber;
    }
    else {
        return pinGenerator();
    }
}

// number button event handler function
function insertNum(num){
    if(document.getElementById('pinNumber').value != ''){
        let inputText = document.getElementById('user-input');
        inputText.value = inputText.value + num;
    }
    else {
        alert('Press the "Generate Pin" button and generate the pin first.');
    }
}

// submit button event handler
let submitBtn = document.getElementById('submit');
let count = 3;

submitBtn.addEventListener('click', function submit() {
    let tryCount = document.getElementById('try-count');
    let pinText = document.getElementById('pinNumber');
    let userInputText = document.getElementById('user-input');
    let pinNumber = parseInt(pinText.value);
    let userInput = parseInt(userInputText.value);

    if(pinText.value != ''){
        if(userInputText.value == ''){
            alert('please enter the pin code.');
        }
        else if(userInputText.value.length != 4){
            alert ('please enter 4 digit pin code');
        }
        else if(pinNumber === userInput) {
            displayMessage('verify-message', 'error-message');
            document.querySelector('.action-left').style.display = 'none';
            submitBtn.disabled = true;
        }
        else {
            displayMessage('error-message', 'verify-message');
            userInputText.value = '';
            tryCount.innerText = --count;
            if(count === 0){
                submitBtn.disabled = true;
            }
        }
    }
    else {
        alert('Press the "Generate Pin" button and generate the pin first.');
    }
});

function displayMessage(show, hide) {
    document.getElementById(show).style.display = 'block';
    document.getElementById(hide).style.display = 'none';
}

// cancel button event handler function
function cancel() {
    document.getElementById('user-input').value = '';
};

// backspace button event handler function
function backspace(){
    let userInput = document.getElementById('user-input').value;
    document.getElementById('user-input').value = userInput.slice(0, userInput.length -1);
};
