// Replace this with your actual hidden code
const hiddenCode = "****************";

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
    
  });

setTimeout(() => {
  document.getElementById("codeForm").style.display = "block";
}, 5000); // Change 5000 to the desired time in milliseconds
