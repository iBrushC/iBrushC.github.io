const MAX_PARTICLES = 2500;
const PARTICLE_DENSITY = 0.0005;
const PARTICLE_SIZE = 1;
const DELTA = 0.005;

const PARTICLE_COLOR = '255, 132, 84';
const BACKGROUND_COLOR = '25, 24, 22';

function lorenz() {
    // Setup
    const canvas = document.getElementById('lorenz');
    const context = canvas.getContext('2d');
    context.globalCompositeOperation = 'lighter';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create points
    const points = []

    for (let i = 0; i < MAX_PARTICLES; i++) {
        points.push({
            x: (Math.random() * 45) - 23,
            y: Math.random() * 15,
            z: (Math.random() * 55),
            vx: 0,
            vy: 0,
            vz: 0,
        })
    }

    let mouseData = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
    };

    // Mouse callback
    onmousemove = (e) => {
        mouseData.x = e.clientX;
        mouseData.y = e.clientY;
        mouseData.vx = e.movementX;
        mouseData.vy = e.movementY;
    }
    // Resize callback
    const setSize = () => {
        canvas.height = innerHeight;
        canvas.width = innerWidth;
    }
    addEventListener("resize", () => setSize());

    const updateLorenzSystem = (point, delta, steps) => {
        const stepped_delta = delta / steps;
        p = 28;
        o = 10;
        B = 8 / 3;

        const dpoint = {
            x: 0, 
            y: 0, 
            z: 0
        };
        for (let i = 0; i < steps; i++) {
            dpoint.x += 10 * (point.y - point.x);
            dpoint.y += point.x * (p - point.z) - point.y;
            dpoint.z += point.x * point.y - B * point.z;
        }

        dpoint.x *= stepped_delta;
        dpoint.y *= stepped_delta;
        dpoint.z *= stepped_delta;

        point.x += dpoint.x + point.vx;
        point.y += dpoint.y + point.vy;
        point.z += dpoint.z + point.vz;

        return dpoint;
    }

    context.lineWidth = PARTICLE_SIZE;
    context.strokeStyle = `rgba(${PARTICLE_COLOR}, 255)`;
    
    // Animation Loop
    window.requestAnimationFrame(function update() {
        // Update width and height according to window
        const width = canvas.width;
        const height = canvas.height;
        const screenMag = Math.sqrt(width**2 + height**2)

        // Clear screen
        context.fillStyle = `rgba(${BACKGROUND_COLOR}, 1)`;
        context.fillRect(0, 0, width, height);
        
        for (let i = 0; i < points.length; i++) {
            const point = points[i]
            
            point.vx *= 0.99;
            point.vy *= 0.99;
            point.vz *= 0.99;

            const velocity = updateLorenzSystem(point, DELTA, 10);
            velocity.x *= (width / 50);
            velocity.z *= (height / 75);

            // Stopping particles from flying off into infinity
            if (Math.abs(velocity.x + velocity.y + velocity.z) > 1000) {
                point.x = Math.random();
                point.y = Math.random();
                point.z = Math.random();
            }

            let x = point.x;
            let y = -point.z;

            x *= width / 50;
            y *= height / 75;

            x += width / 2;
            y += 8 * height / 9;

            const mouseDistance = Math.sqrt(
                (mouseData.x - x)**2 +
                (mouseData.y - y)**2
            );
            const intensity = 7 / (1 + Math.E**(30 * mouseDistance / screenMag));

            point.vx += intensity * mouseData.vx / width;
            point.vz += -intensity * mouseData.vy / height;

            // Drawing
            context.lineWidth = 3;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - 6, y - 6);
            context.stroke();
        }

        mouseData.vx = 0;
        mouseData.vy = 0;

        window.requestAnimationFrame(update);
    });
}

lorenz();