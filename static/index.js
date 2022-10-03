const backgroundUrls = [
    "/static/backgrounds/MichaelSchauer.jpg",
    "/static/backgrounds/TomAndersWatkins.jpg",
    "/static/backgrounds/TomHegen.jpg",
    "/static/backgrounds/Fotolia_227313925_XL.jpg",
    "/static/backgrounds/Fotolia_228669299_XL.jpg",
    "/static/backgrounds/TracieChing.jpg",
    "/static/backgrounds/Fotolia_247535207_XL.jpg",
    "/static/backgrounds/Fotolia_158229208_XL.jpg",
    "/static/backgrounds/Fotolia_235948322_XL.jpg",
    "/static/backgrounds/Fotolia_188880972_XL.jpg",
]

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.addEventListener('load', () => resolve(image.src));
        image.addEventListener('error', reject);
    });
}

window.addEventListener("DOMContentLoaded", function() {
    const bgCanvas = document.querySelector("#bg-canvas");
    const calculatorFormEl = document.querySelector("#calculatorForm");
    const resultEl = document.querySelector("#calculator__result");

    const backgroundSrc = backgroundUrls[Math.floor(Math.random()*backgroundUrls.length)];
    loadImage(backgroundSrc).then(function(src) {
        bgCanvas.style.backgroundImage = `url(${src})`;
        bgCanvas.style.opacity = '1';
    });

    calculatorFormEl.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());
        Object.keys(formData).forEach(function(key) {
            formData[key] = parseInt(formData[key]);
        });

        resultEl.innerHTML = formData.price * formData.amount;
    });
});
