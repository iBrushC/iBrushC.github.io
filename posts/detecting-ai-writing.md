Title: Detecting AI is Hard, Detecting Humans is Easy
Description: Even well-informed flagship models can't mimic an authors style.
Image: ai_detection.png
Tags: Project
Date: July 2026
Content:
As of writing this (July 2026), humanity as a whole has widely accepted defeat in detecting AI-written text. We've developed a sixth sense for ticks like over-use of em dashes and specific words ("genuinely", "leverage", and "robust" to name a few), but these are known by readers and users alike, and can be easily removed. It's gotten harder over the years due to the sheer amount of available models: on <a href="https://openrouter.ai/models?output_modalities=text&categories=academia">OpenRouter</a>, a popular access point for providers, there are 49 listed under "academia" alone. To make matters worse, most platforms also include per-user personalizations, where writing styles and vocabulary will change over time as it picks up on the nuances and preferences of whoever’s speaking to it. Last semester I saw someone posting about their chatbot addressing them as "babe" and ending messages with "and that’s the tea".

<br><br>

Large amounts of research show on-the-market AI text detectors don't work, and as such, <a href="https://www.reddit.com/r/academia/comments/1orouf0/the_reliability_of_ai_detectors/">people have no faith in them</a>. When your target is actually 50 targets, all with thousands of different hats, accurate identification is a nightmare. With the fact that most text being checked is too short for any sort of reasonable analysis, the problem of detecting generated text is mechanically impossible. To the dismay of teachers and professors, the fabled "perfect AI detector" won't be existing any time soon.

<br><br>

So is all hope lost? Not quite yet. A while back, I learned about stylometry, the statistical analysis of text which is generally applied for authorship attribution. People have tried this before with attributing written works to specific AI models, but to little success (due to aforementioned issues). But what if we approach the problem from the other side?

<br><br>

In combinatorics, <b>counting by complement</b> is used when counting your target is hard, but counting the opposite is easy. If we wanted to count the number of poker hands without a specific card, it would be easier to count the hands <i>with</i> that card then subtract it from the total number of hands. I applied this as <b>AI detection by complement</b>:

<br><br>

<blockquote>
<i>Instead detection by looking for AI, what if we looked for the human instead?</i>
</blockquote>

<br>

This is what I found to be, at least to my knowledge, the only reliable way to detect AI writing. As it turns out, <b>authorship attribution is accurate enough to discern between an author's writing and modern AI attempting to mimic it</b>. Machines simply cannot copy the statistical nuance of individual authors right now.

<br><br>

First lets examine stylometry, specifically for authorship attribution. It's built on the principle that certain decisions, like how long sentences are, what words are used where, etc., are unique to each author. By counting and understanding the shape of these statistics, we can build a profile for our author, which can then be compared against an unknown text. I used the common similarity metric cosine delta, embedding distributions of word positioning as a vector and comparing the angles. I'm not an expert on this and was mostly using premade packages, but there are <a href="https://rpubs.com/Shevek/deltas">good resources online</a>. People have used similar algorithms in the past for AI detection.

<br><br>

Once you have the stylometry, you need a corpus. <b>This is the huge, glaring flaw with this technique</b>. You must already have a sufficient amount of non-AI writing from someone before being able to detect them. The good news is you only need a relatively small amount, between 2-5 essays worth (~2000 words minimum). For teachers/professors, the primary users of AI detection technology, this shouldn't be much of an issue. Just have students do a few in-class essays and keep a watchful eye, and your corpus is built.

<br><br>

The bulk of this work was testing if authorship attribution would work in a realistic, worst-case scenario. To do this, I set up a simple procedure.

<br><br>

The first step is collecting a good testing dataset, I used a <a href="https://huggingface.co/datasets/Efstathios/guardian_authorship">public domain dataset built from The Guardian</a>. I specifically selected this because it uses essays rather than novels, which is closer to how AI is used in schools. The second step is creating an "assignment" for each essay, AKA a play-by-play instructing an AI model of how to write the essay it was based on. The last step is to then have a bunch of AI models rewrite certain authors' essays. Finally, we do a similarity score: how closely is the real author's essay attributed vs. the AI recreation?

<br><br>

The one other important detail is that this is a true, worst case scenario test. When rewriting an author's essay, the AI model is given every other essay written by that author (for this dataset 19 essays per). The AI is writing with all the data we use for detection and then some, which is analagous to how someone's personal AI chatbot has more memory of their writing style than any institution might.

<br><br>

The test was a fivefold similarity assessment. Five authors with five essays per author were randomly chosen, then similarity is tested in one essay using the other four as the comparison metric. Averaging across all 125 tests done, we get the following results:

<br><br>

<div class="post-image" style="background-image: url('/media/ai_detection.png')"></div>

<br><br>

Far and away, the author's own work stands out as the most similar, being nearly three times better than the next runnerup. <b>Even with ample reference, AI models simply cannot recreate a specific author's writing</b>. But lets look at a few more results.

<br><br>

<div class="post-image" style="background-image: url('https://raw.githubusercontent.com/iBrushC/linguistic-ai-detection/refs/heads/main/src/plots/experiment_multi/final/author_breakdown.png')"></div>

<br><br>

In the plot above, the difference between human and AI writing were plotted, where higher means the AI did worse. From these five authors, we can see there's immense variability, where authors like Hugo Young are incredibly difficult to replicate, whereas Martin Kettle seems to be the easiest. Yet what remains the same is that all of them, on average, are less similar to the author than their own writing.

<br><br>

<div class="post-image" style="background-image: url('https://github.com/iBrushC/linguistic-ai-detection/blob/main/src/plots/experiment_multi/final/trick_analysis.png?raw=true')"></div>

<br><br>

However, as with all things, the system is not perfect. For cases where an essay is distinctly different in style or subject, the AI is able to "trick" the detection to appear as close or better than the true author's writing. Across all writings and models, we get an 14.1% trick rate, or 85.9% detection accuracy, which is quite good. The outlier here is actually GLM5.2, an open-source Chinese model which punches far above its weight. It's the smallest model here (by a considerable 800 billion parameters), yet has the highest recreation accuracy, the highest trick rate, and far and away the best price-to-performance ratio.

<br><br>

<div class="post-image" style="background-image: url('https://github.com/iBrushC/linguistic-ai-detection/blob/main/src/plots/experiment_multi/final/cost_vs_performance.png?raw=true')"></div>

<br><br>

But unless you're teaching in China (where it's more popular), you likely won't need to worry about this one. I mentioned the surprising underdog model to my friends to find that nobody really knew what it was.

<br><br>

So, despite the continual fearmongering of models replacing humans, AI writing still sticks out like a sore thumb even in the worst case scenario. I'm unsure if I'll keep developing this, but I've been considering making it into an application for teachers/professors who'd like to ensure authenticity.