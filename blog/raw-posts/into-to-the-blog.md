TITLE: Introduction To The Blog
WEB-TITLE: intro-to-the-blog
DESCRIPTION: What's going on here?
COVER: intro-to-the-blog/dandy.png
COVER-DESCRIPTION: 3D render of a dandelion I made
DATE: 01 Jan 2024

TLDR: I made this blog to document and share my technical work throughout the year, with the overall goal of making 12 blog posts by the end of it. The website was hand written using traditional web languages and uses a custom content management system for handling posts. <br><br> <em>(Side note: my initial plan was to use a language model to summarize this, but the results were absolutely awful)</em>

BEGIN-CONTENT

## Welcome

Hi! My name is Andrew Combs, and as of writing this I'm a first year Electrical Engineering student at North Carolina State University. Although it's part of my major, creating things is also my hobby! I fill most of my freetime with projects and challenges, and the goal of this blog is to have a place to document those things.

I also do a lot outside of technical projects! I am an avid bread baker, chef, freerunner, chess player, 3D artist, and rock climber. I generally like most things outdoors or involving food, and am always looking for new things to add to my repertoire.

<div class="row">

![Baguette](../../media/intro-to-the-blog/baguette.jpg)
_A (slightly underbaked) baguette I made_

![Climbing](../../media/intro-to-the-blog/climbing.jpg)
_Climbing "Gym Rat Kevin" at Moore's Wall_

![Pasta](../../media/intro-to-the-blog/pasta.jpg)
_Me cooking "Assassin's Pasta"_

</div>

My next posts should be about evolving drawings from images, rendering black holes, and fractals, which should (hopefully) be more interesting than this. I'm not sure what I'll have time for, but the plan is to try to post on Hackaday too and _maybe_ make short videos with each post.

## Why?

I've been notoriously bad about not publishing my work in the past, either doing nothing or writing a slightly fancier-than-usual github _README.md_ document. This should act as a platform where I can make detailed posts on my projects, but have them formatted nicely enough that I can show them off to anyone.

Another thing I'm using this blog for is to give myself a defined place to stop on projects. On a lot of projects, I tend to keep going back and changing them even after I tell myself that I'm finished with them, spending a ton of time on marginal improvements. I've found that having a final deliverable on projects makes it a whole lot easier for me to step away and leave it be, plus it gives me time to really reflect and review everything I've done.

It may be obvious given that this was posted on January 1st, but posting my work has been one of my new years resolutions. My goal is to **post at least 12 blog posts by the end of the year**! Initially I was planning on posting one per month, and that may be what happens, but I figured that life gets busy and it'll be easier to complete a yearly goal than 12 monthly ones.

## Tech Behind the Site

It would be wrong to start off a technical blog with absolutely nothing technical, so I figured I'd go over the design of this website! This is the second personal website I've made, and is a SERIOUS improvement over the last one, which was quite clearly made by a 15 year old. Like the last one, this is written in plain HTML, CSS, and JavaScript, though that wasn't initially the plan.

### An Oversimplified Summary of Modern Web Development

I tend to make my web apps with plain web languages, but that's just not how people make stuff anymore for the simple reason that it's a pain. Modern web developers use what's called a **Web Development Stack**, which is a set of frameworks, tools, and APIs to manage the frontend and backend aspects of a web app. Development stacks can get extremely large and complicated, with **stacks like google relying on 22 different systems** at any given time. If you're just trying to make a simple website though, you'll probably only need a frontend and maybe a backend if you're keeping track of anything.

### Frontend and Frameworks

As far back as the early 2000s, people realized that HTML, CSS, and JavaScript were annoying to keep track of for more complex apps, so they started creating **JavaScript Frameworks**, which vastly simplified integration between HTML and JavaScript. Frameworks allow you to write a modified script that's (usually) then compiled down to deliverable HTML and JavaScript. Each framework has its own syntax, but JSX (JavaScript XML, used by React) is a good example of how frameworks make development easier.

Let's say we want to make a to-do list app. In vanilla JavaScript, this is going to require a handler to add and remove specific elements, as well as a function to create the element, which might look something like this

```js
// Keep track of to-dos
const toDos = [];

// Some generic formatter
const formatTitleToId = (title) => {
    // ...
};

// Create the DOM Element
const createToDoElement = (title) => {
    const toDoContainer = document.getElementById("container-id");

    const base = document.createElement("div");
    base.className = "to-do-base";
    base.id = formatTitleToId(title);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const title = document.createElement("p");
    title.innerHTML = title;

    base.appendChild(checkbox);
    base.appendChild(title);
    toDoContainer.appendChild(base);
};

// Add an item to the todo list
const addToDoItem = (title) => {
    toDos.push(title);
    createToDoElement(title);
};

// Remove an item to the todo list
const removeToDoItem = (title) => {
    const itemIndex = toDos.indexOf(title);
    if (itemIndex === -1) return;

    toDos.splice(itemIndex, 1);
    document.getElementById(formatTitleToId(title)).remove();
};
```

