const Celsius = document.getElementById("Celsius");
const Fahrenheit = document.getElementById("Fahrenheit");
const Submit = document.getElementById("Sibmit");
const Result = document.getElementById("Result");
const Text = document.getElementById("Number");
let temp;

function convert() {
  if (Celsius.checked) {
    temp = Number(Text.value);
    temp = (temp * 9) / 5 + 32;
    Result.textContent = `Result : ${temp}°F `;
  } else if (Fahrenheit.checked) {
    temp = Number(Text.value);
    temp = ((temp - 32) * 5) / 9;
    Result.textContent = `Result : ${temp}°C `;
  } else {
    Result.textContent = "Select a unit";
  }
}
