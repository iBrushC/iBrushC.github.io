Title: Building An Arbitrary Fractal Renderer
Description: Render and explore any complex fractal
Image: fractal_website.png
Tags: Project
Date: September 2023
Content:

Mess around with it <a href="https://ibrushc.github.io/fractal-desmos/">here</a>. 

<br><br>

A while back I got interested in complex numbers, their properties, and transformations, and naturally ended up finding and becoming fascinated with fractals like the mandelbrot set. I found them visually striking and interesting how space transformations could be visualized as self repeating shapes, so I wanted to play around with them more. To my dismay, I found that nobody had made a free tool/website that could quickly render arbitrary fractals, so I decided to make one myself.

<br><br>

There were two primary complexities in designing this system, those being the math parser and the renderer. 

<br><br>

A text-to-executable math parser is generally difficult to create because it requires parsing complex, sometimes poorly defined rules into an executable expression. By poorly defined rules, take the following example:

<br><br>

5^3x + sin5x

<br><br>

Which can be reasonably interpreted as

<br><br>

(5^3)x + sin(5x) <br>
5^(3x) + sin(5x) <br>
5^(3x) + sin(5)*x <br>
(5^3)x + s*i*n*5*x 

<br><br>

For humans, most people could reasonably lean towards the first or the second one, but putting that into code turns out to be more difficult than might be initially imagined. The final system I created uses a modified version Shunting Yard Algorithm which does a pre-processing step for functions. This converts the expession into Reverse Polish Notation (RPN), which doesn't make sense for humans but makes it easy to compute expressions. Everything inside is stored as strings as well, which makes variable substitutions easy.

<br><br>

In a normal Shunting Yard Algorithm, execution is fairly easy since you can just step through the RPN in a loop. Initially this is what I did, going through each pixel one-by-one in a canvas and creating the fractal with that. A few other websites that do this also exist. However this is slow and inefficient, and does not allow for realtime interactivity. The second difficult part is not just rendering the fractal, it's doing it quickly.

<br><br>

To run it fast, I used shaders. The entire viewing area of the calculator is a single WebGL quad with a shader on it. The shader has a handwritten complex math "library" which uses the vec2 type as u + v*i. Initially, I attempted to use a loop to parse the instructions in the shader as well, passing in the expression via a buffer, however this was needlessly complicated and inefficient. Instead, upon updating the fractal, the expressions are parsed and stepped through, dynamically compiling them into a new shader which can run blazingly fast.

<br><br>

This was a fun project and I learned a lot about efficiency and algorithms.