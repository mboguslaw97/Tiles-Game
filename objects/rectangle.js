class Rectangle {
	
	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	contains(x, y){
		return this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
	}
	
	hovered(){
		return this.contains(mouse.x, mouse.y);
	}
	
	clicked(){
		return mouse.clicked && this.hovered();
	}
	
	stroke(color){
		ctx.strokeStyle = color;
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
	
	fill(color){
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}