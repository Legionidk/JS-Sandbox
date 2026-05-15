const keysContainer = document.querySelector("#key-listener-container > #preview");

document.addEventListener("keydown", (e) => {
    const pressedKey = document.createElement("div");
    pressedKey.classList.add(
        "flex",
        "justify-center",
        "items-center",
        "min-w-[40px]",
        "w-fit",
        "h-[40px]",
        "px-[10px]",
        "rounded-[10px]",
        "border-2",
        "border-[#000000cc]/25",
        "bg-[#fafafc]",
        "transition-opacity",
        "opacity-100",
        "duration-300",
    );
    pressedKey.id = "pressed-key";
    pressedKey.textContent = e.key === " " ? "Space" : e.key;

    keysContainer.prepend(pressedKey);
    setTimeout(() => {
        pressedKey.classList.remove("opacity-100");
        pressedKey.classList.add("opacity-0");

        setTimeout(() => {
            pressedKey.remove();
        }, 701);
    }, 2000);
});
