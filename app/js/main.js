// create a wrapper around native canvas element (with id="c")

var currCanvas = document.getElementById('c');
var currCtx = currCanvas.getContext('2d');
var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
currCanvas.style.position = "fixed";
currCanvas.setAttribute("width", viewportWidth);
currCanvas.setAttribute("height", viewportHeight);
currCanvas.style.top = 0;
currCanvas.style.left = 0;

var canvas = new fabric.Canvas('c');

fabric.Image.fromURL('images/assets/toast.jpg', function(img) {
    img.scale(0.5);
    canvas.add(img);
});
