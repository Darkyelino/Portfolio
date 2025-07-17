document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById("toggleTheme");
    const rootHtml = document.documentElement;

    // Alterna o tema ao clicar no ícone
    toggleTheme.addEventListener("click", () => {
        const currentTheme = rootHtml.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        rootHtml.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        toggleTheme.className = newTheme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    });
});
