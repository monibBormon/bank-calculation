//deposit and withdraw amount
document.getElementById('deposit-btn').addEventListener('click', function () {
    console.log('click');
    //get input withdraw
    let depositField = document.getElementById('deposit-input');
    let depositAmount = depositField.value;

    //get deposit current
    let depositCurrent = document.getElementById('deposit-current');

    depositCurrent.innerText = depositAmount;
    //clear input field
    depositField.value = '';

})