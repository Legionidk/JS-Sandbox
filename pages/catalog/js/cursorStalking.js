const previewContainer = document.querySelector("#stalking-preview");
const xLine = document.querySelector("#x-line");
const yLine = document.querySelector("#y-line");

previewContainer.addEventListener("mousemove", (event) => {
    const rect = previewContainer.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    yLine.style.left = `${x}px`;
    xLine.style.top = `${y}px`;
});

previewContainer.addEventListener("mouseenter", (e) => {
    xLine.classList.toggle("bg-[#000000cc]/0");
    xLine.classList.toggle("bg-[#000000cc]/25");
    yLine.classList.toggle("bg-[#000000cc]/0");
    yLine.classList.toggle("bg-[#000000cc]/25");
});

previewContainer.addEventListener("mouseleave", (e) => {
    xLine.classList.toggle("bg-[#000000cc]/0");
    xLine.classList.toggle("bg-[#000000cc]/25");
    yLine.classList.toggle("bg-[#000000cc]/0");
    yLine.classList.toggle("bg-[#000000cc]/25");
});
