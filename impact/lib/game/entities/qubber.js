ig.module(
    'game.entities.qubber'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityQubber = ig.Entity.extend({
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.ACTIVE,

        //animSheet: new ig.AnimationSheet('media/sprite_girl.png', 16, 28),
        animSheet: new ig.AnimationSheet('media/sprite_girl2.png', 32,35),
        size: {x: 32, y: 35},
        flip: true,
        accelGround: 200,
        accelAir: 310,
        jump: 360,
        friction: {x: 500, y: 500},
        maxVel: {x: 160, y: 160},
        money: 0,

        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 0.2, [0,1,2,3,4,5]);
            this.addAnim('run', 0.1, [6,7,8,9,10,11]);
            //this.addAnim('jump', 1, [2]);
            //this.addAnim('fall', 0.4, [2]);
        },

        update: function(){
            // Add left/right movement logic
            var accel = this.accelAir;
            if(ig.input.state('left')){
                this.accel.x = -accel;
                this.flip = true;
            } else if(ig.input.state('right')){
                this.accel.x = accel;
                this.flip = false;
            } else
                this.accel.x = 0;

            // Add up/down movement logic
            if(ig.input.state('up')){
                this.accel.y = -accel;
            } else if(ig.input.state('down')){
                this.accel.y = accel;
            } else {
                this.accel.y = 0;
            }




            this.currentAnim.flip.x = this.flip;

            this.parent();

            if(this.vel.x != 0 | this.vel.y != 0)
                this.currentAnim = this.anims.run;
            else
                this.currentAnim = this.anims.idle;

        },

        check: function(other){

            if(other.id == 1){
                other.id = 0;
                console.log("hit correct house");
                other.athouse = true;
                this.money+=100;
                // OPEN MINI GAME
            }
        }
    });
});
