// src/scripts/init-flowbite.js
export function initFlowbiteComponents() {
  if (window?.Flowbite?.init) {
    window.Flowbite.init(); // Si Flowbite tiene API pública de reinicialización
  } else {
    // Si no, simplemente reejecuta los carouseles manualmente (como recomiende la documentación de Flowbite)
    // O deja esto vacío si Flowbite los reencuentra solo con el observer
  }
}