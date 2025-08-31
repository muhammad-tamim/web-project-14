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

            // Transaction history
            const container = document.getElementById("transaction-history-container");

            const div = document.createElement("div");
            div.classList.add("flex", "justify-between", "items-center", "bg-white", "shadow-sm", "rounded-xl", "px-4", "py-3");

            const date = new Date();
            const dataInfo = date.toLocaleDateString();
            const time = date.toLocaleTimeString();

            div.innerHTML = `
                    <div class="flex  justify-center items-center gap-3">
                        <div class="bg-gray-200 rounded-full aspect-square p-3">
                            <img src="../assets/images/wallet1.png" alt="Add Money">
                        </div>
                        <div class="text-gray-700">
                            <h1 class="font-semibold text-base">${selectPay} Bill: ${payBillAmount}"</h1>
                            <p class="text-xs">${dataInfo} ${time}</p>
                        </div>
                    </div>
                    <div>
                        <i class="text-gray-700 pr-2 fa-solid fa-ellipsis-vertical"></i>
                    </div>
            `

            container.appendChild(div);
        }
        else {
            alert("Your pin number must be 1234")
        }
    }
    else {
        alert("please add a 11 digit mobile number")
    }

})