
// homepage login system
document.querySelector('#login-btn').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    //get user password
    const passField = document.getElementById('password');
    const userPass = passField.value;
    //check email & password
    if (userEmail == 'monibbormon@gmail.com' && userPass == 'taka') {
        window.location.href = 'banking.html';
    } else {
        alert('Please enter correct email or password!!')
    }
});

// press enter to log in 
/* document.querySelector('#password').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        document.getElementById("enter").submit();
        return false;
    }
}); */
