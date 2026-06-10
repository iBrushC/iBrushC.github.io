Title: DIY Surface Micromachining
Description: Trying to create gecko-inpsired tape and achieving 50 um precision from an old 3D printer.
Image: micromachining.JPEG
Tags: Project
Date: January 2025
Content:

Bioinspired and biomimetic engineering is one of the most interesting emerging fields anywhere. Despite all our technology, what we find on insects and reptiles is still vastly out of reach for our modern manufacturing, but we can learn a lot from trying to get there. I designed and built this 2 axis micromaching jig to attempt to create a nano-adhesive that mimics how geckos climb without any sort of chemical reactions.

<br><br>

Nanoadhesives, also known as gecko tape, work based on the Van-der Waals force, where even non-polar atoms which are close enough will attract each other. To make a material which can do this, wax is micromachined to have thousands of precise, tiny wedges, then a silicone polymer is poured to fill this. The silicone wedges flatten at the atomic level and allow large areas of the surface to experience the Van-der Waals force.

<br><br>

Micromachining is simply any kind of machining that happens on the micron scale, in this case between 50-100 microns. Most lab and commerical processes create these features using expensive, well-tuned CNCs which are accurate and precise to the individual micron, however this was about $10,000 out of budget for the project.

<br><br>

Despite the obvious difficulty of the task, I aimed to create something which could reliably create microscale features with the motors from an old 3D printer I found. But theoretically, how small could this go? Turns out, NEMA17 stepper motors habe the potential to be extremely precise. With a pretty standard 16x microstepping, each turn can be split into 3200 steps, which when combined with a 2mm pitch threaded rod results in each step being only 0.625 microns. With a not of assumptions, a stock 3D printer is actually capable of reaching nanometer accuracy.

<br><br>

Now, this is with a <i>lot</i> of assumptions, something which I knew going in. Since the target feature size of 50 microns was roughly two orders of magnitude larger than the theoretical minimum, I figured this would still be an achievable goal. So, I designed a host of 3D printed parts that would come together with an aluminum extrusion frame to hopefully allow constrained two axis movement, one to move the block of wax along its long axis and one to move a razor blade up and down to create wedges.

<br><br>

To control the machine, I made an ESP32-based control board which was side mounted and connected to the motors. The control code was relatively simple, since it only involved looped movements back and forth. For fast configurable prototyping, I setup a webserver on it which would allow me to run machining passes from my laptop.

<br><br>

After creating the jig and control interface, I went through two weeks of material and pass refinement trying to get the best wax and pass combinations to create the tape. I ended up settling on a 50-50 beeswax and paraffin wax mixture because it had good structural rigidity but could still be sculpted by a razorblade with relative ease. I used a Dragon Skin silicone for the material itself. When machining the wax, I first heated it up and did several smoothing passes, where the blade shaved off microns at a time until the surface of the block was fully flat, then went in with several thousand incuts.

<br><br>

I was actually able to get some pretty nice results as far as accuracy and precision go, with features small enough to be barely visible with a macro lens (~50 microns). That said, the main issue with the outputs was consistency. This type of material needs a consistent pattern throughout, which simply isn't possible with cheap motors and 3D printed parts. One of the main issues was the open-loop control of the motors, which almost always resulted in upward drift as the small resistance from sculpting the wax caused a few missed steps. The same thing happened on the horizontal axis, and these both compounded with the bending of the 3D printed parts for even less consistency.

<br><br>

By the time I had done thorough enough testing and figured out the issues, winter-break was up and so was my time to  build. I hope to come back to this one day with a proper CNC for a full-metal jig, closed-loop motor controls, linear rails, and better measurement and testing capabilities.