var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function validate_password() {

  var pass = document.getElementById('psw').value;
  var confirm_pass = document.getElementById('confirm_pass').value;
  if (pass != confirm_pass) {
    document.getElementById('wrong_pass_alert').style.color = 'red';
    document.getElementById('wrong_pass_alert').innerHTML
      = '☒ Use same password';
    document.getElementById('create').disabled = true;
    document.getElementById('create').style.opacity = (0.4);
  } else {
    document.getElementById('wrong_pass_alert').style.color = 'green';
    document.getElementById('wrong_pass_alert').innerHTML =
      '🗹 Password Matched';
    document.getElementById('create').disabled = false;
    document.getElementById('create').style.opacity = (1);
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  var re = /^\d{10}$/;
  return re.test(phone);
}

var form = document.getElementById("formId");
form.addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("tel").value;

  if (name.trim() === "") {
    alert("Name is required");
    event.preventDefault();
  } else if (username.trim() === "") {
    alert("Username is required");
    event.preventDefault();
  } else if (!validatePhone(phone)) {
    alert("Invalid phone number");
    event.preventDefault();
  } else {
    window.location.href = 'allProducts.html';
  }
});

// function alert() {
//   if (document.getElementById('name').value != "" &&
//     document.getElementById('username').value != "" &&
//     document.getElementById('tel').value != "" &&
//     document.getElementById('psw').value != "" &&
//     document.getElementById('confirm_pass').value != "") {
//     window.location.href = 'allProducts.html';
//   }
//   else {
//     alert("Please fill all the fields");
//   }

// } function ValidateEmail() {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (!getElementById('email').value.match(mailformat)) {
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// }