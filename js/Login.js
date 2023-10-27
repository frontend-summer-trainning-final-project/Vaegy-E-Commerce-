const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

function checkData(event) {
  event.preventDefault();

  const loginEmail = document.getElementById("email").value;
  const loginPassword = document.getElementById("password").value;

  const user = existingUsers.find(
    (user) => user.email === loginEmail && user.password === loginPassword
  );

  if (user) {
    alert("Login Successful.");
    window.location.href = "/index.html";
  } else {
    alert("Login failed. Invalid email or password.");
  }
}

document.getElementById("loginForm").addEventListener("submit", checkData);
