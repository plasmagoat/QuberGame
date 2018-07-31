ig.module( 'game.levels.mainMenu' )
.requires( 'impact.image' )
.defines(function(){
LevelMainMenu=/*JSON[*/{
	"entities": [],
	"layer": [
		{
			"name": "main",
			"width": 10,
			"height": 9,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/woodland.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[17,52,52,52,52,52,52,52,52,19],
				[36,2,2,2,2,2,2,2,2,36],
				[36,2,2,2,2,2,2,2,2,36],
				[36,2,2,2,2,2,2,2,2,36],
				[36,2,2,2,2,2,2,2,2,36],
				[36,2,2,2,2,2,2,2,2,36],
				[36,2,2,2,2,2,2,2,2,36],
				[36,2,2,2,2,2,2,2,2,36],
				[49,52,52,52,52,52,52,52,52,51]
			]
		}
	]
}/*]JSON*/;
LevelMainMenuResources=[new ig.Image('media/woodland.png')];
});