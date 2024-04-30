// Replace this with your actual hidden code
const hiddenCode = "12345678901234";

document.addEventListener("DOMContentLoaded", function () {
  const blurredField = document.querySelector(".blurredField");
  blurredField.innerHTML = Array.from(
    { length: hiddenCode.length },
    () => "*"
  ).join("");
});

document.addEventListener("DOMContentLoaded", function () {
  const successOutputs = document.querySelectorAll(".successOutput");
  successOutputs.forEach(function (output) {
    output.style.display = "none";
  });
});

document
  .getElementById("codeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userInput = document.getElementById("codeInput").value.trim();
    if (userInput === hiddenCode) {
      document.getElementById("successMessage").style.display = "block";
    } else {
      alert("Incorrect code. Keep trying!");
    }
  });

setTimeout(() => {
  document.getElementById("codeForm").style.display = "block";
}, 5000); // Change 5000 to the desired time in milliseconds
