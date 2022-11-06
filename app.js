// main JS file
//If statements for everything
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

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

//check to make sure required input is present
const checkRequired = (inputArr) => {
  console.log("inputArr :>> ", inputArr);
  inputArr.forEach((input) => {
    if (!input.value.trim()) {
      return showError(input, `${getFieldName(input)} is required`);
    }
    if (input.id === "email") {
      console.log("input.value :>> ", input.value);
      isValidEmail(input.value);
    }
    showSuccess(input);
  });
};

// CHeck for valid email
const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//Add Event Listener to for msubmit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);

  // Simple conditional validation. Not good clean practice

  // if (!username.value) {
  //   showError(username, "Please fill in the Username");
  // } else {
  //   showSuccess(username);
  // }

  // if (!email.value) {
  //   showError(email, "Please enter an email");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Please enter a valid email");
  // } else {
  //   showSuccess(email);
  // }

  // if (!password.value) {
  //   showError(password, "Please a password between 2-10 characters");
  // } else {
  //   showSuccess(password);
  // }

  // if (!password2.value) {
  //   showError(password2, "Password confirmation required");
  // } else {
  //   showSuccess(password2);
  // }
});
