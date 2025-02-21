document.addEventListener("DOMContentLoaded", () => {
    const billAmount = document.getElementById("bill-amount");
    const tipButtons = document.querySelectorAll(".tip");
    const customTip = document.querySelector(".custom-tip");
    const numPeople = document.querySelector(".number-of-people");
    const generateBillBtn = document.querySelector(".generate-bill-btn");
    const resetBtn = document.querySelector(".reset-btn");
    const tipAmountDisplay = document.querySelector(".tip-amount span");
    const totalDisplay = document.querySelector(".total span");
    const eachPersonBillDisplay = document.querySelector(".each-person-bill span");

    let selectedTip = 0;

    // Enable inputs when bill amount is entered
    billAmount.addEventListener("input", () => {
        if (billAmount.value > 0) {
            customTip.disabled = false;
            numPeople.disabled = false;
            generateBillBtn.disabled = false;
        }
    });

    // Select tip percentage
    tipButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            selectedTip = parseFloat(e.target.innerText.replace("%", ""));
            customTip.value = "";
        });
    });

    // Handle custom tip input
    customTip.addEventListener("input", () => {
        selectedTip = parseFloat(customTip.value) || 0;
    });

    // Generate bill calculation
    generateBillBtn.addEventListener("click", () => {
        const bill = parseFloat(billAmount.value);
        const people = parseInt(numPeople.value);

        if (bill > 0 && people > 0) {
            const tipAmount = (bill * selectedTip) / 100;
            const totalBill = bill + tipAmount;
            const eachPersonBill = totalBill / people;

            tipAmountDisplay.textContent = `₹${tipAmount.toFixed(2)}`;
            totalDisplay.textContent = `₹${totalBill.toFixed(2)}`;
            eachPersonBillDisplay.textContent = `₹${eachPersonBill.toFixed(2)}`;

            resetBtn.disabled = false;
        }
    });

    // Reset all inputs
    resetBtn.addEventListener("click", () => {
        billAmount.value = "";
        customTip.value = "";
        numPeople.value = "";
        tipAmountDisplay.textContent = "";
        totalDisplay.textContent = "";
        eachPersonBillDisplay.textContent = "";
        generateBillBtn.disabled = true;
        resetBtn.disabled = true;
        selectedTip = 0;
    });
});

