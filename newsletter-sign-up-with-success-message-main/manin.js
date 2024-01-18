document.addEventListener("DOMContentLoaded", function () {
  function validateForm(event) {
    var emailInput = document.getElementById("email");
    var emailError = document.querySelector(".emailError");
    var newsLetterWrapper = document.querySelector(".newsLetterWrapper");
    var successMessage = document.querySelector(".success");
    var userEmailSpan = document.getElementById("userEmail");

    if (emailInput.value.trim() === "") {
      emailInput.style.borderColor = "red";
      emailError.textContent = "Email address is required";
      event.preventDefault();
      return;
    } else {
      emailInput.style.borderColor = "";
      emailError.textContent = "";
    }

    // validate email format

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
      emailError.textContent = "Invalid email format";
      event.preventDefault();
    } else {
      emailInput.style.borderColor = "";
      emailError.textContent = "";
      userEmailSpan.textContent = emailInput.value;
      newsLetterWrapper.style.display = "none";
      successMessage.style.display = "flex";
      event.preventDefault();
    }
  }
  // function to dismiss

  function dismissMessage() {
    var newsLetterWrapper = document.querySelector(".newsLetterWrapper");
    var successMessage = document.querySelector(".success");
    var emailInput = document.getElementById("email");
    newsLetterWrapper.style.display = "flex";
    successMessage.style.display = "none";

    emailInput.value = "";
  }

  // event listener to the Subscribe button
  var subscribeButton = document.querySelector(".leftContainer .button");
  if (subscribeButton) {
    subscribeButton.addEventListener("click", validateForm);
  }

  // event listener to the Dismiss button
  var dismissButton = document.querySelector(".success .button");
  if (dismissButton) {
    dismissButton.addEventListener("click", dismissMessage);
  }
});