It's not terrible, but that's a good bit of code for something so simple! Adding and removing an item isn't bad, but `createToDoElement()` is hard to understand and would be a nightmare to change, especially if we included stuff like a date, time, image, or sub-items.

Now let's do it with JSX and React

```jsx
import React from "react";

// Create the DOM Element
const ToDoElement = ({ title }) => {
    return (
        <div className="to-do-base">
            <input type="checkbox" />
            <p>{title}</p>
        </div>
    );
};

export function App(props) {
    // Keep track of to-dos
    const [toDos, setToDos] = React.useState(["Wash Clothes"]);

    // Add an item to the todo list
    const addToDo = (title) => {
        setToDos((oldToDos) => [...oldToDos, title]);
    };

    // Remove an item to the todo list
    const removeToDo = (title) => {
        const itemIndex = toDos.indexOf(title);
        if (itemIndex === -1) return;

        toDos.splice(itemIndex, 1);
        setToDos(toDos);
    };

    return (
        <div>
            {/* ... */}
            {/* Add all of the elements to the page */}
            {toDos.map((toDo, i) => {
                return <ToDoElement title={toDo} key={i} />;
            })}
        </div>
    );
}
```

With about the same number of lines, React and JSX are able to do both the HTML and JavaScript, and not have to worry about element ids or creating and removing elements. Also, the new way of creating an element is much cleaner, and `ToDoElement` is now readable! As long as you know how to use them and can get them running, JavaScript frameworks can massively speed up and simplify web dev.

The next question is styling, as layout and scripting can only get you so far. CSS is widely hated, but for a while was seen as a necessary evil. More recently though, CSS frameworks like Tailwind and Bootstrap have been gaining popularity. Most apps tend to use the same general components, and CSS frameworks pre-make those components to perfection so you don't have to. It's an extremely easy way to get a professional frontend in nearly no time at all, with the tradeoff of marginally less freedom.

### Why I Used None of Them

As much as I'd like an enlightened reason not to use a framework, and to go on about building discipline by doing things the old-fashioned way, that's not why I didn't use a framework. React is the only framework I've used so I started with that, but **my computer is old and sometimes things just don't work on it**. While I was able to get React installed and building, the auto-update was making it unusable: CSS styles would completely disappear, code wouldn't update, code wouldn't work until I restarted the dev server, and so on. I tried for about three days before biting the bullet and deciding to just stick with simple JavaScript. While I could have switched to Angular or Vue and spent a week or two learning those, I'm not a web developer and don't intent to be, and for something as simple as what I was making I just didn't need a framework.
The point of JavaScript frameworks is to make the whole process easier, and since they were making my process hard, I decided to ditch them.

As for CSS frameworks, many of them are made for modern web apps and come with appropriately modern-tech feels. While I could have customized it and no doubt gotten the same final result, most CSS frameworks come with extremely large file sizes that can slow down website loading which wasn't worth it for me (there are tools to remove unused CSS classes but that's added complexity that I really didn't need for such a simple website).

### The Blog

While I've stuck to traditional means for the general website layout, I've drawn the line at manually creating the HTML for every blog post. The whole point of this blog is to allow me to easily share my work, but I'd never share anything if I had to grapple with manual HTML layouts! A bunch of smart people had this same problem a while ago and came up with the concept of a **Content Management System** or **CMS**. A CMS is pretty similar in concept to a compiler: both take an easy-to-modify input and produce the harder-to-modify output. Instead of tokens or ASTs to machine code, CMSes take some formatted text file and turn it into a formatted web file. One of the earliest and most widely used CMS apps is Wordpress. Recently, full-stack applications have been utilizing the **headless CMS**, which stores all the necessary data in a platform-agnostic format. When the data from a headless CMS is used, it must first run through a series of APIs and processors to make it usable for the platform. This makes an app ready for the web, mobile, and just about anywhere else with the cost of some complexity.

My personal blog isn't quite a full-stack multiplatform application, so a traditional CMS is fine. There are tons of CMS solutions, all claiming to be the best, but as tempting as Sanity and Strapi were, I've once again written one myself. I can only really get away with this since my website is static and changes aren't exactly urgent. My custom, unnamed CMS is written in Node.js and is about as simple as it gets: I write a blog post in Markdown, run the script, and an article is generated and added with all the formatting I need. Using `Marked.js` for parsing and `Highlight.js` for the syntax highlighting, the entire thing took no more than an hour and has less than 150 lines of code.

## What's Next?

The next couple of posts for me should be pretty easy, and are more reviews on project's I've already finished. The plan is that that'll give me enough of a buffer to make progress on all sorts of other projects, and I can soundly reach my goal of 12 posts in a year. I'm excited to start the new year, and can't wait to start chipping away at my list of projects and having a detailed post to show off about each of them.

This post has honestly gone on for far longer than I thought it would, so I feel like it's about time to end off. If you're one of the three people who's actually made it this far, I'm glad you're interested in my work, and I'll hopefully have some progress to show off by the time you're reading this.

👋
