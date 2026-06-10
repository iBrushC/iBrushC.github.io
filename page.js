const switchPage = async (newPage) => {
    if (newPage == "home") {
        // Search params + history
        if ('URLSearchParams' in window) {
            const url = new URL(window.location);
            url.searchParams.delete("post")
            history.pushState(null, '', url);
        }

        // Styling
        document.body.classList = "home-page";
    }
    else {
        // Search params + history
        if ('URLSearchParams' in window) {
            const url = new URL(window.location);
            url.searchParams.set("post", newPage);
            history.pushState(null, '', url);
        }

        // Styling
        document.body.classList = "post-page";

        // Set content
        const postObj = await getPost(newPage);
        document.getElementById("post-title").innerHTML = postObj.title;
        document.getElementById("post-desc").innerHTML = postObj.desc;
        document.getElementById("post-date").innerHTML = postObj.date;
        document.getElementById("post-image").style.background = `url(media/${postObj.image}) center / cover no-repeat`;
        document.getElementById("post-body-text").innerHTML = postObj.content;
    }
}

window.onload = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryPage = searchParams.get("post");
    if (queryPage == null) {
        await switchPage("home");
    }
    else {
        await switchPage(queryPage);
    }
}

window.addEventListener('popstate', async (event) => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryPage = searchParams.get("post");
    if (queryPage == null) {
        await switchPage("home");
    }
})