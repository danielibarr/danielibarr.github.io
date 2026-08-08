document.addEventListener("DOMContentLoaded", function () {

    var splide = new Splide(".splide", {
        type: "loop",
        pagination: false
    });

    var bar = splide.root.querySelector(".slider-progress-bar");

    splide.on("mounted move", function () {

        var end = splide.Components.Controller.getEnd() + 1;

        var rate = Math.min((splide.index + 1) / end, 1);

        bar.style.width = String(100 * rate) + "%";

    });

    splide.mount();

});