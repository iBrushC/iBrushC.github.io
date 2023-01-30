const MAX_PARTICLES = 500;
const PARTICLE_DENSITY = 0.0001;
const PARTICLE_SIZE = 0.8;
const PARTICLE_SPEED = 1.0;
const CONNECT_DISTANCE = 100;

const PARTICLE_COLOR = '255, 132, 84';
const BACKGROUND_COLOR = '25, 24, 22';

function plexus() {
    // Setup
    const canvas = document.getElementById('plexus');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create dots (initial is for mouse pointer)
    const dots = [{
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
    }];
    for(let i = 0; i < MAX_PARTICLES; i++) {

        let vx = Math.random() * 2 - 1;
        let vy = Math.random() * 2 - 1;
        vx *= PARTICLE_SPEED;
        vy *= PARTICLE_SPEED;

        dots.push({
            x: Math.random() * window.screen.width,
            y: Math.random() * window.screen.height,
            vx: vx,
            vy: vy,
        })
    }

    // Mouse callback
    onmousemove = (e) => {
        dots[0].x = e.clientX;
        dots[0].y = e.clientY;
    }

    // Smart connecting helper functions
    const dotDistance = (dot1, dot2) => {
        return Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) +
            Math.pow(dot1.y - dot2.y, 2)
        );
    }

    const connectDots = (dot1, dot2, opacity) => {
        context.beginPath();
        context.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
        context.moveTo(dot1.x, dot1.y);
        context.lineTo(dot2.x, dot2.y);
        context.stroke();
    }

    const checkConnections = (dot1, x, y, offsetX, offsetY, partition) => {
        for (let i = 0; i < partition[x + offsetX][y + offsetY].length; i++) {
            const dot2 = partition[x + offsetX][y + offsetY][i];
            const particleDistance = dotDistance(dot1, dot2);

            if (particleDistance < CONNECT_DISTANCE) {
                const opacity = (CONNECT_DISTANCE - particleDistance) / CONNECT_DISTANCE; 
                connectDots(dot1, dot2, opacity);
            }
        }
    }
    
    // Animation Loop
    window.requestAnimationFrame(function update() {
        // Update width and height according to window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const width = canvas.width;
        const height = canvas.height;

        // Clear screen
        context.fillStyle = `rgba(${BACKGROUND_COLOR}, 255)`;
        context.fillRect(0, 0, width, height);

        // Create partitioning array
        const partitionWidth = Math.ceil(window.screen.width / CONNECT_DISTANCE);
        const partitionHeight = Math.ceil(window.screen.width / CONNECT_DISTANCE);
        const partition = [...Array(partitionWidth + 2)].map(e => Array.from({length: partitionHeight + 2}, e => []));
        let xMax = 0;
        let yMax = 0;
        let xMin = partitionWidth;
        let yMin = partitionHeight;

        
        // const debug = () => {
        //     for (let x = 1; x < partitionWidth; x++) {
        //         context.beginPath();
        //         context.strokeStyle = `rgba(255, 0, 0, 0.5)`;
        //         context.moveTo(x * CONNECT_DISTANCE, 0);
        //         context.lineTo(x * CONNECT_DISTANCE, height);
        //         context.stroke();
        //     }
        //     for (let y = 1; y < partitionHeight; y++) {
        //         context.beginPath();
        //         context.strokeStyle = `rgba(255, 0, 0, 0.5)`;
        //         context.moveTo(0, y * CONNECT_DISTANCE);
        //         context.lineTo(width, y * CONNECT_DISTANCE);
        //         context.stroke();
        //     }
        // }
        
        // debug();

        // Style
        context.lineWidth = PARTICLE_SIZE;
        context.strokeStyle = `rgba(${PARTICLE_COLOR}, 255)`;
        
        // Making sure there aren't too many particles drawn too close
        let dotLength = dots.length;
        const screenParticles = width * height * PARTICLE_DENSITY;
        if (screenParticles < MAX_PARTICLES) dotLength = Number(screenParticles);

        // Having the speed adjusted by screen size
        const screenSpeed = (width * height) / (1920 * 1080);

        // Draw dots and spit into cells
        for(let i = 0; i < dotLength; i++) {
            context.beginPath();
            context.moveTo(dots[i].x, dots[i].y);
            context.lineTo(dots[i].x+1, dots[i].y+1);
            context.stroke();

            // Update position
            dots[i].x += dots[i].vx * screenSpeed;
            dots[i].y += dots[i].vy * screenSpeed;

            // Out of bounds resetting
            if (dots[i].x > width) dots[i].x = 0;
            if (dots[i].y > height) dots[i].y = 0;
            if (dots[i].x < 0) dots[i].x = width;
            if (dots[i].y < 0) dots[i].y = height;

            // Put into cell
            const ix = 1 + Math.floor(dots[i].x / CONNECT_DISTANCE);
            const iy = 1 + Math.floor(dots[i].y / CONNECT_DISTANCE);
            partition[ix][iy].push(dots[i]);

            // Update maxes and mins (better performance if clustering)
            if (ix > xMax) xMax = ix;
            if (iy > yMax) yMax = iy;
            if (ix < xMin) xMin = ix;
            if (iy < yMin) yMin = iy;
        }     

        for (let x = xMin; x <= xMax; x++) {
            for (let y = yMin; y <= yMax; y++) {
                for (let p = 0; p < partition[x][y].length; p++) {
                    const dot1 = partition[x][y][p];
                    // Check connections with all adjacent cells
                    // For larger screens this has a performance speedup of
                    // Roughly 200% compared to the niave method
                    checkConnections(dot1, x, y, 0, 0, partition);
                    checkConnections(dot1, x, y, -1, 0, partition);
                    checkConnections(dot1, x, y, 1, 0, partition);
                    checkConnections(dot1, x, y, 0, -1, partition);
                    checkConnections(dot1, x, y, 0, 1, partition);
                    checkConnections(dot1, x, y, -1, 1, partition);
                    checkConnections(dot1, x, y, 1, 1, partition);
                    checkConnections(dot1, x, y, -1, -1, partition);
                    checkConnections(dot1, x, y, 1, -1, partition);
                }
            }
        }

        window.requestAnimationFrame(update);
    });
}

plexus();