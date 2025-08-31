document.getElementById("transfer-money-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const transferMoneyUserMobileNumber = getInputValue("transfer-money-user-mobile-number");
    const transferAmount = getIntegerInputValue("transfer-amount");
    const transferMoneyPinNumber = getIntegerInputValue("transfer-money-pin-number");
    const mainBalance = getIntegerElementValue("main-balance");


    if (transferAmount > mainBalance || transferAmount <= 0) {
        alert("you can't transfer this amount, change the amount");
        return;
    }

    if (transferMoneyUserMobileNumber.length === 11) {
        if (transferMoneyPinNumber === 1234) {

            const subtraction = mainBalance - transferAmount;
            document.getElementById("main-balance").innerText = subtraction;
            alert(`successfully transfer ${transferAmount}`);
        }
        else {
            alert("Your pin number must be 1234")
        }
    }
    else {
        alert("please add a 11 digit mobile number")
    }

})