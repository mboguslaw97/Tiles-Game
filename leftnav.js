class LeftNav extends Rectangle {
	
	constructor(){
		super(0, 0, LeftNav.WIDTH, LeftNav.HEIGHT);

		var x = this.x + this.width * 1/2  - Button.WIDTH * 1/2;
		var y = 100;
		var dy = 50;
		
		this.btnHandler = new Handler();
		
		this.btnHandler.addObject(new Button(x, y, 'Easy', function(){
			game.scene = new Play('Easy');
		}));
		
		this.btnHandler.addObject(new Button(x, y + dy, 'Medium', function(){
			game.scene = new Play('Medium');
		}));
		
		this.btnHandler.addObject(new Button(x, y + 2 * dy, 'Hard', function(){
			game.scene = new Play('Hard');
		}));
		
		this.btnHandler.addObject(new Button(x, y + 3 * dy, 'Impossible', function(){
			game.scene = new Play('Impossible');
		}));
		
		this.btnHandler.addObject(new Button(x, y + 4.5 * dy, 'Create', function(){
			game.scene = new Create();
		}));
		
		this.btnHandler.addObject(new Button(x, y + 5.5 * dy, 'Import', function(){
			game.scene = new Import();
		}));
	}
	
	tick(){
		this.btnHandler.tick();
	}
	
	render(){
		this.fill(Colors.DARK_GRAY);
		
		ctx.strokeStyle = Colors.WHITE;
		ctx.font = '50px ' + FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';
		ctx.strokeText('Tiles', canvas.width * 1/8, 20);
		
		this.btnHandler.render();
	}
}