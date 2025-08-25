// ==========================
// Event Handling
// ==========================
const messageBtn = document.getElementById("messageBtn");
const messageText = document.getElementById("messageText");

messageBtn.addEventListener("click", () => {
  messageText.textContent = "🎉 You clicked the button!";
});

// ==========================
// Interactive Elements
// ==========================

// 1. Light/Dark Mode
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// ==========================
// Form Validation
// ==========================
const form = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from submitting
  let valid = true;

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Name validation
  if (nameField.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailField.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 characters)
  if (passwordField.value.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // If everything is valid
  if (valid) {
    document.getElementById("successMessage").textContent =
      "✅ Form submitted successfully!";
    form.reset();
  }
});
