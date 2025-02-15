// Selecting the button and input fields
const calculateBtn = document.getElementById("calculate");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("results");

// Adding event listener to the button
calculateBtn.addEventListener("click", function () {
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter valid height and weight values.</p>";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2); // Calculate BMI and limit to 2 decimal places

    let category = "";
    if (bmi < 18.6) {
        category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal weight";
    } else {
        category = "Overweight";
    }

    resultDiv.innerHTML = `<p>Your BMI is <strong>${bmi}</strong> (${category}).</p>`;
});
