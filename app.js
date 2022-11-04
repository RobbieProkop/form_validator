// main JS file
//If statements for everything
const form = document.getElementById("form");
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const password2 = document.getElementById("password2").value;

//showError function
const showError = (input, message) => {};
const showSuccess = (input) => {};

//Add Event Listener to for msubmit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!username) {
    return showError(
      username,
      "Get your poop in a group and fill in the Username"
    );
  }
  showSuccess(username);
});
