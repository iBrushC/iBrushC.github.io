Title: Creating an Abstract Black Hole Renderer
Description: Rendering (somewhat) physically accurate donut-shaped black holes.
Image: black_hole.png
Tags: Project
Date: May 2023
Content:
I watched interstellar recently and was really impressed by the black hole seen, so I looked up what technology they used to create it. Turns out a theoretical physicist and an entire VFX house worked over months to create it, leading to a stunning final product. Later on, I saw Everything Everywhere All At Once, and thought:


<br><br>

<i>"If you really did put everything on a donut, it would probably be pretty heavy and turn into a black hole. But what would it look like if it stayed a donut?"</i>

<br><br>

The main challenge with doing this is that relativity theory does not include concise equations for what would happen if a donut weighed as much as 50 suns. Since we can't map it out accurately, we make a quick approximation that each light ray behaves like a particle, and thus is affected by gravity in a Newtonian way. This is not at all how light works, but it is close enough for cool visuals

<br><br>

In Interstellar, they used ray-tracing which steps rays along thousands to millions of times while adjusting trajectories for the curved space around them. To get something that runs fast, millions of times will not cut it. Instead of ray tracing, we use ray marching, which is more efficient but requires all shapes to be defined mathematically as signed distance fields.

<br><br>

To spare details, ray tracing has fixed step sizes. You inch along until you hit something. Ray marching knows how far away the nearest object is, so is able to always take the longest possible step without running into something. The final algorithm uses the speed of light to determine the time required for each step, then applying gravity based on that to change the direction of the next ray. It's a crude approximation, but it works well-enough to mimic many real effects of black holes and runs extremely fast.

<br><br>

<iframe width="100%" height="600" src="//jsfiddle.net/iBrushC/4fdwnqjx/764/embedded/result/" frameborder="0" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<br><br>

This is a 2D visualization of how the light rays bend around a series of shapes. You can point your mouse to change the direction and use WASD to move the dot around. This same principle was applied in 3D to get the image shown in the cover.