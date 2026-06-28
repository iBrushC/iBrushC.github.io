Title: Brainstorming in the Age of Vibe Coding
Description: A package for agent-collaborative system design
Image: brnstrm.png
Tags: Project
Date: June 2026
Content: 
I've been slowly getting used to vibe coding over the past year, and the reality I've noticed is that developing something has become much more a game of designing the right systems rather than writing the best code. A lot of simpler tasks can be handled by a single sentence, but for complex tasks at least, I've found myself spending more time thinking about what the inputs, outputs, and steps of a system are rather than the algorithms used to move between the start and finish. It's for these complex tasks that I created the npm package <a href="https://www.npmjs.com/package/brnstrm">brnstrm</a>.

<br><br>

<b>brnstrm</b> ("brainstorm" was taken so I removed all the vowels) is a simple relational brainstorming workspace for storing ideas of systems that are tedious to describe with words alone. It's agent-collaborative, meaning boards are available to read, edit, and create for both you and your coding agent of choice. You can get started by simply typing into your terminal

<br><br>

<code>npx brnstrm init</code>

<br><br>

You can set it up with any project and any agent in 30 seconds. It was designed to fix a few fatal flaws which I've experienced while vibe coding an app with a remote team.

<br><br>

The main issue I'm trying to solve is that all agentic coding is done through prompts, but trying to describe complex systems end-to-end in english alone can be hard. Especially if designing layered, multipronged systems, typing layers of relations and functionality has me feeling like a 5th century Indian mathematicians writing algebra in prose. 

<br><br>

The second issue is the inconvenience of brainstorming. Bringing out a tablet/piece of paper breaks the flow of thought, and most digital systems I find are overengineered. Not to mention, once you've created something you then need to get from the other medium to your agent. By keeping everything simple and in one place, it shrinks the turnaround time from idea to implementation.

<br><br>

The third issue is shared understanding. When implementing upwards of 30 new features per day, understanding how something works or what amalgamation of a prompt resulted in a new bug is really hard. This is compounded when teams are acting with any level of autonomy, and a feature may be devised and implemented by someone without anyone else understanding it later on. Since brnstrm is git-tracked, it can act as a way to share technical designs between team members.

<br><br>

I've used it to build a few small projects in a matter of days, where I can normally lay out the functional groundwork with a single board. If you use it and have suggestions or issues, please raise an issue on the <a href="https://github.com/iBrushC/brnstrm">project's Github page</a>.