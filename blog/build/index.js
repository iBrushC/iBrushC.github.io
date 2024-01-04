// Imports
import { readFileSync, writeFileSync, readdirSync, unlinkSync } from "fs";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

// Constant objects
const marked = new Marked(
    markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang, info) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    })
);

// Constant values
const INPUT_FOLDER = "../raw-posts";
const PAGES_FOLDER = "../pages";
const HOMEPAGE_PATH = "../home.html";

const HOME_TEMPLATE = "./templates/home.html";
const POST_TEMPLATE = "./templates/post.html";

// Extracts title, date, content, etc.
const extractArtcileData = (fileContents) => {
    const articleData = {};

    // Key paired data
    const dataTags = {
        title: "TITLE: ",
        web_title: "WEB-TITLE: ",
        description: "DESCRIPTION: ",
        cover: "COVER: ",
        cover_description: "COVER-DESCRIPTION: ",
        date: "DATE: ",
        tldr: "TLDR: ",
    };

    for (const key of Object.keys(dataTags)) {
        const tagSelector = dataTags[key];
        const trimmedContents = fileContents.slice(
            fileContents.indexOf(tagSelector) + tagSelector.length
        );
        const value = trimmedContents.slice(0, trimmedContents.indexOf("\n"));
        articleData[key] = value.replaceAll("\r", "");
    }

    // Article Markdown
    const beginTag = "BEGIN-CONTENT";
    const trimmedContents = fileContents.slice(
        fileContents.indexOf(beginTag) + beginTag.length
    );
    articleData.content = trimmedContents;

    return articleData;
};

// Creates a post in the home
const formatHomePost = (articleData) => {
    return `
<div class="post-wrapper">
    <a class="post" href="./pages/${articleData.web_title}.html">
        <div
            style="
                background-image: url(../media/${articleData.cover});
            "
            class="post-cover"
        ></div>
        <div class="post-title-area">
            <h2>${articleData.title}</h2>
            <p>${articleData.date}</p>
        </div>
    </a>
</div>
`;
};

// Writes the buffer into the main home HTML
const writeHomepage = (postBuffer) => {
    const homeTemplate = readFileSync(HOME_TEMPLATE, {
        encoding: "utf-8",
    });
    const newHTML = homeTemplate.replace("<!-- POSTS -->", postBuffer);
    writeFileSync(HOMEPAGE_PATH, newHTML);
};

const writeBlogPost = (articleData) => {
    const postTemplate = readFileSync(POST_TEMPLATE, {
        encoding: "utf-8",
    });
    const bodyHTML = marked.parse(articleData.content);
    const newHTML = postTemplate
        .replaceAll("<!-- TITLE -->", articleData.title)
        .replaceAll("<!-- DESCRIPTION -->", articleData.description)
        .replaceAll("COVER-IMAGE", `../../media/${articleData.cover}`)
        .replaceAll("<!-- COVER-DESCRIPTION -->", articleData.cover_description)
        .replaceAll("<!-- DATE -->", articleData.date)
        .replaceAll("<!-- TLDR -->", articleData.tldr)
        .replaceAll("<!-- ARTICLE -->", bodyHTML);

    writeFileSync(`${PAGES_FOLDER}/${articleData.web_title}.html`, newHTML);
};

// Main build
const build = () => {
    const articles = [];

    // Delete all article files
    const currentArticleFiles = readdirSync(PAGES_FOLDER);
    for (const article of currentArticleFiles) {
        unlinkSync(`${PAGES_FOLDER}/${article}`);
    }

    // Read over each file then manage the relevant data into templates
    const files = readdirSync(INPUT_FOLDER);
    for (const file of files) {
        const contents = readFileSync(`${INPUT_FOLDER}/${file}`, {
            encoding: "utf-8",
        });
        const articleData = extractArtcileData(contents);
        writeBlogPost(articleData);
        articles.push(articleData);
    }

    // Sort by date
    articles.sort((a, b) => {
        const comparison = Date.parse(a.date) < Date.parse(b.date);
        return comparison * 2 - 1; // maps from [0, 1] to [-1, 1]
    });

    // Format the posts for the blog homepage
    let postBuffer = "";
    for (const article of articles) {
        postBuffer += formatHomePost(article);
    }
    // Updating homepage
    writeHomepage(postBuffer);
};

build();
