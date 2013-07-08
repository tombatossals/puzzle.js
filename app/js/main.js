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
canvas.hoverCursor = 'pointer';

fabric.Image.fromURL('images/assets/toast.png', function(img) {
    canvas.add(img);
    img.scaleToWidth(200);
    canvas.centerObjectH(img).centerObjectV(img);
    img.setCoords();
    canvas.renderAll();
});

function animate(e, dir) {
    if (e.target) {
        fabric.util.animate({
            startValue: e.target.get('angle'),
            endValue: e.target.get('angle') + (dir ? 10 : -10),
            duration: 100,
            onChange: function(value) {
                e.target.setAngle(value);
                canvas.renderAll();
            },
            onComplete: function() {
                e.target.setCoords();
            }
        });
        fabric.util.animate({
            startValue: e.target.get('scaleX'),
            endValue: e.target.get('scaleX') + (dir ? 0.2 : -0.2),
            duration: 100,
            onChange: function(value) {
                e.target.scale(value);
                canvas.renderAll();
            },
            onComplete: function() {
                e.target.setCoords();
            }
        });
    }
}

canvas.on({
    'mouse:down': function(e) {
        if (e.target) {
            animate(e, 1);
            e.target.opacity = 0.5;
            canvas.renderAll();
        }
    },
    'mouse:up': function(e) {
        if (e.target) {
            animate(e, 0);
            e.target.opacity = 1;
            canvas.renderAll();
        }
    },
    'object:moved': function(e) {
        e.target.opacity = 0.5;
    },
    'object:modified': function(e) {
        e.target.opacity = 1;
    }
});
