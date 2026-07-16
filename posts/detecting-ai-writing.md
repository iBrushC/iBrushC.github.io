Title: Detecting AI is Hard, Detecting Humans is Easy
Description: Even well-informed flagship models can't mimic an authors style.
Image: ai_detection.png
Tags: Project
Date: July 2026
Content:
As of writing this (July 2026), humanity as a whole has widely accepted defeat in detecting AI-written text. We've developed a sixth sense for ticks like over-use of em dashes and specific words ("genuinely", "leverage", and "robust" to name a few), but these are known by readers and users alike, and can be easily removed. It's gotten harder over the years due to the sheer amount of available models: on <a href="https://openrouter.ai/models?output_modalities=text&categories=academia">OpenRouter</a>, a popular access point for multiple models, there are 49 listed for academia alone. To make matters worse, most platforms also include per-user personalizations, where writing styles and vocabulary will change over time as it picks up on the nuances and preferences of whoever’s speaking to it. Last semester I saw someone posting about their chatbot addressing them as "babe" and ending messages with "and that’s the tea".

<br><br>

Large amounts of research show on-the-market AI text detectors don't work, and as such, <a href="https://www.reddit.com/r/academia/comments/1orouf0/the_reliability_of_ai_detectors/">people have no faith in them</a>. When your target is actually 50 targets, all with thousands of different hats, it makes sense that you won't be able to single them out in a crowd. With the fact that most text being checked is too short for any sort of reasonable analysis, the problem of detecting generated text is mechanically impossible. To the dismay of teachers and professors alike, the fabled "perfect AI detector" won't be existing any time soon.

<br><br>

So is all hope lost? Is there no way to identify academic honesty in writing? Not quite yet. A while back, I learned about stylometry, the statistical analysis of text which is generally applied for authorship attribution. People have tried this before with attributing written works to specific AI models, but this has been to little success due to aforementioned issues. But what if we approach the problem from the other side?

<br><br>

In combinatorics, <b>counting by complement</b> is used when counting your target is hard, but counting the opposite is easy. If we wanted to count the number of poker hands without a specific card, it would be easier to count the hands <i>with</i> that card then subtract it from the total number of hands. I applied this as <b>AI detection by complement</b>:

<br><br>

<blockquote>
<i>Instead detection by looking for AI, what if we looked for the human instead?</i>
</blockquote>

<br>

This is what I have found to be, at least to my knowledge, the only reliable way to detect AI writing. As it turns out, <b>authorship attribution is accurate enough to discern between an author's writing and modern AI attempting to mimic it</b>. Machines simply cannot copy the statistical nuance of individual authors right now.

<br><br>

First lets examine stylometry, specifically for authorship attribution. It's built on the principle that certain decisions, like how long sentences are, what words are used where, etc., are unique to each author. By counting and understanding the shape of these statistics, we can build a profile for our author, when can then be compared against an unknown text. I used a common method called cosine-delta, embedding distributions of word positioning as a vector and comparing the angles. I'm not an expert on this and was mostly using premade packages, but there are <a href="https://rpubs.com/Shevek/deltas">good resources online</a>. People have used similar algorithms in the past for AI detection.

<br><br>

Once you have the stylometry, you need a corpus. <b>This is the huge, glaring flaw with this technique</b>. You must already have a sufficient amount of non-AI writing from someone before being able to detect them. The good news is you only need a relatively small amount, between 2-5 essays worth (~2000 words minimum). For teachers/professors, the primary users of AI detection technology, this shouldn't be much of an issue. Just have students do a few in-class essays and keep a watchful eye, and your corpus is built.

<br><br>

The bulk of this work was testing if authorship attribution would work in a realistic, worst-case scenario. To do this, I set up a simple procedure

<br><br>

The first step is collecting a good testing dataset, I used a <a href="https://huggingface.co/datasets/Efstathios/guardian_authorship">public domain dataset built from The Guardian</a>. I specifically selected this because it uses essays rather than novels, which is closer to how AI is used in schools. The second step is creating an "assignment" for each essay, AKA a play-by-play instructing an AI model of how to write the essay it was based on. The last step is to then have a bunch of AI models rewrite certain authors' essays. Finally, we do a similarity score: how much is the real author's essay attributed vs. the AI recreation?

<br><br>

The one other important detail is that this is a true, worst case scenario test. When rewriting an author's essay, the AI model is given every other essay written by that author (for this dataset 19 essays per). It has more than enough data to see exactly how this author writes, which is analagous to how someone's personal AI chatbot has more memory of their writing style than any institution might.

<br><br>

The test was a fivefold similarity assessment. Five authors with five essays per author were randomly chosen, then similarity is tested in one essay using the other four as the comparison metric. Averaging across all 125 tests done, we get the following results:

<br><br>

<div class="post-image" style="background-image: url('/media/ai_detection.png')"></div>

<br><br>

Far and away, the author's own work stands out as the most similar, being nearly three times better than the next runnerup.