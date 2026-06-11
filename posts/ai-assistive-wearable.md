Title: Novel Edge-AI Wearable
Description: Developing a new class of edge AI for an assitive wearable.
Image: assistive_wearable.JPEG
Tags: Project
Date: December 2024
Content:

As low power MCU's get faster and cheaper, running AI on the edge has become easier than ever. A $5 microcontroller can easily crunch through simple networks, vastly expanding what's possible in DIY products. I saw a few gesture detection wearables online and wanted to try my hand at it, and invented a new class of edge AI detectors in the process. This post won't be a super deep dive, as the full details can be seen on <a href="https://hackaday.io/project/197762">Hackaday</a>.


<br><br>

The hardware itself is extremely simple, using an nRF52840-based board for the computation and a cheap BMI-160 6 axis IMU. The housing was designed in Onshape and 3D printed in less than 2 hours.

<br><br>

The real fun is in the algorithm itself. It's a simple fix to an issue that plagues many gesture-detection platforms: only having a set number of outputs. Standard neural networks have fixed-dimension inputs and outputs, meaning (if your detection is an output), you're limited to a fixed number fo gestures. Further, you need to train specifically on those gestures, and they can't be easily reconfigured.

<br><br>

To sidestep this issue, I used a middle layer to detect gestures. Rather than a classification model, I trained an autoencoder, which creates a latent space with the special property that geometric similarity ≈ meaning similarity. This means that similar gestures will be close in space, allowing much easier detection. By running gestures through the latent space, we turn an arbitrary gesture detection task into a statistical comparison, where I could run a 14-dimensional Z-test on 5-10 sample points to determine if something as a specific gesture. This was not only fast, but extremely accurate, and the device is able to accurately detect over 50 unique gestures (probably more, but I didn't test beyond 50).

<br><br>

Using a latent space also let me forego manual data collection altogether. This is possible because we only need the neural network to learn how to differentiate between gestures, not to detect specific ones. This means we can train the model on entirely-fake gestures, as long as those gestures are different enough to map out the latent space. So rather than waving my hand around like an idiot for hours, I wrote a python program to generate random gestures, and trained it on that.

<br><br>

<div class="post-image" style="background-image: url('/media/sample_gestures.png')"></div>

<br><br>

Since there was enough variation for most common shapes, human gestures came for free. This meant the system I had created enabled on-the-fly configurable gesture detection with zero human training required. 

<br><br>

One fun quirk of this system is that, given the decoder, one can then do geometric operations on abstract data. For example, you can encode the drawing of a star 10-20 times, then average the embedding space. Upon decoding, it's also a star.

<br><br>

<div class="post-image" style="background-image: url('/media/average_shapes.png'); height: 250px;"></div>

<br><br>

This algorithm is to-this-day one of my favorite, and such a general catch-all solution across lightweight and edge-AI models that I'm surprised it isn't talked about more.