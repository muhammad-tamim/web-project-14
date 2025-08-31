handleToggle("latest-payment-section", "block");
handleToggle("add-money-section", "hidden");
handleToggle("cash-out-section", "hidden");
handleToggle("transfer-money-section", "hidden");
handleToggle("get-bonus-section", "hidden");
handleToggle("pay-bill-section", "hidden");
handleToggle("transaction-history-section", "hidden");

document.getElementById("add-money-box").addEventListener("click", () => {
    handleToggle("latest-payment-section", "hidden");
    handleToggle("add-money-section", "block");
    handleToggle("cash-out-section", "hidden");
    handleToggle("transfer-money-section", "hidden");
    handleToggle("get-bonus-section", "hidden");
    handleToggle("pay-bill-section", "hidden");
    handleToggle("transaction-history-section", "hidden");
})

document.getElementById("cash-out-box").addEventListener("click", () => {
    handleToggle("latest-payment-section", "hidden");
    handleToggle("add-money-section", "hidden");
    handleToggle("cash-out-section", "block");
    handleToggle("transfer-money-section", "hidden");
    handleToggle("get-bonus-section", "hidden");
    handleToggle("pay-bill-section", "hidden");
    handleToggle("transaction-history-section", "hidden");
})

document.getElementById("transfer-money-box").addEventListener("click", () => {
    handleToggle("latest-payment-section", "hidden");
    handleToggle("add-money-section", "hidden");
    handleToggle("cash-out-section", "hidden");
    handleToggle("transfer-money-section", "block");
    handleToggle("get-bonus-section", "hidden");
    handleToggle("pay-bill-section", "hidden");
    handleToggle("transaction-history-section", "hidden");
})

document.getElementById("get-bonus-box").addEventListener("click", () => {
    handleToggle("latest-payment-section", "hidden");
    handleToggle("add-money-section", "hidden");
    handleToggle("cash-out-section", "hidden");
    handleToggle("transfer-money-section", "hidden");
    handleToggle("get-bonus-section", "block");
    handleToggle("pay-bill-section", "hidden");
    handleToggle("transaction-history-section", "hidden");
})

document.getElementById("pay-bill-box").addEventListener("click", () => {
    handleToggle("latest-payment-section", "hidden");
    handleToggle("add-money-section", "hidden");
    handleToggle("cash-out-section", "hidden");
    handleToggle("transfer-money-section", "hidden");
    handleToggle("get-bonus-section", "hidden");
    handleToggle("pay-bill-section", "block");
    handleToggle("transaction-history-section", "hidden");
})

document.getElementById("transaction-box").addEventListener("click", () => {
    handleToggle("latest-payment-section", "hidden");
    handleToggle("add-money-section", "hidden");
    handleToggle("cash-out-section", "hidden");
    handleToggle("transfer-money-section", "hidden");
    handleToggle("get-bonus-section", "hidden");
    handleToggle("pay-bill-section", "hidden");
    handleToggle("transaction-history-section", "block");
})