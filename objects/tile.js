class Tile {
	
	constructor(board, r, c){
		this.board = board;
		
		this.r = r;
		this.c = c;
		
		var x = Board.X + c * Tile.SIZE;
		var y = Board.Y + r * Tile.SIZE;
		this.outterRect = new Rectangle(x + Tile.SIZE * .15, y + Tile.SIZE * .15, Tile.SIZE * .7, Tile.SIZE * .7);
		this.innerRect = new Rectangle(x + Tile.SIZE * .2, y + Tile.SIZE * .2, Tile.SIZE * .6, Tile.SIZE * .6);
		
		this.on = false;
	}
	
	flip(){
		this.on = !this.on;
	}
	
	tick(){
		if(this.outterRect.clicked()){
			this.board.move(this);
			this.board.updateMoveSet(this);
			this.board.updateMoveHistory(this);
		}
	}
	
	render(){
		this.outterRect.stroke(Colors.WHITE);
		if(this.on){
			this.innerRect.fill(Colors.WHITE);
		}
	}
}