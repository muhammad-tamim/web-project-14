document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault()

    const mobileNumber = getInputValue("mobile-number");
    const pinNumber = getIntegerInputValue("pin-number")

    if (mobileNumber.length === 11) {
        if (pinNumber === 1234) {
            window.location.href = "../pages/home.html"
        }
        else {
            alert("Your pin number must be 1234");
        }
    }
    else {
        alert("Please add a 11 digit mobile number");
    }
})