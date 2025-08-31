document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault()

    const mobileNumber = getInputValue("mobile-number");
    const pinNumber = getInputValue("pin-number");

    if (mobileNumber.length === 11) {
        if (pinNumber.length === 4) {
            window.location.href = "../index.html"
        }
        else {
            alert("Please add a 4 digit pin number");
        }
    }
    else {
        alert("Please add a 11 digit mobile number");
    }
})