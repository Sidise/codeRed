const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./Ships/gfx/Player.png");
ASSET_MANAGER.queueDownload("./Ships/gfx/chaser.png");
ASSET_MANAGER.queueDownload("./Ships/gfx/wanderer.png");
ASSET_MANAGER.queueDownload("./Ships/gfx/bullet.png");
//Add all images here.

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);
	this.player = new PlayerShip(gameEngine);
	gameEngine.addEntity(this.player);
	//Messy hardcode. Should later have an entity that manages spawning.
	this.chaser = new Chaser(gameEngine);
	this.wanderer = new Wanderer(gameEngine,this.player);
	gameEngine.addEntity(this.chaser);
	gameEngine.addEntity(this.wanderer);
	

	gameEngine.start();
});
