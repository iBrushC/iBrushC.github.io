Title: A Realtime Fluid-sim Fighting Game 
Description: Letting players fight each other with fully simulated realistic fire.
Image: fluid_game.png
Tags: Project
Date: August 2025
Content:

<a href="https://github.com/iBrushC/navier-stoked">Navier Stoked</a> is a silly final project I threw together in two weeks while I was studying abroad at Nagoya University. It's a Super-Smash-based fighting game where players fight with realtime simulated fire rather than generic attacks. Based on Firebending. I had signed up for an introductory computer science class which was supposed to teach the basics of C, a language I know well but there weren't many classes I could take for credit. On the first day the instructor pulled three people aside and basically said "we looked at your Githubs and you guys don't need to be here", and we were told to not show up to lecture and instead do a semester-long project of our choosing (to "motivate the other students to study further" or something).

<br><br>

It was probably the best-case scenario for me because I'd had this project on my mind for a bit anyway, and now I had an excuse for doing it. Want to mention that the other two ended up doing cool projects as well, one made a retro arcade (to varying success) and the other made an esolang of C based on the Japanese language syntax.

<br><br>

This was in-principle quite simple, but in practice a bit of a pain, as most shader-based projects are. Before diving into the full game, I wrote an basic CPU-based fluid simulation first to learn the basics of translating the raw Navier-Stokes equations into a functional algorithm. I opted for a staggered-grid Eulerian approach for the simple fact that (barring use of compute shaders), this would translate easiest to the GPU.

<br><br>
<div class="post-image" style="background-image: url('/media/basic_fluid_sim.png')"></div>
<br><br>

After getting the CPU-version mostly functional, I moved on to the full GPU-implementation with about two weeks before it was due. This wasn't because it had taken 8+ weeks for the CPU version, but because I procrastinated heavily. I used Raylib for rendering and Physac 2D for physics. The full technical implementation is on the Github, but the general process was done with swapping and drawing into different render buffers. Swapping render buffers allowed for convection, which otherwise wouldn't be possible because of the parallel nature in which shaders behave. 

<br><br>

Player and environment interaction with the fluid was a fun hack as well, where I used a coordinate conversion between the world and render buffers, and could draw barriers and fire directly into the render buffer based on that. As a side-effect, attacks were limited in intensity since Raylib didn't support drawing non-uint8 types into buffers. Most of the time spent on the implementation wasn't on the math itself, but just figuring out that Raylib automatically had nearest-neighbor sampling enabled, meaning most of the sampling calculations were completely useless because they weren't actually interpolating anything.

<br><br>

I also spent a surprising amount of time refining the game feel, not because I felt I needed it for the grade but because it turned out to be genuinely fun and I wanted to make it even better. On the last day of class, everyone brought in their projects and we spent ~30 minutes playing mine alone, which even the professors found fun. 