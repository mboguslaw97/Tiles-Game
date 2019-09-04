var canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

var mouse = {
	x: 0,
	y: 0,
	down: false,
	clicked: false
};

document.addEventListener("mousemove", function(e){
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
});

document.addEventListener("mousedown", function(e){
	mouse.down = true;
});

document.addEventListener("mouseup", function(e){
	mouse.down = false;
	mouse.clicked = true;
});


var FPS = 60;
var Colors = {
	'BLACK': 'black',
	'DARK_GRAY': '#333',
	'GRAY': 'gray',
	'WHITE': 'white'
}
var FONT = 'Arial';

LeftNav.WIDTH = canvas.width * 1/4;
LeftNav.HEIGHT = canvas.height;

Button.WIDTH = 120;
Button.HEIGHT = 35;

Scene.WIDTH = canvas.width - LeftNav.WIDTH;
Scene.HEIGHT = canvas.height;
Scene.X = LeftNav.WIDTH;
Scene.Y = 0;

Tile.SIZE = 60;
Board.SIZE = 5 * Tile.SIZE;
Board.X = LeftNav.WIDTH + (canvas.width - LeftNav.WIDTH) * 1/2 - Board.SIZE * 1/2;
Board.Y = 75;

var game = new Game();

function loop(){
	game.tick();
	game.render();
	mouse.clicked = false;
}

setInterval(loop, 1000 / FPS);