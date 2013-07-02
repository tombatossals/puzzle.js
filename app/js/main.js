var ctx = Sketch.create({
    container: document.getElementById( 'canvas' ),
    autoclear: false,
    fullscreen: true,
    type: Sketch.CANVAS,
    globals: true,
    autostart: true,
    autopause: true,
    interval: 1
});


ctx.draw = function() {
    console.log(ctx.height, ctx.width);
    ctx.beginPath();
    ctx.arc( random( ctx.width ), random( ctx.height ), 10, 0, TWO_PI );
    ctx.fill();
}
