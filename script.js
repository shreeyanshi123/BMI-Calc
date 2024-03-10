const bmiForm = document.getElementById('bmi-form');
const result = document.getElementById('result');

bmiForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight)) {
    result.textContent = "Please enter valid numbers for height and weight.";
    return;
  }

  const bmi = calculateBMI(height, weight);
  const bmiCategory = interpretBMI(bmi);

  result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are in the "${bmiCategory}" category.`;
});

function calculateBMI(height, weight) {
  const heightInMeters = height / 100; // Convert cm to meters
  return weight / (heightInMeters * heightInMeters);
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
