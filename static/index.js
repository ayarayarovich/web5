
window.addEventListener("DOMContentLoaded", function() {
    const bgCanvas = document.querySelector("#bg-canvas");
    const calculatorFormEl = document.querySelector("#calculatorForm");
    const resultEl = document.querySelector("#calculator__result");

    // JSLint ругается на длинну строки больше 80 символов.
    // В этой строке 82 символа, я думаю это не критично =).
    bgCanvas.classList.add(`canvas--background-${Math.floor(Math.random()*37)}`);

    setTimeout(function() {
        bgCanvas.classList.add("opacity-100");
    }, 1500);

    calculatorFormEl.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());
        Object.keys(formData).forEach(function(key) {
            formData[key] = parseInt(formData[key]);
        });

        resultEl.value = formData.price * formData.amount;
    });
});
