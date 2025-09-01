document.addEventListener("DOMContentLoaded", () => {
  const tablaBody = document.getElementById("tabla-body");

  const proveedores = [
    { nombre: "Carlos Ruiz", empresa: "Distribuciones Ruiz", contacto: "carlos@ruiz.com", estado: "Activo" },
    { nombre: "Ana Torres", empresa: "Suministros Torres", contacto: "ana@torres.com", estado: "Inactivo" },
  ];

  proveedores.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.nombre}</td>
      <td>${p.empresa}</td>
      <td>${p.contacto}</td>
      <td>${p.estado}</td>
      <td><button>Editar</button></td>
    `;
    tablaBody.appendChild(fila);
  });

  document.getElementById("btn-nuevo-proveedor").addEventListener("click", () => {
    alert("Función para registrar proveedor aún no implementada.");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const abrir = document.querySelector("button#openModalProveedor");
  const cerrar = document.getElementById("cerrarModalProveedor");
  const modal = document.getElementById("modalAgregarProveedor");

  abrir.addEventListener("click", () => modal.classList.remove("hidden"));
  cerrar.addEventListener("click", () => modal.classList.add("hidden"));

  document.getElementById("formAgregarProveedor").addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    console.log("Proveedor agregado:", datos);
    // Aquí puedes agregar lógica para actualizar la tabla o enviar al backend
    e.target.reset();
    modal.classList.add("hidden");
  });
});
