// homepage login system
document.getElementById('login-btn').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    //get user password
    const passField = document.getElementById('password');
    const userPass = passField.value;
    //check email & password
    if (userEmail == 'monibbormon@gmail.com' && userPass == 'taka') {
        window.location.href = 'banking.html';
    }
});


//deposit and withdraw amount
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get input withdraw
    let depositField = document.getElementById('deposit-input');
    let depositAmount = depositField.value;

    //get deposit current
    let depositCurrent = document.getElementById('deposit-current');

    depositCurrent.innerText = depositAmount;
    //clear input field
    depositField.value = '';

});