//deposit amount
document.querySelector('#deposit-btn').addEventListener('click', function () {
    //get input deposit
    let depositField = document.getElementById('deposit-input');
    let newDeposit = depositField.value;
    const newDepositAmount = parseFloat(newDeposit);

    //validate NaN
    if (isNaN(newDeposit)) {
        alert("Must input numbers");
        return false;
    }

    //get the id element from html to store the input value
    let depositCurrent = document.getElementById('deposit-current');
    const currentDeposit = depositCurrent.innerText;
    const prevCurrent = parseFloat(currentDeposit);

    // total deposiit calculation
    const totalDeposit = prevCurrent + newDepositAmount;
    depositCurrent.innerText = totalDeposit;

    //connect with the main balance
    const mainBalance = document.querySelector('#balance');
    const balanceText = mainBalance.innerText;
    const balance = parseFloat(balanceText);

    const totalBalance = totalDeposit + balance; //id er sathe input er connection hocche ekhane - 

    mainBalance.innerText = totalBalance; // show after calculation

    //clear input field
    depositField.value = '';

});

//withdraw amount
document.querySelector('#withdraw-btn').addEventListener('click', function () {
    //get the input field
    let withdrawField = document.getElementById('withdraw-input');
    let withdrawText = withdrawField.value;
    let withdrawAmount = parseFloat(withdrawText);

    //validate NaN
    if (isNaN(withdrawText)) {
        alert("Must input numbers");
        return false;
    }

    //get the id from the html to store the value of input
    let withdrawCurrent = document.getElementById('withdraw-current');
    let withdrawCurrentText = withdrawCurrent.innerText
    let withdrawCurrentAmount = parseFloat(withdrawCurrentText);

    // total execute to the html element
    let totalWithdraw = withdrawAmount + withdrawCurrentAmount;

    withdrawCurrent.innerText = totalWithdraw;

    //connect with the main balance
    const mainBalance = document.querySelector('#balance');
    const balanceText = mainBalance.innerText;
    const balance = parseFloat(balanceText);

    const totalBalance = balance - totalWithdraw; //id er sathe input er connection hocche ekhane - 

    mainBalance.innerText = totalBalance; // show after calculation



    //clear the input field
    withdrawField.value = '';
});