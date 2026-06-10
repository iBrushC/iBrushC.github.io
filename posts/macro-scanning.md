Title: Automating Macro-Scale Gaussian Splats
Description: A jig to create gaussian splats on the millimeter scale
Image: orange_peel.png
Tags: Project
Date: December 2025
Content:

Over the fall 2026 semester, I got to spend some time documenting specimens for the Cornell University Insect Collection (CUIC). I was amazed at all the detail in each tiny bug, and how much was lost with flat photographs. As a 3D artist, I wondered how possible it would be to scan objects of that scale in 3D.

<br><br>

There are a few fun quirks about this problem, starting with the specimens themselves. Insects routinely have micrometer-sized features, reflections, and iridescence, all things that make them a nightmare for mesh-based scanning like photogrammetry. Existing mesh-based pipelines are just not suited for the complexity of insects without modifying (e.g. primer-coating) them or an extraordinary amount of effort.

<br><br>

The second difficulty is the mode of scanning, since macro photographs require taking many (typically between 20-500) photographs of the subject, then stitching it together. For most types of scanning, a good result requires 100-300 angles. Some basic math shows that at an optimistic ~1s per photo, we're looking at 33 minutes best case and 41 hours worst case. To enable this kind of scanning without condemning myself to hours of waiting, I wanted to build an automated rig to perform the scanning.

<br><br>

The design is fairly simple, just rotating a central object along two axes (since a well positioned camera won't get new info from a third axis). This would be classified as a type of spherical manipulator, which I was surprised to find there weren't already a wealth of options online to select from. I ended up building my design as a sort-of gimbal mechanism using 28BYJ-48 stepper motors. I experimented with several types of servos, but it turns out most angle ratings on servos (especially 180 degree claims) are just wrong by about 10-40 degrees, resulting in incomplete scans. The 28BYJ-48s were functional, but with a higher budget I would have used something with proper encoders and better positioning accuracy, since the ones I used had quite a bit of play.

<br><br>

<div class="post-image" style="background-image: url('/media/scanner_contraption.JPEG')"></div>

<br><br>

In the end, it produced decent results for a few days of design and assembly. Despite the play and lack of precision in the mechanism, it was reliably able to trace capped spherical paths with delta angles good enough for the gaussian splatting solvers (COLMAP, GLOMAP) to reconstruct the majority of the angles and produce a fairly good reconstruction. More than anything, it saved time and consistency, which I'm eager to try out at the actual insect collection once I can find some funding to do so.

<br><br>

In the future, I'm hoping to build this to the precision where COLMAP (which is used to solve for camera angles) isn't needed, since in theory we should be able to get the exact positions without it. I tried this with the existing scanner, but this is where the motor play and lack of absolute encoding came back to bite, since as it turns out these camera mappings need to be near-pixel-perfect to work at all. Slight ~0.5 degree angle changes resulted in each camera angle simply projecting past the rest onto a flat plane behind.