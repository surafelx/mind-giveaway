document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".safe-input");
  const hiddenCode = document.querySelector(".hiddenCode").textContent.trim(); // Get the hidden code
  document.querySelector(".successOutput").style.display = "none";
  document.querySelector(".successImage").style.display = "none";
  document.querySelector(".closeImage").style.display = "inline-block";
  let currentIndex = 0; // Initialize the current input index

  // Function to move focus to the next input
  function moveToNextInput() {
    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();
      currentIndex++;
    }
  }

  // Function to reset the inputs
  function resetInputs() {
    inputs.forEach((input) => {
      input.value = "";
    });
    currentIndex = 0;
  }

  // Event listener for input changes
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (input.value.length === 1) {
        moveToNextInput();
      }
    });
  });

  // Event listener for form submission
  document
    .getElementById("safeForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get the entered code
      const enteredCode = Array.from(inputs)
        .map((input) => input.value)
        .join("");

      // Check if the entered code matches the hidden code
      if (enteredCode === hiddenCode) {
        alert(
          "እንኳን ደስ አላችሁ ኮዱን ፈታቹታል! ሴፉ ውስጥ ያለውን ፅሁፍ ቶሎ ወደ ኮሜንት ልካችሁ ሽልማት ተረከቡ"
        );
        document.querySelector(".closeImage").style.display = "none";
        document.querySelector(".successImage").style.display = "inline-block";
        document.querySelector(".successOutput").style.display = "block";
      } else {
        // Reset the inputs
        resetInputs();
        // Display a message that the code doesn't match
        alert(
          "የፃፋቹት ኮድ ልክ አይደለም! እንደገና ይሞክሩ"
        );
      }
    });
});
