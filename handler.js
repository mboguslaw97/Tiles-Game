class Handler {
	
	constructor(objects=[]){
		this.objects = objects;
	}
	
	tick(){
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].tick();
		}
	}
	
	render(ctx){
		for(var i = 0; i < this.objects.length; i++){
			this.objects[i].render(ctx);
		}
	}
	
	addObject(object){
		this.objects.push(object);
	}
	
	removeObject(object){
		this.objects.splice(this.objects.indexOf(object), 1);
	}
}