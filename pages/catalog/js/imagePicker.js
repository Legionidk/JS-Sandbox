const currentImage = document.querySelector("#current-image");
const imagesDiv = document.querySelector("#images-to-pick");
let pickedImage = document.querySelector("#image.border-2");
currentImage.src = pickedImage.src;

imagesDiv.addEventListener("click", (e) => {
    pickedImage.classList.remove("border-2");
    pickedImage.classList.add(
        "grayscale",
        "cursor-pointer",
        "hover:border-2",
        "hover:grayscale-0",
    );

    e.target.classList.add("border-2");
    e.target.classList.remove(
        "grayscale",
        "cursor-pointer",
        "hover:border-2",
        "hover:grayscale-0",
    );

    pickedImage = e.target;
    currentImage.src = pickedImage.src;
});
