
function getInputValue() {
    const depositInput = document.getElementById('deposit');
    const depositAmount = depositInput.value;
    //clear input field----------------------
    depositInput.value = '';

    return depositAmount;
}


//-----------------------------------------------------------------------------------------
document.getElementById('deposit-baton').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit');
    // const depositAmount = depositInput.value;
    const depositAmount = getInputValue();

    // get current deposit amount and add with previous-------------
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount);

    //update account balance----------------------------------------
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount);

    //clear input field----------------------
    // depositInput.value = '';
})

document.getElementById('withdraw-baton').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw');
    const withdrawAmount = withdrawInput.value;

    // get current withdraw amount and subtract with previous-------------
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawAmount);

    //update account balance----------------------------------------
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmount);

    //clear input field----------------------
    withdrawInput.value = '';
})

