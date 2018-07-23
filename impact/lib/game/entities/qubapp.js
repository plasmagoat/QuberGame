ig.module(
    'game.entities.qubapp'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityQubapp = ig.Entity.extend({
        
        size: {
            x: 32,
            y: 30
        },
        animSheet: new ig.AnimationSheet('media/phone-icons32.png', 32, 30),
        open: false,
        app: {
            size: 32,
            xoffset: 32*6,
            yoffset: 32*7
        },

        init: function (x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [7]);
            this.addAnim('clicked', 0.2, [0, 1, 2, 3, 4, 5, 6, 7, 8]);

            this.img = new ig.Image( 'media/sprite_phone_menu_248.png');

        },

        update: function () {
            //this.pos.x = ig.game.screen.x;
            //this.pos.y = ig.game.screen.y;
            //this.currentAnim = this.anims.idle;

            if (ig.input.pressed('leftMouse') && this.inFocus()) {
                if (this.open) {
                    this.open = false;
                    //this.currentAnim = this.anims.idle;
                } else {
                    ig.log('clicked');
                    //this.currentAnim = this.anims.clicked;
                    this.open = true;
                }

            }

            if(ig.input.state('app')){
                this.open = true;
            }

            this.parent();


        },

        draw: function () {
            this.parent()

            if (this.open) {
                //ig.log(this.img)
                ig.system.context.fillStyle = '#333333';
                //ig.system.context.fillRect(this.pos.x, this.pos.y, this.size.x, ig.game.screen.height);
                //ig.system.context.fill();


                //ig.system.context.strokeWidth = 1;
                //ig.system.context.strokeStyle = "#000000";
                //ig.system.context.fillStyle = "#FFFFFF";
                //ig.system.context.beginPath();
                //ig.system.context.arc(ig.system.width*2 - this.app.xoffset, ig.system.height*2 - this.app.yoffset, this.size.x, 0, 2 * Math.PI);
                //ig.system.context.fill();
                //ig.system.context.stroke();
                this.img.draw(ig.system.width - this.app.xoffset, ig.system.height - this.app.yoffset)
            }
        },



        inFocus: function () {
            return (
                (this.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
                ((ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x) &&
                (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
                ((ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y)
            );
        },
    });
});

