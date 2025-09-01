document.querySelector(".btn-guardar").addEventListener("click", () => {
  const config = {
    alertasStock: document.getElementById("alertaStock").checked,
    umbralStock: parseInt(document.getElementById("umbralStock").value),
    reporteMensual: document.getElementById("reporteMensual").checked,
    diaReporte: document.getElementById("diaReporte").value,
    temaColor: document.getElementById("temaColor").value,
  };

  localStorage.setItem("configInventoryJoin", JSON.stringify(config));
  alert("✅ Configuración guardada correctamente");
});

// Cargar configuración al iniciar la página
window.addEventListener("load", () => {
  const configGuardada = JSON.parse(localStorage.getItem("configInventoryJoin"));
    if (configGuardada) {
    document.getElementById("alertaStock").checked = configGuardada.alertasStock;
    document.getElementById("umbralStock").value = configGuardada.umbralStock;
    document.getElementById("reporteMensual").checked = configGuardada.reporteMensual;
    document.getElementById("diaReporte").value = configGuardada.diaReporte;
    document.getElementById("temaColor").value = configGuardada.temaColor;
  }
});