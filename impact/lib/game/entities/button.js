ig.module(
    'game.entities.button'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityButton = ig.Entity.extend({
        
        font: new ig.Font( 'media/04b03.fontblackx3.png'),
        //size: {x: 50, y: 16},
        text: "test",

        
        selected: false,

        init: function(x, y, settings){
            this.parent(x, y, settings);

        },

        toggleSelect: function(){
            this.selected = !this.selected;
        },

        update: function(){
            //this.size.y = this.font.height;
            if(this.selected){
                
            }
        },

        draw: function(){
            this.font.draw(this.text, this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y, ig.Font.ALIGN.CENTER);
        },

    })
})
