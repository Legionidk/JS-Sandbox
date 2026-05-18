const previewContainer = document.querySelector("#slider-container preview");
const slider = document.querySelector("#slider");
const dot = slider.querySelector("#dot");
let dotDraggingToggle = false;

slider.addEventListener("click", (e) => {
    const sliderRect = slider.getBoundingClientRect();
    dot.style.left = `${e.clientX - sliderRect.left}px`;
});

dot.addEventListener("mousedown", () => {
    dotDraggingToggle = true;
});

document.addEventListener("mouseup", () => {
    dotDraggingToggle = false;
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
        document.querySelector("#slider-image").style.height = `${pos}px`;
    }
});
