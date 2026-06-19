Title: Developing a WebGPU Renderer for VTK.js
Description: Adding physically-based rendering to a popular scientific visualization platform.
Image: kitware_vtkjs.png
Tags: Internship
Date: August 2022
Content:
As my first ever internship, I implemented physically-based rendering into VTK.js (a web port of the popular software Visualization Toolkit, or VTK). I also did it on WebGPU, which at the time was a very new framework with growing documentation. I ended up building a two-step system which did pre-rendering work on materials and environment textures first then the main rendering loop. The final implementation used fun tricks and optimizations to work in realtime on the web. At the end, I wrote a <a href="https://www.kitware.com/introducing-physically-based-rendering-to-vtk-js-webgpu/">public blog article</a>.