Title: Closing Compact Legal
Description: A postmortem about the mistakes and learnings from my first backed venture
Image: compact.png
Tags: Venture
Date: August 2026
Content:

Over this most recent summer, I got some angel-stage backing to pursue what would later become <b>Compact Legal</b>, a legaltech startup aimed at making agents and workflows accessible to small firms. After about 5 months of hard work, a number of beta testers, and several pilots, I'm officially ending the project. We didn't make much profit (factoring in labor costs it was a net loss) but the insane trial by fire taught me enough to make the experience well worth it.

<br><br>

This post will be a rather lengthy summary of what I learned, all the mistakes I made, what I would have done differently, and other random information.

<br><br>

I also want to preface that I am in no way trying to pretend that I've now figured out startups. This isn't mentorship, but a collection of my own thoughts on the mistakes I made and what I personally have taken away from them. How you take these and apply them will depend on how your gears turn and what works for you specifically. There is no such thing as universally applicable advice.

<h2>Preword: What is Compact Legal and Why?</h2>

I'm a biomedical engineer, which naturally raises the question (that many VCs asked), "why are you building in legal?". To put it simply, I chased this because of opportunity and connections.

<br><br>

First is opportunity. When I first started looking at this about a month or two before any development started, there was a very clear gap in a very large market. Our thesis was roughly:

<blockquote>
    <i>90% of lawyers are in firms of 20 people or less, but almost all AI-based legal tech exclusively targets enterprise firms.</i>
</blockquote>

There was a considerable amount of research into this, and all the numbers work on paper. Although enterprise spends about 5x more per lawyer, the addressable market of small law is 9x larger so still quite respectable. Native law platforms were putting out awful AI implementations left and right, overwhelming customer sentiment showed people were sick of the buggy messes they were using, and all the while Harvey and Legora were these magical wands locked away in NYC skyscrapers.

<br><br>

I've heard this described by some as being a "deployment founder", where you build an idea because you see the market for the idea and deploy because the issue exists. In the future, I will likely avoid trying to be a deployment founder.

<br><br>

Secondly, connections. I stumbled upon this idea in the first place because my family has a number of lawyers, most of which had been sharing their thoughts on AI and legal in real-time over the last year-or-so. At one point, one told me "I wish [X] tool existed" and I realized I could very easily make this [X]. I figured with at least three law offices obligated to help it would be an easy launching point.

<br><br>

Before going into the whole postmortem, I'd like to say that I still do genuinely believe in the idea. There's a serious inflection point in the market and I'm sure that in 6 months or so, someone with a stronger law background will get $XXm ARR from a similar idea, but that someone will not be me.

<h2>Lesson One: Fit</h2>
<b>Founder idea fit</b> is something that took a lot of falling on my face to realize the importance of. In general, it's a whole lot easier to develop and innovate in a space when you have a good reason to be there. As a biomedical engineer, my founder-idea-fit for a purely software legal product was about as low as it could get, but I had my reasons for still pursuing it.

<br><br>

Great companies often pop up from unlikely places. Apple is the textbook example, where Steve Jobs was highly untechnical. My reasoning was that I had experience working on full-stack apps and had several lawyers that could help make up for my lack of legal knowledge. Many lawyers are deeply untechnical (foreshadowing), so having a purely technical person with lawyer guidance should be able to create things a tech-involved lawyer wouldn't be able to.

<br><br>

To many extents, my reasoning was true. We made a considerable amount of features that consistently surprised people in demos and many people thought we did some serious innovation. However, this was only for our product, and it turns out product-idea-fit extends to all aspects of the business.

<h3>The Right People Make a Huge Difference</h3>
I did this project with two other cofounders, one technical and one other SWE. None of us really had any experience in law, and this began to show when it came to anything beyond the basics. We could create webpages and tools super well, but we were often disconnected and lost as far as business and marketing. This isn't the fault of the business person, she had a ton of experience and success in other fields, it just turns out we greatly underestimated how difficult it would be to sell to small lawyers. As different as it could get from UGC.

