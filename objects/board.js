class Board extends Rectangle {
	
	constructor(difficulty){
		super(Board.X, Board.Y, Board.SIZE, Board.SIZE);
		
		this.tiles = [];
		this.tileHandler = new Handler();
		for(var r = 0; r < 5; r++){
			this.tiles.push([]);
			for(var c = 0; c < 5; c++){
				var tile = new Tile(this, r, c);
				this.tiles[r].push(tile);
				this.tileHandler.addObject(tile);
			}
		}
		this.startSet = new Set();
		this.moveSet = new Set();
		this.moveHistory = [];
		this.difficulty = difficulty;
	}
	
	randomize(){
		this.startSet.clear();
		this.clear();
		
		var n = Math.floor(Math.random() * 4);
		n += {'Easy': 5, 'Medium': 9, 'Hard': 13, 'Impossible': 17}[this.difficulty];
		
		var tileIds = new Array(25);
		for(var i = 0; i < 25; i++){
			tileIds[i] = i;
		}
		
		for(var i = 0; i < n; i++){
			var rnd = i + Math.floor(Math.random() * (25 - i));
			
			var id = tileIds[rnd];
			var r = Math.floor(id / 5);
			var c = id % 5;
			this.move(this.tiles[r][c]);
			this.startSet.add(this.tiles[r][c]);
			
			var temp = tileIds[i];
			tileIds[i] = tileIds[rnd];
			tileIds[rnd] = temp;
		}
	}
	
	move(tile){
		tile.on = !tile.on;
		if(tile.r > 0){
			this.tiles[tile.r - 1][tile.c].flip();
		}
		if(tile.r + 1 < this.tiles.length){
			this.tiles[tile.r + 1][tile.c].flip();
		}
		if(tile.c > 0){
			this.tiles[tile.r][tile.c - 1].flip();
		}
		if(tile.c + 1 < this.tiles[tile.r].length){
			this.tiles[tile.r][tile.c + 1].flip();
		}
	}
	
	updateMoveSet(tile){
		if(this.moveSet.has(tile)){
			this.moveSet.delete(tile);
		}
		else {
			this.moveSet.add(tile);
		}
	}
	
	updateMoveHistory(tile){
		this.moveHistory.push(tile);
	}
	
	undo(){
		if(this.moveHistory.length > 0){
			var tile = this.moveHistory.pop();
			this.move(tile);
			this.updateMoveSet(tile);
		}
	}
	
	reset(){
		this.clear();
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 5; c++){
				if(this.startSet.has(this.tiles[r][c])){
					this.move(this.tiles[r][c]);
				}
			}
		}
	}
	
	clear(){
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 5; c++){
				this.tiles[r][c].on = false;
			}
		}
		this.moveSet.clear();
		this.moveHistory = [];
	}
	
	getId(){
		var id = 0;
		var moveSet = new Set(this.moveHistory);
		for(var r = 0; r < 5; r++){
			for(var c = 0; c < 5; c++){
				id <<= 1;
				if(this.moveSet.has(this.tiles[r][c])){
					id++;
				}
			}
		}
		return id;
	}
	
	tick(){
		this.tileHandler.tick();
	}
	
	render(){
		this.stroke(Colors.WHITE);
		this.tileHandler.render();
	}
}