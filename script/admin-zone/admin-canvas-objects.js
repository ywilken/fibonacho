// When document is loaded

// window.addEventListener('resize', resizeCanvas);

// function resizeCanvas() {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// }

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas-2');

    // Resize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // We have to define the context (3d or 2d)
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = `rgb(100, 100, 255)`;
    ctx.fillRect(100,100,90,90);

    let x = 200;
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        // console.log('Hello')
        ctx.beginPath();
        ctx.fillStyle = `rgb(100, 100, 255)`;
        ctx.fillRect(x,100,90,90);

        x +=1;
    }
    animate();

    // for(let i=0; i<1000; i++) {
    //     const x = Math.random() * window.innerWidth;
    //     const y = Math.random() * window.innerHeight;
    //     const colorR = Math.random() * 255;
    //     const colorG = Math.random() * 255;
    //     const colorB = Math.random() * 255;

    //     ctx.beginPath();
    //     ctx.fillStyle = `rgb(${colorR}, ${colorG}, ${colorB})`;
    //     ctx.fillRect(x,y,5,10);
    // }

    // Line
});

// window.addEventlistener('resize', () => {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// });