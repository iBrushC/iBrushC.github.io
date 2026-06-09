const getPost = async (postName) => {
    // Fetch the post at each
    const fetchP = await fetch(`/posts/${postName}.md`);
    const postText = (await fetchP.text()).replace(/\r/g, "");

    // Title
    const titleStart = postText.indexOf("Title: ");
    let title = postText.substring(titleStart + 7);
    title = title.substring(0, title.indexOf("\n"));

    // Description
    const descStart = postText.indexOf("Description: ");
    let desc = postText.substring(descStart + 13);
    desc = desc.substring(0, desc.indexOf("\n"));

    // Image
    const imageStart = postText.indexOf("Image: ");
    let image = postText.substring(imageStart + 7);
    image = image.substring(0, image.indexOf("\n"));

    // Tags
    const tagsStart = postText.indexOf("Tags: ");
    let tags = postText.substring(tagsStart + 6);
    tags = tags.substring(0, tags.indexOf("\n"));

    // Tags
    const dateStart = postText.indexOf("Date: ");
    let date = postText.substring(dateStart + 6);
    date = date.substring(0, date.indexOf("\n"));

    // Content
    let contentStart = postText.indexOf("Content:");
    let content = postText.substring(contentStart);
    content = content.substring(content.indexOf("\n")+1);

    return {
        title: title,
        desc: desc,
        image: image,
        tags: tags,
        date: date,
        content: content
    }
}

// Get all of the files by fetching the `posts`
// Need to add new posts to `index.txt`
const populatePosts = async () => {
    const fetchPosts = await fetch("/posts/index.txt");
    const postNames = await fetchPosts.text();
    
    // Create a post for all lines
    const posts = postNames.split("\n");

    // Grid reference
    const grid = document.getElementById("projects-grid");

    // Posts
    let i = posts.length;
    for (let p of posts) {
        p = p.replace(/\r/g, "");
        
        // Get post attributes
        const postObj = await getPost(p);
        
        const temp = document.createElement('template');
        temp.innerHTML = `
        <div 
            class="project slide-up-element" 
            style="animation-delay: calc(0.05*${i}*1s)"
        >
            <div class="project-img" style="background: url(media/${postObj.image}) center / cover no-repeat"></div>
            <p class="date">${postObj.date}</p>
            <p class="tags">${postObj.tags}</p>
            <div class="project-bottom">
                <h4>${postObj.title}</h4>
                <p>${postObj.desc}</p>
            </div>
        </div>
        `

        // Create the post object
        temp.content.firstElementChild.onclick = () => switchPage(p);
        grid.insertBefore(temp.content.firstElementChild, grid.firstChild);
        i--;
    }
}

populatePosts();