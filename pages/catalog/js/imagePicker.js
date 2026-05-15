const currentImage = document.querySelector("#current-image");
const imagesDiv = document.querySelector("#images-to-pick");
let pickedImage = document.querySelector("#image.outline-2");
currentImage.src = pickedImage.src;

imagesDiv.addEventListener("click", (e) => {
    pickedImage.classList.remove("outline-2");
    pickedImage.classList.add(
        "grayscale",
        "cursor-pointer",
        "hover:outline-2",
        "hover:grayscale-0",
    );

    e.target.classList.add("outline-2");
    e.target.classList.remove(
        "grayscale",
        "cursor-pointer",
        "hover:outline-2",
        "hover:grayscale-0",
    );

    pickedImage = e.target;
    currentImage.src = pickedImage.src;
});
