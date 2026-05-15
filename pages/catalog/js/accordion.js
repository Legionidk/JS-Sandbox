const accordionPreview = document.querySelector(
    "#accordion-container > #preview",
);
let unhiddenDescription = accordionPreview.querySelector(
    "#description:not(.hidden)",
);

accordionPreview.addEventListener("click", (e) => {
    const page = e.target.closest("#accordion-page");
    const description = page.querySelector("#description");

    if (description.classList.contains("hidden")) {
        description.classList.remove("hidden");

        unhiddenDescription.classList.add("hidden");
        unhiddenDescription = description;
    }
});
