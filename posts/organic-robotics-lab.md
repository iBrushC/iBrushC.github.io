Title: Building a Fish at the Organic Robotics Lab
Description: What I learned about engineering at Cornell's top bioinspired research lab
Image: organic_robotics_lab.JPEG
Tags: Research
Date: January 2026
Content:

After transferring to Cornell in the fall, I got the amazing change to join the Organic Robotics Lab (ORL) in the Spring 2026 semester. I'd been interested in bioinspired and biomimetic engineering for a bit now (see micromachining project) so getting to work at a top lab has been a pleasure. I was familiar with the ORL since long before getting to Cornell (<a  href="https://news.cornell.edu/stories/2024/08/biohybrid-robots-controlled-electrical-impulses-mushrooms">a personal favorite out of the lab</a>) so this has also been fairly full circle for me.

<br><br>

I was brought on to replace a graduate student on the design of what is now called PSIB Fish (or just the robotic fish). It expands on previous works like MIT's SoFi, however aims to use polysulfide/iodide redox flow batteries as a primary power source. These specialize in constant small outputs over long periods of time, which means to drive the power-hungry motors we use a second-stage LiPo which acts as the main interface. LiPo gets gradually charged by the PSIB, motors use the LiPo.

<br><br>

My main responsibilities were to build all the circuitry, control logic, interfacing, and logging, aka all the electronics and software. As part of my first semester, I built a RP2350-based control board, a custom charge PCB, several types of motor control schemas (via experimenting with three types of motors), as well as the embedded software and remote control software. 

<br><br>

The exact technical specs of everything done is unimportant, what I learned more about was getting things done fast and efficiently. This had relatively strict goals as far as efficiency, final distance, swim speed, etc. and trying out enough prototypes means rapid development everywhere possible. Buy everything you can, make and assemble the rest. Removing complexity, modes of failure, and any time-wasting procedures is the most important thing when prototyping or developing anything for that matter. This first semester was a great research introduction to those ideals which I plan to use in a lot of other ways in the future