ig.module(
        'game.controllers.sceneController'
    )
    .requires(
        'impact.impact'
    )
    .defines(function () {
        ig.sceneController = ig.Class.extend({
            //Initialize the class with game representing the main game object
            //and levels being an array of level objects.
            //The first level in the array is loaded by default.
            init: function (theGame, initialLevels) {
                this.game = theGame;
                this.levels = [];
                this.currentLevel = 0;
                this.append(initialLevels);
                return this.loadLevel(this.currentLevel);
            },

            loadLevel: function (levelNumber) {
                //Load a level by its position in this.levels array
                //and set the this.currentLevel to that position.
                this.currentLevel = levelNumber;
                this.game.loadLevel(this.levels[levelNumber]);
                return true;
            },

            append: function (levels) {
                //Append a single new level or an array of new levels.
                newLevels = [];
                if (typeof (levels) === 'object') {
                    if (levels.constructor === (new Array).constructor) {
                        newLevels = levels;
                    } else {
                        newLevels[0] = levels;
                    }
                    this.levels = this.levels.concat(newLevels);
                    return true;
                } else {
                    return false;
                }
            },

        });

    });