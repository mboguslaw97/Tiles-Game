class Play extends Scene {
	
	constructor(difficulty){
		super();
		
		this.board = new Board(difficulty);
		this.board.randomize();
		
		var x = Board.X + Board.SIZE * 1/2 - Button.WIDTH * 1/2;
		var y = Board.Y + Board.SIZE + 20;
		var dx = 140;
		
		this.btnHandler = new Handler();
		
		this.btnHandler.addObject(new Button(x - dx, y, 'New Game', function(){
			this.randomize();
		}.bind(this.board)));
		
		this.btnHandler.addObject(new Button(x, y, 'Reset', function(){
			this.reset();
		}.bind(this.board)));
		
		this.btnHandler.addObject(new Button(x + dx, y, 'Undo', function(){
			this.undo();
		}.bind(this.board)));
	}
	
	tick(){
		if(this.board.startSet.size - this.board.moveHistory.length > 0){
			this.board.tick();
		}
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
		ctx.fillText('Moves left: ' + (this.board.startSet.size - this.board.moveHistory.length), Board.X, Board.Y - 10);
	}
}