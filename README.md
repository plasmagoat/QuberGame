# QUB GAME!


## Next Steps
* [x] Make it run on web
* [x] Make it run on [qub.dk](http://www.qub.dk/qub-game/)
* [x] Load Qub custom sprite-sheet
* [ ] Fix custom sprite-sheet frame order
* [ ] UI layers for mini-games
* [ ] Add sprite sheets

### Links
* http://drksephy.github.io/2014/08/27/impactjs/
* https://github.com/DrkSephy/ACM-Game-Presentation/blob/master/lib/game/entities/player.js
* http://impactjs.com/documentation/class-reference
* http://ansimuz.com/site/your-first-html5-game-using-impactjs-part-5/
* https://www.safaribooksonline.com/library/view/building-html5-games/9781449331207/ch04s21.html
* https://gist.github.com/detj/2406824
* https://github.com/boneheadmed/YOSS
*




Layer System / GUI / Menu & Mini games

https://github.com/amadeus/impact-layers

https://github.com/samgreen/ImpactJS-Scene-Manager

### FONTS:

http://impactjs.com/font-tool/

Run in console:
getFontList('Bahnschrift,...,...')

### Game Characters:
We used an adapted version of the [free charaters from gameart2d](https://www.gameart2d.com/freebies.html)


## Running the game

### Development

requirements: python 2.7

to run development server cd to impact folder and run:

python server.py

### Deployment

requrements: php executable

run the bake.bat or back.sh script in the tools folder.

this generates a game.min.js with all the bundled javascript.

upload media folder, game.min.js and indexdeploy.html to server
rename indexdeploy.html to index.html
