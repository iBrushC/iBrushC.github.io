const GRID_X = 12;
const GRID_Z = 12;
const PARTICLE_SIZE = 2;

const FOG_DISTANCE = 2;

const PARTICLE_COLOR = '255, 132, 84';
const BACKGROUND_COLOR = '25, 24, 22';

function lorenz() {
    // Setup
    const canvas = document.getElementById('retrogrid');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create points
    const points = []

    for (let x = 0; x < GRID_X; x++) {
        for (let z = 0; z < GRID_Z; z++) {
            points.push({
                x: x / GRID_X,
                y: Math.random() / 2,
                z: z / GRID_Z,
            })
        }
    }

    const pointProjections = [];
    for (let i = 0; i < GRID_X * GRID_Z; i++) {
        pointProjections.push({
            x: 0,
            y: 0,
        })
    }

    let mousePos = {
        x: 0,
        y: 0,
    };

    // Mouse callback
    onmousemove = (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
    }
    // Resize callback
    const setSize = () => {
        canvas.height = innerHeight;
        canvas.width = innerWidth;
    }
    addEventListener("resize", () => setSize());

    const camera = {
        x: 0,
        y: 0.5,
        z: -1,
    }

    const projectWithCamera = (camera, screen, point) => {
        // Initial projection
        let projectedPoint = {
            x: camera.x - point.x,
            y: camera.y - point.y,
            z: camera.z - point.z,
        };

        projectedPoint.x /= -projectedPoint.z;
        projectedPoint.y /= -projectedPoint.z;

        let x = (projectedPoint.x + 1) / 2;
        let y = (projectedPoint.y + 1) / 2;
        x *= screen.width;
        y *= (screen.height * screen.width) / screen.height;
        
        // Need to find a better way to do this
        if (screen.width / screen.height > 1) {
            y -= (screen.height * screen.width) / (screen.height * 2);
        }
        return {x: x, y: y};
    }

    let f = 0;
    
    // Animation Loop
    window.requestAnimationFrame(function update() {
        f = (f + 1) % 31415;
        const scaledF = f / 100;

        // Update width and height according to window
        const width = canvas.width;
        const height = canvas.height;
        const screenMag = Math.sqrt(width**2 + height**2);

        // Clear screen
        context.fillStyle = `rgba(${BACKGROUND_COLOR}, 1)`;
        context.fillRect(0, 0, width, height);

        context.lineWidth = PARTICLE_SIZE;

        // Projections and base
        const screen = {
            width: width,
            height: height,
        }
        const baseProjection = projectWithCamera(camera, screen, {x: 0, y: -0.55, z: 0});

        for (let p = 0; p < points.length; p++) {
            const point = {...points[p]};

            // Rotation
            const originX = points[p].x - 0.5;
            const originZ = points[p].z - 0.5;
            point.x = originX * Math.cos(scaledF / 3) + originZ * Math.sin(scaledF / 3);
            point.z = originX * -Math.sin(scaledF / 3) + originZ * Math.cos(scaledF / 3);

            point.y *= Math.sin((point.y * 20) + (scaledF)) / 10;

            // Initial projection
            const initialProjection = projectWithCamera(camera, screen, point);

            // Interaction with mouse
            const mouseDistance = Math.sqrt(
                (mousePos.x - initialProjection.x)**2 +
                (mousePos.y - initialProjection.y)**2
            );
            const yOffset = 0.2 / (1 + Math.E**(20 * mouseDistance / screenMag));
            point.y += yOffset;

            // Second projection so mouse can have an effect
            const projectedPoint = projectWithCamera(camera, screen, point);

            // Visuals
            const opacity = 0.3 + yOffset * 50;
            
            
            // Storing projections of each point
            pointProjections[p].x = projectedPoint.x;
            pointProjections[p].y = projectedPoint.y;
            
            context.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
            context.fillStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
            // Horizontal backwards line
            if (p % GRID_Z) {
                context.beginPath();
                context.moveTo(pointProjections[p - 1].x, pointProjections[p - 1].y);
                context.lineTo(projectedPoint.x, projectedPoint.y);
                context.stroke();

                // Diagonal triangulation line
                if (p - GRID_Z - 1 >= 0) {
                    context.beginPath();
                    context.moveTo(pointProjections[p - GRID_Z - 1].x, pointProjections[p - GRID_Z - 1].y);
                    context.lineTo(projectedPoint.x, projectedPoint.y);
                    context.stroke();
                }
            }
            // Vertical line
            if (p - GRID_Z >= 0) {
                context.beginPath();
                context.moveTo(pointProjections[p - GRID_Z].x, pointProjections[p - GRID_Z].y);
                context.lineTo(projectedPoint.x, projectedPoint.y);
                context.stroke();
            }
            
            // Line to origin
            context.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity / 15})`;
            context.beginPath();
            context.moveTo(projectedPoint.x, projectedPoint.y);
            context.lineTo(baseProjection.x, baseProjection.y);
            context.stroke();
        }
        
        camera.y = 0.5 + Math.sin(scaledF) / 100;
        window.requestAnimationFrame(update);
    });
}

lorenz();