<br><br>

Same with me and the other SWE. We were both pretty lost, and would sometimes implement things according to different previously held beliefs that simply didn't apply within law. We (shockingly) made things usable more often than not, but the uncertainty of not knowing how anything would be received made development just not fun.

<br><br>

We were all out of our element which was occasionally frustrating and always confusing. We made endless mistakes while building, had considerable churn, had inconsistent turnarounds that could be hours or weeks and more. Experience in a field isn't required, but without it you are always climbing uphill.

<h3>Fit is More Than Technical</h3>
More than the field experience, more than technical knowledge, more than product/business operations, <b>founder-idea-fit is a mental game</b>. 

<br><br>

As my first truly all-in venture, I did not realize how mentally taxing running a startup is. Though not constant, there were many weeks where I was averaging 11 hours a day, working 7 days a week, and feeling absolutely awful. You sink literally your entire life into something that logically has a sub 1% chance of working, and for the majority of the time you make zero progress.

<br><br>

Aligning with your idea is vital for this reason exactly: you will do so much for so little, and without the understanding, belief, and love of the field you will wake up for weeks and hate your life. Determination and delusion are really all there is for a while, and I really didn't have much of either. Since none of us had a deep connection to the field and idea, we kept running on fumes out of what had to have been pure spite, trudging towards an unclear goal and all the while thinking "what the hell are we doing in legal tech?" Even when we started getting traction and users, it wasn't the pure hit of ecstasy we needed it to be.

<br><br>

It is not impossible to develop in a field you're unfamiliar with. In fact it often results in innovation. It <i>is</i> impossible to develop in a field you're not passionate about. Founder idea fit helps avoid mistakes early on, resonate better with customers, and keep going even when you go weeks/months without any return on the investment of your entire life.

<h2>Lesson Two: Target Market</h2>
Choosing your target audience is literally the single most important thing when building a product. Building for a market that doesn't exist yet is a luxury reserved for
<ol>
    <li>The extremely lucky or knowledgeable</li>
    <li>Giant companies like Meta that can eat a $88B loss like nothing happened</li>
</ol>

No matter the person, field, mission, etc., a company cannot survive without profit and profit doesn't exist without a market.

<h3>Everybody is Nobody</h3>
In a very naive blunder, I fell for the "let me just target the largest market possible!" trap. Yes, a larger market means more potential customers and thus higher profits, but reality spits back with the fact that there are very few ideas that can generalize across an enormous market. Even if you look at the most general ideas today, they didn't start off trying to target everyone. Amazon was initially made as an online retailer for books, a far cry from the giant it is today.

<br><br>

The issue is that generalizing to a whole market requires a market which is appropriately generalizable. If you make a product that targets the exact "average customer" in a market with a bimodal customer distribution (this is overly simplified), then you will ultimately make a product for nobody. If you build a narrow product in the center you'll miss entirely, but if you build wide from the start then you'll end up with a bunch of half-baked features that won't impress anybody.

<br><br>

<div class="post-image" style="background-image: url('https://static.cambridge.org/binary/version/id/urn:cambridge.org:id:binary:20190207075706603-0570:9781107326200:61588figu248.png?pub-status=live')"></div>

<br><br>

Trying to build for everyone from the very beginning is pretty much always a bad idea, and our target market was way too large. "Lawyers in small firms" constitutes about 100 different unique audiences, something we didn't learn until way too late (stems back to the idea-fit issue). There's a reason why there are so many legal softwares tuned for different types of law.

<br><br>

We talked with a few hundred people before doing any major development and got tons of information, most of which was scattered because it was coming from different modes. For a few examples:

