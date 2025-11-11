const button = document.getElementById('toggle-theme');
const body = document.body;

button.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    button.textContent = '☀️ Modo Claro';
  } else {
    button.textContent = '🌙 Modo Escuro';
  }
});
