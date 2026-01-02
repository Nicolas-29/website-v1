document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggle.textContent = '☀️';
        } else {
            body.classList.remove('light-mode');
            themeToggle.textContent = '🌙';
        }
    };

    // Checar preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // Event listener para o botão
    themeToggle.addEventListener('click', () => {
        let newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
