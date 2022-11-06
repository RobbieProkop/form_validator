// main JS file
//If statements for everything
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//showError function
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );

// CHeck for valid email
const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//Add Event Listener to for msubmit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!username.value) {
    showError(username, "Please fill in the Username");
  } else {
    showSuccess(username);
  }

  if (!email.value) {
    showError(email, "Please enter an email");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please enter a valid email");
  } else {
    showSuccess(email);
  }

  if (!password.value) {
    showError(password, "Please a password between 2-10 characters");
  } else {
    showSuccess(password);
  }

  if (!password2.value) {
    showError(password2, "Password confirmation required");
  } else {
    showSuccess(password2);
  }
});
