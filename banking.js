
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
function updateBalance(reqAmount, isAdd) {
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(reqAmount);
    }
    else { balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(reqAmount); }
}

//-----------------------------------------------------------------------------------------
document.getElementById('deposit-baton').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit');
    // update corresponding chart---------------------------
    updateTotal('deposit-total', depositAmount);
    //update account balance--------------------------------
    updateBalance(depositAmount, true);
})

document.getElementById('withdraw-baton').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw');
    updateTotal('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
})

