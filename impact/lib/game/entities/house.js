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
        
        animSheet: new ig.AnimationSheet('media/house.png', 32, 32),
        size: {x: 32, y: 32},
        flip: true,
        //accelGround: 200,
        //accelAir: 310,
        //jump: 360,
        friction: {x: 500, y: 500},
        maxVel: {x: 0, y: 0},

        athouse: false,

        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [2]);
            this.addAnim('hit', 0.1, [2,6,10]);
        },

        update: function(){
            
            
            this.parent();
            
            if(this.athouse){
                this.currentAnim = this.anims.hit;
            } else {
                this.currentAnim = this.anims.idle;
            }

        },
    });
});

