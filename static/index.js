
window.addEventListener("DOMContentLoaded", () => {
    const bgCanvas = document.querySelector("#bg-canvas");
    const calculatorFormEl = document.querySelector("#calculatorForm");
    const resultEl = document.querySelector("#calculator__result");

    bgCanvas.classList.add(`canvas--background-${Math.floor(Math.random()*37)}`);

    setTimeout(() => {
        bgCanvas.classList.add('opacity-100');
    }, 1500);

    calculatorFormEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());
        Object.keys(formData).forEach(key => {
            formData[key] = parseInt(formData[key]);
        })

        resultEl.value = formData.price * formData.amount;
    });
});
