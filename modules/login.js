document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Validación básica
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    // Simulación de login
    alert("Bienvenido a Inventory Join");
    window.location.href = "../Pages/Dashboard.html";
  } else {
    alert("Por favor completa todos los campos.");
  }
});
