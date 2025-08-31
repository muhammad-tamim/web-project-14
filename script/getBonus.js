document.getElementById("get-bonus-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const getBonus = getInputValue("get-bonus");
    const mainBalance = getIntegerElementValue("main-balance");

    if (getBonus === "100TkBonus") {
        const bonus = mainBalance + 100;
        document.getElementById("main-balance").innerText = bonus;
        alert(`Congratulation, you got ${100} Tk bonus`);
    }
    else if (getBonus === "200TkBonus") {
        const bonus = mainBalance + 200;
        document.getElementById("main-balance").innerText = bonus;
        alert(`Congratulation, you got ${200} Tk bonus`);
    }
    else {
        alert("please add a valid coupon")
    }

})