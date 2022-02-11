
function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputAmount = inputField.value;
    //clear input field----------------------
    inputField.value = '';
    return inputAmount;
}
function updateTotal(totalFieldId, amount) {
    // debugger;
    const prevTotal = document.getElementById(totalFieldId);
    const prevTotalText = prevTotal.innerText;
    prevTotal.innerText = parseFloat(prevTotalText) + parseFloat(amount);
    return prevTotalText;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const prevBalance = parseFloat(balanceTotalText);
    return prevBalance;
}
function updateBalance(reqAmount, isAdd) {
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalText + parseFloat(reqAmount);
    }
    else { balanceTotal.innerText = balanceTotalText - parseFloat(reqAmount); }
}

//-----------------------------------------------------------------------------------------
document.getElementById('deposit-baton').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit');
    // update corresponding chart---------------------------
    if (depositAmount > 0) {
        updateTotal('deposit-total', depositAmount);
        //update account balance--------------------------------
        updateBalance(depositAmount, true);
    }
    else { alert('Enter a positive amount.') }
})

document.getElementById('withdraw-baton').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotal('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else { alert('Enter a positive-valid amount.') }
})

