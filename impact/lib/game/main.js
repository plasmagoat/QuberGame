ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.debug.debug',
	'impact.font',
	'game.levels.qubmap',
	'game.entities.qubber'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	player: null,
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.SPACE, 'jump');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');

		this.loadLevel(ig.global['LevelQubmap']);
	},

	loadLevel: function(data) {
        this.currentLevel = data;
        this.parent(data);

        this.player = ig.game.getEntitiesByType(EntityQubber)[0];
    },
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		if( this.player ) {
			this.screen.x = this.player.pos.x - ig.system.width/2;
          	this.screen.y = this.player.pos.y - ig.system.height/2;
		}
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		//var x = ig.system.width/2,
		//	y = ig.system.height/2;
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );

		var x = this.player.x,
			y = this.player.y;
		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
