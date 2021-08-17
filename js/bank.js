function inputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputStringToNum = parseFloat(inputText);
    //clear input field
    inputField.value = '';
    return inputStringToNum;
};

function currentValue(currentId, inputAmount) {
    // debugger; // we can use debugger in browser console
    const currentValue = document.getElementById(currentId);
    var currentText = currentValue.innerText;
    const currentTextStringToNum = parseFloat(currentText);
    currentValue.innerText = currentTextStringToNum + inputAmount;
    return currentTextStringToNum;
}

// withdraw balance exist 
function withdrawExist() {
    const balanceTotal = document.getElementById('balance');
    const balanceText = balanceTotal.innerText;
    const balanceStiringToNum = parseFloat(balanceText);
    return balanceStiringToNum;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance');
    const balanceStiringToNum = withdrawExist();
    if (isAdd == true) {
        balanceTotal.innerText = balanceStiringToNum + amount;
    } else {
        balanceTotal.innerText = balanceStiringToNum - amount;
    }
}


//deposit amount
document.querySelector('#deposit-btn').addEventListener('click', function () {
    //get input deposit
    /* let depositField = document.getElementById('deposit-input');
    let newDeposit = depositField.value;
    const newDepositAmount = parseFloat(newDeposit); */


    //validate NaN
    /* if (isNaN(newDeposit)) {
        alert("Must input numbers");
        return false;
    } */

    //get the id element from html to store the input value
    /* let depositCurrent = document.getElementById('deposit-current');
    const currentDeposit = depositCurrent.innerText;
    const prevCurrent = parseFloat(currentDeposit); 
    
    // total deposiit calculation
    const totalDeposit = prevCurrent + depositAmount;
    depositCurrent.innerText = totalDeposit;
    */


    //connect with the main balance
    /* const mainBalance = document.querySelector('#balance');
    const balanceText = mainBalance.innerText;
    const balance = parseFloat(balanceText);
    const totalBalance = totalDeposit + balance; //id er sathe input er connection hocche ekhane - 
    mainBalance.innerText = totalBalance; // show after calculation */
    const depositAmount = inputValue('deposit-input');
    if (depositAmount > 0) {
        currentValue('deposit-current', depositAmount);
        updateBalance(depositAmount, true);
    }
});

//withdraw amount
document.querySelector('#withdraw-btn').addEventListener('click', function () {
    //get the input field
    /* let withdrawField = document.getElementById('withdraw-input');
    let withdrawText = withdrawField.value;
    let withdrawAmount = parseFloat(withdrawText); */


    //validate NaN
    /* if (isNaN(withdrawText)) {
        alert("Must input numbers");
        return false;
    } */

    //get the id from the html to store the value of input
    /* let withdrawCurrent = document.getElementById('withdraw-current');
    let withdrawCurrentText = withdrawCurrent.innerText
    let withdrawCurrentAmount = parseFloat(withdrawCurrentText);
    // total execute to the html element
    let totalWithdraw = withdrawAmount + withdrawCurrentAmount;

    withdrawCurrent.innerText = totalWithdraw; */


    //connect with the main balance
    /*     const mainBalance = document.querySelector('#balance');
        const balanceText = mainBalance.innerText;
        const balance = parseFloat(balanceText);
        const totalBalance = balance - totalWithdraw; //id er sathe input er connection hocche ekhane - 
        mainBalance.innerText = totalBalance; // show after calculation */
    const withdrawAmount = inputValue('withdraw-input');
    const withdrawBalanceGreater = withdrawExist();
    if (withdrawAmount > 0 && withdrawAmount < withdrawBalanceGreater) {
        currentValue('withdraw-current', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > withdrawBalanceGreater) {
        alert('Your Balance is low.')
    }

    //clear the input field
    // withdrawField.value = '';
});

