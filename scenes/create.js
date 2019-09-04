class Create extends Scene {
	
	constructor(){
		super();
		
		this.board = new Board();
		
		var x = Board.X + Board.SIZE * 1/2 - Button.WIDTH * 1/2;
		var y = Board.Y + Board.SIZE + 20;
		var dx = 140;
		
		this.btnHandler = new Handler();
		
		this.btnHandler.addObject(new Button(x - dx, y, 'Share', function(){
			alert(this.board.getId());
		}.bind(this)));
		
		this.btnHandler.addObject(new Button(x, y, 'Clear', function(){
			this.board.clear();
		}.bind(this)));
		
		this.btnHandler.addObject(new Button(x + dx, y, 'Undo', function(){
			this.board.undo();
		}.bind(this)));
	}
	
	tick(){
		this.board.tick();
		this.btnHandler.tick();
	}
	
	render(){
		this.fill(Colors.BLACK);
		
		this.board.render();
		this.btnHandler.render();
		
		ctx.fillStyle = Colors.WHITE;
		ctx.font = '15px ' + FONT;
		ctx.baseLine = 'bottom';
		ctx.textAlign = 'left';
		ctx.fillText('Solvable in ' + this.board.moveSet.size + ' moves', Board.X, Board.Y - 10);
	}
}