class Button extends Rectangle {
	
	constructor(x, y, text, action){
		super(x, y, Button.WIDTH, Button.HEIGHT);
		this.text = text;
		this.action = action;
	}
	
	tick(){
		if(this.clicked()){
			this.action();
		}
	}
	
	render(){
		this.stroke(Colors.WHITE);
		
		if(this.hovered()){
			this.fill(Colors.DARK_GRAY);
			ctx.fillStyle = Colors.GRAY;
		}
		else {
			this.fill(Colors.GRAY);
			ctx.fillStyle = Colors.WHITE;
		}
		
		ctx.font = '20px ' + FONT;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(this.text, this.x + Button.WIDTH * 1/2, this.y + Button.HEIGHT * 1/2);
	}
}