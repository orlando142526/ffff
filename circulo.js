function degradado() {
    var grad = ctx.createLinearGradient(0, 0, 800, 0);
    grad.addColorStop( 0, color='blue');
    grad.addColorStop(1, color='white');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 600);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.rect(0,0,800,600);
    ctx.stroke();
}

function Linea() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.moveTo(0,0);
    ctx.lineTo(800,600);
    ctx.stroke();
}

function Circulo() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'transparent';
    ctx.arc(400, 300, 150, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function bandera() {
    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'transparent';
    ctx.arc(200, 200, 75, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'transparent';
    ctx.arc(290, 275, 75, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'transparent';
    ctx.arc(200, 200, 75, 130, 20);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'transparent';
    ctx.arc(380, 200, 75, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'transparent';
    ctx.arc(470, 275, 75, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'transparent';
    ctx.arc(560, 200, 75, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'transparent';
    ctx.arc(470, 275, 75, 125, 20);
    ctx.fill();
    ctx.stroke();
}

function prohibido() {
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'red';
    ctx.arc(380, 500, 100, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 40;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.rect(320,490, 120, 15);
    ctx.stroke();
}