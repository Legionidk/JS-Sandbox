document.querySelector("#nav").addEventListener("click", (e) => {
    if (e.target.href) {
        const componentId = e.target.href.split("#")[1];
        const title = document.querySelector(`#${componentId} h1`);

        title.classList.toggle("bg-transparent");
        title.classList.toggle("bg-blue-500/25");

        setTimeout(() => {
            title.classList.toggle("bg-transparent");
            title.classList.toggle("bg-blue-500/25");
        }, 3000);
    }
});
