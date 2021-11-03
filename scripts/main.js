const $toggle = document.getElementById("toggle");
const $toggleIcon = document.getElementById("toggle__icon");
const $dataTheme = document.documentElement;

//DELEGACION DE EVENTOS
document.addEventListener("click", (e) => {
    if (e.target.matches("#toggle__icon")) {
        if ($dataTheme.getAttribute("data-theme") == "light") {
            $dataTheme.setAttribute("data-theme", "dark");
            $toggleIcon.src = ("assets/icons/sun.svg");
        } else {
            $toggleIcon.src = ("assets/icons/moon.svg");
            $dataTheme.setAttribute("data-theme", "light");
        }
    }
});

document.addEventListener('input', (e) => {
    if (e.target.matches("textarea")) {
        const $words = document.getElementById("words");
        const $characters = document.getElementById("characters");
        const text = document.getElementById("textarea").value;
        let words = 0;
        let characters = 0;
        characters = text.length;
        words = text.split(" ").length;
        $words.textContent = words;
        $characters.textContent = characters;
    }
});
