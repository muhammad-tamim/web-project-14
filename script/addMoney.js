document.getElementById("add-money-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const selectedBank = getInputValue("select-bank");
    const addMoneyMobileNumber = getInputValue("add-money-mobile-number");
    const addMoneyAmount = getIntegerInputValue("add-money-amount");
    const addMoneyPinNumber = getIntegerInputValue("add-money-pin-number");
    const mainBalance = getIntegerElementValue("main-balance");

    if (addMoneyMobileNumber.length === 11) {
        if (addMoneyPinNumber === 1234) {

            const sum = mainBalance + addMoneyAmount;
            document.getElementById("main-balance").innerText = sum;
            alert(`successfully added money ${addMoneyAmount}`);
        }
        else {
            alert("Your pin number must be 1234")
        }
    }
    else {
        alert("please add a 11 digit mobile number")
    }

})