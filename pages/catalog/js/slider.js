const slider = document.querySelector("#slider");
const fixedSlider = document.querySelector("#slider-fixed");

const dot = slider.querySelector("#dot");
const fixedDot = fixedSlider.querySelector("#dot");

let dotDraggingToggle = false;
let fixedDotDraggingToggle = false;

function moveFixedSlider(clientX) {
    const fixedSliderRect = fixedSlider.getBoundingClientRect();
    const pos = clientX - fixedSliderRect.left;

    if (pos > fixedSliderRect.width) {
        fixedDot.style.left = "100%";
        return;
    }

    if (pos < 0) {
        fixedDot.style.left = "0px";
        return;
    }

    const percent = (pos / fixedSliderRect.width) * 100;
    const step = Math.round(percent / 20) * 20;

    fixedDot.style.left = `${step}%`;
    fixedSlider.querySelector("p").textContent = step;
    fixedSlider.style.background = `linear-gradient(to right, orange ${step}%, gainsboro ${step}%)`; // thx misha for code snippet
}

slider.addEventListener("click", (e) => {
    const sliderRect = slider.getBoundingClientRect();
    dot.style.left = `${e.clientX - sliderRect.left}px`;
});

fixedSlider.addEventListener("click", (e) => {
    moveFixedSlider(e.clientX);
});

dot.addEventListener("mousedown", () => {
    dotDraggingToggle = true;
});

fixedDot.addEventListener("mousedown", () => {
    fixedDotDraggingToggle = true;
});

document.addEventListener("mouseup", () => {
    dotDraggingToggle = false;
    fixedDotDraggingToggle = false;
});

document.addEventListener("mousemove", (e) => {
    if (dotDraggingToggle) {
        const sliderRect = slider.getBoundingClientRect();
        const pos = e.clientX - sliderRect.left;

        if (pos > sliderRect.width) {
            dot.style.left = "100%";
            slider.style.background = "yellowgreen";
            return;
        }

        if (pos < 0) {
            dot.style.left = "0px";
            slider.style.background = "lightgray";
            return;
        }

        const percent = Math.round((pos / sliderRect.width) * 100);

        dot.style.left = `${pos}px`;
        slider.querySelector("p").textContent = percent;
        slider.style.background = `linear-gradient(to right, yellowgreen ${pos}px, lightgray ${pos}px)`; // thx misha for code snippet
    }

    if (fixedDotDraggingToggle) {
        moveFixedSlider(e.clientX);
    }
});
