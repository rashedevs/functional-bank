
function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputAmount = inputField.value;
    //clear input field----------------------
    inputField.value = '';
    return inputAmount;
}
function updateTotal(totalFieldId, amount) {
    debugger;
    const prevTotal = document.getElementById(totalFieldId);
    const prevTotalText = prevTotal.innerText;
    prevTotal.innerText = parseFloat(prevTotalText) + parseFloat(amount);
    return prevTotalText;
}

//-----------------------------------------------------------------------------------------
document.getElementById('deposit-baton').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit');
    // update corresponding chart---------------------------
    updateTotal('deposit-total', depositAmount);

    //update account balance-------------------------------------
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount);

})

document.getElementById('withdraw-baton').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw');
    // update corresponding chart---------------------------
    updateTotal('withdraw-total', withdrawAmount);

    //update account balance----------------------------------------
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmount);
})

