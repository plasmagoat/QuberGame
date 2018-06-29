ig.module(
    'game.entities.house'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityHouse = ig.Entity.extend({
        
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.FIXED,
        
        animSheet: new ig.AnimationSheet('media/player.png', 16, 28),
        size: {x: 16, y: 28},
        flip: true,
        //accelGround: 200,
        //accelAir: 310,
        //jump: 360,
        friction: {x: 0, y: 0},
        maxVel: {x: 0, y: 0},


        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [1]);
        },

        update: function(){
            
            
            this.parent();
            
            
            this.currentAnim = this.anims.idle;

        },
    });
});

