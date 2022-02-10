const desenhar = () => {

    const canvas = document.querySelector('#canvas');

    const canvasCTX = canvas.getContext('2d');

    canvasCTX.fillStyle = '#009c3b';
    canvasCTX.fillRect(0, 0, 300, 200);

    canvasCTX.beginPath();
    canvasCTX.fillStyle = '#ffdf00';
    canvasCTX.moveTo(150, 5);
    canvasCTX.lineTo(25, 75);
    canvasCTX.lineTo(275, 75);
    canvasCTX.fill();

    canvasCTX.beginPath();
    canvasCTX.fillStyle = '#ffdf00';
    canvasCTX.moveTo(150, 145);
    canvasCTX.lineTo(25, 75);
    canvasCTX.lineTo(275, 75);
    canvasCTX.fill();

    canvasCTX.beginPath();
    canvasCTX.fillStyle = '#002777';
    canvasCTX.arc(150, 75, 40, 0, 2 * 3.14);
    canvasCTX.fill();
};

document.onload = desenhar();