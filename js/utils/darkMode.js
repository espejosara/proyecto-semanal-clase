const darkMode = () => {
  const button = document.getElementById('dark-mode-toggle');

  if (!button) return;

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
};

export default darkMode;