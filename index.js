const run = () => {
    // Dropdowns
    const collapsibles = document.getElementsByName("collapsible");
    const collapseds = document.getElementsByName("collapsed");

    for (let i = 0; i < collapsibles.length; i++) {
        const collapsible = collapsibles[i];
        const collapsed = collapseds[i];

        collapsible.onclick = () => {
            if (collapsible.innerHTML.indexOf("Show more") != -1) {
                collapsible.innerHTML = "Show less";
                collapsed.style.maxHeight = collapsed.scrollHeight + "px";
            } else {
                collapsible.innerHTML = "Show more";
                collapsed.style.maxHeight = 0;
            }
        };
    }
};

window.onload = run;
