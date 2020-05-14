// let canvas = document.querySelector('#canvas'); 
const html = document.documentElement;
var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
// When document is loaded

// window.addEventListener('resize', resizeCanvas);

// function resizeCanvas() {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// }

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    // We have to define the context (3d or 2d)
    const context = canvas.getContext('2d');

    // Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Here we created a rectangle (Note: colors have to be defined before)
    // context.fillStyle = "yellow";
    // context.lineWidth = 5;
    // context.fillRect(50, 50, 400, 400);
    

    // Variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        context.beginPath();
    }


    function drawOnCanvas(e) {
        if(!painting) return;
        context.strokeStyle = 'rgba(255,0,0)';
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowBlur = 2;
        context.shadowColor = 'rgba(0, 0, 0, 0.5)';
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    // Eventlisteners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', drawOnCanvas);
    body.appendChild(canvas);
});

// window.addEventlistener('resize', () => {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// });