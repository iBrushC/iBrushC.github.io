Title: Building a Digicam from Scratch
Description: A custom e-paper camera to mimic developing film
Image: camera.jpg
Tags: Project
Date: October 2024
Content:
This was just a fun project I threw together in a few days. A while back when I was messing around with e-paper displays, I noticed the black and white refresh flashing of the screen was similar to how polaroid instant film develops. I wanted to make a camera out of it, so I cobbled together an e-paper shield, camera module, and raspberry pi, then created a basic interface. A charger, power-switch, and shutter button were later added to give it the real camera feeling, but electronically this was a pretty plug-and-play project. 

<br><br>

<div class="post-image" style="background-image: url('/media/camera_back.jpg')"></div>

<br><br>

This was one of the first times I've ever designed and 3D printed something with a proper CAD tool, I normally design to relative specs with Blender then scale up but I wanted to step out of my comfort zone for this one. Outside of having to fasten a few pieces with hot glue, the design worked well and I had a pretty good time learning Onshape. The fundamentals of 3D carry over fairly well so the design only took me a day or so.

<br><br>

The overall goal was to make a camera that felt more like film, since you watch the photos develop in front of you, and to that end it worked pretty well. It uses a custom dithering algorithm to convert the images to the black-and-white e-paper display, and there is some delayed gratification in taking pictures with it. The biggest downside is the full-sized Raspberry Pi 3B inside (what I had on hand), which makes it both clunky and inefficient, with the power only lasting an hour or so.