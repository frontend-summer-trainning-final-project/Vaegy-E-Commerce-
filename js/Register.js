const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

function addData(event) {
  event.preventDefault();

  const registerEmail = document.getElementById("email").value;
  const registerPassword = document.getElementById("password").value;

  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/;

  const userExists = existingUsers.some(user => user.email === registerEmail);

  if (userExists) {
    alert("Email already registered.");
  } 

  else if (!pattern.test(password.value)) {
        alert("Password must contain at least one letter, one digit, and be at least 8 characters long.");
  }
  
  else {

  existingUsers.push({ email: registerEmail, password: registerPassword });

  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Your account has been created successfully. Login Now");
  } 

}
document.getElementById("registerForm").addEventListener("submit", addData); 