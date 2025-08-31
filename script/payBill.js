document.getElementById("pay-bill-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const selectPay = getInputValue("select-pay");
    const billerMobileNumber = getInputValue("biller-mobile-number");
    const payBillAmount = getIntegerInputValue("pay-bill-amount");
    const payBillPinNumber = getIntegerInputValue("pay-bill-pin-number");
    const mainBalance = getIntegerElementValue("main-balance");

    if (billerMobileNumber.length === 11) {
        if (payBillPinNumber === 1234) {

            const subtraction = mainBalance - payBillAmount;
            document.getElementById("main-balance").innerText = subtraction;
            alert(`payment successful ${selectPay}:${payBillAmount} tk`);

        }
        else {
            alert("Your pin number must be 1234")
        }
    }
    else {
        alert("please add a 11 digit mobile number")
    }

})