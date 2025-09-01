// Abrir modal
document.getElementById("openModal").addEventListener("click", () => {
  document.getElementById("modalAgregarProducto").classList.remove("hidden");
});

// Cerrar modal
document.getElementById("cerrarModal").addEventListener("click", () => {
  document.getElementById("modalAgregarProducto").classList.add("hidden");
});

// Enviar formulario
document.getElementById("formAgregarProducto").addEventListener("submit", (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(e.target));
  console.log("Producto agregado:", datos);
  // Aquí puedes llamar a tu función para agregar el producto al DOM o enviarlo al backend
  e.target.reset();
  document.getElementById("modalAgregarProducto").classList.add("hidden");
});

export function abrirModalNuevoProducto() {
  const modal = document.getElementById('modalAgregarProducto');
  if (modal) {
    modal.classList.add('activo'); // Si usas clases personalizadas
    // O si usas Bootstrap:
    // const modalInstance = new bootstrap.Modal(modal);
    // modalInstance.show();
  } else {
    console.warn('No se encontró el modal de nuevo producto');
  }
}