<ul>
    <li>Litigation and transactional law operate on vastly distinct timeframes, document preparations, document deliveries, and communication styles.</li>
    <li>Some fields of law, like personal injury, are both transactional and litigation</li>
    <li>Many practices are full of repetitive tasks, but these are highly distinct between types. There is a separate toolkit for each CRE, immigration, estate planning, etc., and none of these toolkits will be mutually useful.</li>
    <li>Even within an individual practice, sublevels of the practice have their own needs. Immigration for one ethnicity versus another are far from identical.</li>
    <li>Solo practice, 2-6 person firms, 6-10 person firms, and 10-20 firms are not easily groupable.</li>
</ul>

This is only a handful of the differences I could think of looking back. We shot dead center and missed most of them on our first attempt, then shot wider and hit a few but not nearly hard enough.

It is much better for both the short and long term to build for a single customer or small group first. Order of operations should have been getting a design partnership (or several) first, then build for the people we <i>know</i> will use it. We built first and tried to sell later, leading to all sorts of issues.

<h3>Validation Needs to be Continuous</h3>
One of our biggest mistakes was assuming that market validation at time <code>t</code> extended to market validation at <code>t + 1</code>. People, markets, and products make up a chaotic system which can only proceed smoothly with constant effort to validate in the early stages. Validating only every once in a while (especially, like in our case, if you don't have a firm grasp of the field yourself) is like using a newborn parenting book until you kid is the age of three. Extrapolation only applies within a reasonable domain, and the system we were using was not keeping within said domain.

<br><br>

We initially did one large round (maybe 120 calls?) to validate the idea and get initial feedback, then started building. This is good and would have been a great start, had we kept up with 60 or even 20 or those people on a consistent basis. Instead, we went "heads-down" and built for about three weeks, then reached out after we felt we had something "somewhat complete" to show. By this point, most people had forgotten about us and we got maybe three somewhat disinterested responses. We then had to fight again for feedback, by which point we had already extrapolated too much and many people were confused about our mission. That makes sense, because we were too.

<br><br>

<div class="post-image" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrLjWE5J3UhJAw2pjLDZyWaACijSMhggXuQ0ahwECWQ&s=10')"></div>

<br><br>

We went through I'd say 2.5 fully different apps because of this, making considerable changes without feedback and drifting ever-further. We got stuck in churn mostly because we would get feedback, develop, overshoot, then have to revert/change a bunch of what we had developed.

<h3>Interest ≠ Conversion</h3>
We found out after about 1.5 months that interest and support for the project will oftentimes not translate into a paying customer or even a beta tester. When we had our first app ready, we had picked things back up and talked rather consistently with about 10 lawyers who were all very nice and asked to stay updated on the project. We falsely assumed this meant they'd be willing to try or even pay for it.

<br><br>

The real world is much messier than that, and many people are interested in things that they would absolutely not be the first to try. I, for example, am interested in brain-computer interfaces, but would absolutely NOT try out a Neuralink. When we reached out to all of our lawyers, they were politely dismissive and we could only get one person to test it and give basic feedback.

<br><br>

Avoiding the issue by not mentioning your full intentions with the other party, e.g. not explicitly saying that you're hoping to have them test or use the product, makes it very difficult to gauge your audience. Interest is cheap, and insufficient to say that an idea is good or not.

<h3>Some Markets are Harder Than Others</h3>

Some markets are just inherently easier or harder to sell in. Consumer apps can be spun up and deployed worldwide in weeks, whereas a new medtech device will take years before hitting the market. If you choose a hard market, expect a hard sell. We chose a hard market.

<br><br>

The question we should have asked ourselves with considerable scrutiny was "why hasn't someone else already done this?" There are plenty of other giants already in the field with large market shares, so it should have raised massive alarm bells that an AI-native agentic legal toolkit didn't already exist well into 2025. <b>The core issue is that lawyers are a pain-in-the-ass when it comes to technology</b>.

<br><br>

Think of the most technologically illiterate person you know. Now make them intrinsically skeptical of everything you tell them. You now have a lawyer. The lawyers we talked to were all using wildly different platforms, many of which hadn't been updated in years, had steep learning curves, or were not built for the tasks they were using them for. But they used them nonetheless because it's their software which they know how to use. Many attorneys straddled their work between 5-10 different platforms or softwares, some didn't use any at all. One person we talked to ran their entire practice by folders of Word documents that were emailed back and forth. And all are completely valid functional ways to run it. In summary, people carve out their own technology cave and like to sit in it.

<br><br>

On top of the favoritism of platforms, people were also highly (and reasonably) skeptical of the platform's data policies. A firm's documents make up a large portion of their identity, an identity they didn't want to give to a software that was in beta. Getting SOC2 or ISO27001 compliance would have taken the entire summer and cost our entire budget, creating a ridiculously high barrier to entry for even the most basic of features. Many lawyers were also highly skeptical of AI as a whole, making this a tremendously difficult thing to sell to people.

<br><br>

As the icing to this cake, many lawyers literally can't switch to a different platform. Our first 1.5 versions were full CRM/Document Management platforms, but trying to get a single customer here would have been borderline impossible. Legal software enforced vendor lock-in by making it a living hell to move data off the platform. Regardless of how magical we made our product, the sheer insanity of leaving any other platform was enough to put people off of switching. For context of how bad it is, there are services where people pay thousands of dollars to transfer from one software to another. We ended up making a platform-agnostic tool for our next revision which got much more success.

<br><br>

Beyond the dynamics of selling to law, we were also selling to small businesses, which are notoriously painful to gain traction with. Unlike enterprise where you can close a deal and instantly double your paying customers, each deal takes weeks/months and only nets you a small profit. 

<br><br>

After leveraging existing connections, changing our product dynamic, having a weekly newsletter, and numerous other changes, we were able to get traction, but the process was about as smooth as a pile of LEGOs. Small law has got to be one of the most annoying markets to sell to.

<h2>Lesson Three: Founder Dynamics</h2>
Beyond the product and market itself, we made a lot of mistakes when it came to founder dynamics. The way we organized our team had a few major flaws which resulted in way more stress than necessary.

<h3>Distinct Roles are for Real Companies</h3>
One of the most regrettable things we did looking back was establish exact roles for who did what. This may sound absurd coming from a traditional, corporate perspective, but defining hard lines for who does what made progress slower and more irritable.

<br><br>

Consider the example of the development team. We set up frontend and backend responsibilities, delegated tasks each week, and did our very best to get them done. This does not scale to the hyperspeed required for a modern startup. People should be updating and fixing whatever needs to be updated/fixed as soon as they see the issue. By fixing who can do what, it led to a lot of holdups and annoyance because "someone was supposed to do that thing earlier" or "this thing doesn't work how it should". Everyone should be working as hard as they can on whatever they see needs improvement, exact roles can be set later. Delegating tasks made sense and generally worked for us, but splitting responsibilities down three lines made things way more annoying than they needed to be.

<br><br>

The same went for business and marketing. Our business-focused person was really the only one doing the business stuff, when in reality it would have been much better to have everyone hopping on calls, sending cold emails, gathering feedback, etc.. The whole idea of distinct roles divided our work and our interactions. Until you're relatively late stage, everyone should all be co-founders, nothing more nothing less.

<h3>Distance Inhibits Speed</h3>
We spent the majority of the summer working remote. This is horrible, and I would never recommend it to anyone. It ate away at all of our mentals and led to considerable disconnect both interpersonally and in our ideas. Even with instant messaging and calling, keeping everyone up to date and motivated across states and timezones is a Herculean task

<h3>Taking Breaks</h3>
Regardless of how motivated and full-steam-ahead you may be, taking breaks (even if small and infrequent) is still a necessity. We all learned this the hard way at various levels of burnout. I specifically figured out (after doing so for about 3-4 weeks) that working every single day without rest resulted in the occasional crash, where I would spend an entire day or so rotting and feeling useless. Startups naturally attract people who are willing to work absurd hours, such as everyone on our team. But failing to rest in any capacity makes life worse by multiple orders of magnitude. Life became a whole lot easier when I spent several hours a week outside and allowed myself to do things like watch the occasional movie.

<h2>Lesson Four: Priorities</h2>
As a group of first time founders, we had a lot of misconceptions about what was important and what wasn't. In general, we tended to greatly underestimate our progress for development and overestimate how much we could do in marketing.

<h3>Sell Very Early</h3>
Sales are not instant. We were under the misconception that if we built something based on feedback, then presented this final thing, we would get a sale. We chunked by outreach, development, then sales, when in reality we should have been selling it during development. A finished product isn't a necessity before sales, and as a matter of fact selling without a finished product is great validation. If people are willing to buy without a complete demo, that's a good signal that the idea is good.

<br><br>

Looking back, sales (especially for a paid pilot or design partnership) should have been started immediately after our idea validation step. We kept delaying by a week or two because we thought "we don't have a good enough product yet" when the sales themselves take several weeks of back and forth, more than enough time to keep developing it. 

<h3>Scope Creep and Scale</h3>

As mentioned above, development was often an imaginary bottleneck we set for ourselves. One of the issues here is that we didn't have an exact measure for when it would be "ready". We (I was the worst offender of this) kept pushing the goal post because of X or Y, always one more tweak away from moving on to the next step.

<br><br>

Half of this was scope creep: we always figured we could do a little bit more. This is generally a good mindset in moderation, but applied to small details it led to many of our slow timelines. It's especially bad when multiple people are doing it in a bunch of different ways, leading to a ton of new features or speedups or the works. Something we realized and accepted later on (to great improvement) is that <b>the product will never achieve the mythical status of "ready"</b>. Developers are artists, endlessly tweaking a painting which, to an outside observer, may look already complete. The biggest improvement to our development cycles was doing a hard cutoff at good-enough and deploying that.

<br><br>

The other half was the scale at which we were developing, in founder terms building wider instead of taller. Especially for our earlier CRM revisions, there were a lot of unique features to develop. A full firm-management platform has document storage, secure messages, case/matter management, timelines, and so on. At one point we delayed recording a demo for about a week because we wanted to get the auto translation feature of our internal messaging functional. This spread of mini niche features was wrong from the start, and a collection of small quality of life improvements wouldn't have been enough for anyone to use our product.

<h3>Presence Matters</h3>

Similar to selling early, we should have made our online presence much earlier. Making a Linkedin page after three months of work was far too late, and as mentioned before with the sales, subtle marketing (like posting about the state of law, commenting/replying to others) and establishing ourselves would have accelerated the rest of the process later on.

<h2>Concluding</h2>

That was a lot of negative talk about a considerable portion of the last few months of my life. Honestly, if I could go back and change literally everything, I probably would. But how laughably bad some of these decisions were is proof of growth and the sharp jolt in experience that will make my next venture all the better.

<br><br>

Obviously, failing at something you've put everything into sucks, but it seems like the surefire way to become a better founder. Believe me I did considerable research before going into this, reading dozens of articles, watching founder stories, crawling every VC blog I could find. None of them work to cement things quite like waking up exhausted for a month straight.

<br><br>

While it would be easy here to say that I've given it my all and make an Irish exit from founding, I'm honestly hungry to get back into it. The bell's rung on the first round, my head is spinning a bit, but I've learned and I'm ready to try again. Statistically, I'll get hit in the face a couple more times before landing a hit, but that's all part of the fun.

<br><br>

I've got a few more things in the works, a few ideas with stronger fit, and some newfound motivation. 

<br><br>

<h2>Postscript: Technicals</h2>

For no reason other than a sense of completion (and that I really am proud of what I made), I've decided I'm going to write up a whitepaper going over all the systems I designed and post it later as its own thing.
