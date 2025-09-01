document.querySelector(".btn-guardar").addEventListener("click", () => {
  alert("Cambios guardados correctamente.");
  // Aquí podrías enviar los datos al backend
});

const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

// Cambiar tema
toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", current);
  localStorage.setItem("theme", current);
  toggleBtn.textContent = current === "dark" ? "☀️" : "🌙";
});
