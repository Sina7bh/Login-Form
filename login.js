function validateForm(fields) {
  let valid = true;
  const errorContainer = document.getElementById("errorContainer");
  errorContainer.innerHTML = ""; 

  fields.forEach((field) => {
    if (!field.value.trim()) {
      let error = document.createElement("li");
      error.classList.add("error-message");
      error.textContent = `Please Enter Your ${field.name}.`;

      errorContainer.appendChild(error);
      valid = false;
    }
  });

  return valid;
}

function loginR() {
  let valid = validateForm([
    { name: "Email", value: document.querySelector(".username").value },
    { name: "PassWord", value: document.querySelector(".password").value },
  ]);

  toggleMessages(valid);
}

function signUp() {
  let valid = validateForm([
    { name: "ID", value: document.getElementById("username").value },
    { name: "Email", value: document.getElementById("email").value },
    { name: "PassWord", value: document.getElementById("password").value },
    { name: "Phone", value: document.getElementById("phone").value },
  ]);

  toggleMessages(valid);
}

function toggleMessages(valid) {
  if (valid) {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("errorContainer").style.display = "none";
  } else {
    document.getElementById("errorContainer").style.display = "block";
    document.getElementById("successMessage").style.display = "none";
  }
}

let logIn = document.querySelector(".radioA");
let signIn = document.querySelector(".radioB");
let eye = document.querySelector(".eye");

logIn.addEventListener("click", loginInFunc);
signIn.addEventListener("click", signInFunc);

function loginInFunc() {
  eye.src = "/a2.png";
}
function signInFunc() {
  eye.src = "/a1.png";
}
