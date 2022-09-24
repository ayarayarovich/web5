
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const bgCanvas = document.querySelector("#bg-canvas");
        bgCanvas.classList.add(`canvas--background-${Math.ceil(Math.random()*37)}`);
    }, 1000);

    const calculatorFormEl = document.querySelector("#calculatorForm");
    const resultEl = document.querySelector("#calculator__result");

    calculatorFormEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());
        Object.keys(formData).forEach(key => {
            formData[key] = parseInt(formData[key]);
        })

        resultEl.value = formData.price * formData.amount;
    });
});
