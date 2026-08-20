// Only add a history entry if we aren't already sitting on that url
const pushPage = (url) => {
    if (url.href != window.location.href) {
        history.pushState(null, '', url);
    }
}

const switchPage = async (newPage) => {
    if (newPage == "home") {
        // Search params + history
        if ('URLSearchParams' in window) {
            const url = new URL(window.location);
            url.searchParams.delete("post")
            pushPage(url);
        }

        // Styling
        document.body.classList = "home-page";
    }
    else {
        // Search params + history
        if ('URLSearchParams' in window) {
            const url = new URL(window.location);
            url.searchParams.set("post", newPage);
            pushPage(url);
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

// The content loads in async, so the browser can't restore scroll itself
history.scrollRestoration = "manual";
const scrollKey = () => `scroll:${window.location.search}`;
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem(scrollKey(), window.scrollY);
});

window.onload = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryPage = searchParams.get("post");
    if (queryPage == null) {
        await switchPage("home");
    }
    else {
        await switchPage(queryPage);
    }

    // Wait for the grid to fill in before putting the scroll back
    await postsLoaded;
    const savedScroll = sessionStorage.getItem(scrollKey());
    if (savedScroll != null) {
        window.scrollTo(0, parseFloat(savedScroll));
    }
}

window.addEventListener('popstate', async (event) => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryPage = searchParams.get("post");
    if (queryPage == null) {
        await switchPage("home");
    }
})