// Función para alternar entre modo oscuro y modo claro
function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode"); // Añade o quita la clase "dark-mode"

  // Cambiar el texto del botón dependiendo del modo actual
  const button = document.querySelector(".toggle-button");
  if (body.classList.contains("dark-mode")) {
    button.textContent = "🌞 Modo Claro"; // Cambiar el texto a "Modo Claro" cuando esté en modo oscuro
  } else {
    button.textContent = "🌙 Modo Oscuro"; // Cambiar el texto a "Modo Oscuro" cuando esté en modo claro
  }
}
