function validateForm(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const dobInput = document.getElementById("dob");
  const colorInput = document.getElementById("color");

  if (!nameInput.value.trim()) {
    showError(nameInput, "Please enter a name");
  } else {
    showSuccess(nameInput);
  }

  if (!emailInput.value.trim()) {
    showError(emailInput, "Please enter an email");
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email");
  } else {
    showSuccess(emailInput);
  }

  if (!phoneInput.value.trim()) {
    showError(phoneInput, "Please enter a phone number");
  } else {
    showSuccess(phoneInput);
  }

  if (!passwordInput.value.trim()) {
    showError(passwordInput, "Please enter a password");
  } else {
    showSuccess(passwordInput);
  }

  if (!ageInput.value.trim()) {
    showError(ageInput, "Please enter your age");
  } else if (
    isNaN(ageInput.value) ||
    ageInput.value < 18 ||
    ageInput.value > 99
  ) {
    showError(ageInput, "Please enter a valid age (between 18 and 99)");
  } else {
    showSuccess(ageInput);
  }

  if (genderInput.value === "") {
    showError(genderInput, "Please select a gender");
  } else {
    showSuccess(genderInput);
  }

  if (!dobInput.value.trim()) {
    showError(dobInput, "Please enter your date of birth");
  } else {
    showSuccess(dobInput);
  }

  if (!colorInput.value.trim()) {
    showError(colorInput, "Please select a color");
  } else {
    showSuccess(colorInput);
  }

  if (
    nameInput.value.trim() &&
    emailInput.value.trim() &&
    isValidEmail(emailInput.value) &&
    phoneInput.value.trim() &&
    passwordInput.value.trim() &&
    ageInput.value.trim() &&
    !isNaN(ageInput.value) &&
    ageInput.value >= 18 &&
    ageInput.value <= 99 &&
    genderInput.value !== "" &&
    dobInput.value.trim() &&
    colorInput.value.trim()
  ) {
    alert("Form submitted successfully");
    console.log("Form submitted successfully");
    document.getElementById("myForm").reset();
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const error = formControl.querySelector(".error-message");
  error.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
