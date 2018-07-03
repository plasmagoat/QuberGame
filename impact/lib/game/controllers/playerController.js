ig.module(
        'game.controllers.playerController'
    )
    .requires(
        'impact.impact'
    )
    .defines(function () {
        ig.playerController = ig.Class.extend({
            //position: {x: 50, y: 50},
            position: {x: null, y: null},
            player: null,

            init: function () {
                this.defaults = {position: this.position}
            },

            addPlayer: function(playerEntity){
                if( !this.position.x ){
                    this.position.x = playerEntity.pos.x;
                    this.position.y = playerEntity.pos.y;
                }
                this.player = playerEntity;
                this.player.pos.x = this.position.x;
                this.player.pos.y = this.position.y;
            },

            updatePosition: function(x,y){
                this.position.x = x;
                this.position.y = y;
            }

        })
    })