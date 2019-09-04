class Game {
	
	constructor(){
		this.leftNav = new LeftNav();
		this.scene = new Create();
	}
	
	tick(){
		this.leftNav.tick();
		this.scene.tick();
	}
	
	render(){
		this.leftNav.render();
		this.scene.render();
	}
}