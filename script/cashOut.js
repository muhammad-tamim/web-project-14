document.getElementById("cash-out-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const cashOutMobileNumber = getInputValue("cash-out-mobile-number");
    const cashOutAmount = getIntegerInputValue("cash-out-amount");
    const cashOutPinNumber = getIntegerInputValue("cash-out-pin-number");
    const mainBalance = getIntegerElementValue("main-balance");


    if (cashOutAmount > mainBalance || cashOutAmount <= 0) {
        alert("you can't cash out this amount, change the amount");
        return;
    }

    if (cashOutMobileNumber.length === 11) {
        if (cashOutPinNumber === 1234) {

            const subtraction = mainBalance - cashOutAmount;
            document.getElementById("main-balance").innerText = subtraction;
            alert(`successfully Cash Out ${cashOutAmount} Tk form ${cashOutMobileNumber} account`);
        }
        else {
            alert("Your pin number must be 1234")
        }
    }
    else {
        alert("please cashOut a 11 digit mobile number")
    }

})