document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("language-toggle");
    const langElements = document.querySelectorAll("[data-lang]");

    langToggle.addEventListener("click", () => {
        const currentLang = langToggle.innerText;
        const newLang = currentLang === "EN" ? "SL" : "EN";

        langToggle.innerText = newLang;

        langElements.forEach((el) => {
            if (el.dataset.lang.toUpperCase() === newLang) {
                el.hidden = false;
            } else {
                el.hidden = true;
            }
        });
    });
});
