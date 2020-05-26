# game-over

School assignment at yrgo 2020, a game in javascript build with p5.js and firebase

# COVIDeo game

Play this amaizing game here https://covideo-game.netlify.app/

## Authors

- <a href="https://github.com/alexandergustafssonflink"> Alexander Gustafsson Flink </a>
- <a href= "https://github.com/mikaelaalu"> Mikaela Lundsgård </a>

## Pull requests

- <a href="https://github.com/mikaelaalu/game-over/commit/260c175edd7f2ff0eb87e8e797ac120d7bffc28c
  "> Structure and Item class </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/24435384f01531d632fc2aa60a14e8862555d8c7"> Update points </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/c2db5bcfac5c00deca6770c0c56c6bbfe1debba4"> Created Virus class </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/91a5e88cb4230f99630a7d626796288030c0d1ab"> Started on animation on hero </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/f81f6c1455e3d14e2e3891e41812c01bf08a2584"> Spride update 1 </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/80fca7e07141303f971891cc7a3eea263ca865e9"> Spritde update 2 </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/3ffb750e5cf2ac30bddaa44d3112f10fc867bff9"> Monstervirus class </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/d7f6be47ecf95585c46b87020f2f258978fef611"> Startscreen and sound effects </a>
- <a href="https://github.com/mikaelaalu/game-over/commit/11b09bb8835a4a89f8e4afef00a7bd3c1d4957af"> Highscore with firebase </a>

## Code review

By <a href="https://github.com/henricbjork">Henric Björkvall</a> and <a href="https://github.com/Juljulia"> Julia Karlsson </a>

- [style.css](https://github.com/mikaelaalu/game-over/blob/006b78528b649318cfc69aa5a12afbbd0330e8c0/jump/style.css)
  You could reset the margins and paddings in your css so that the canvas fills the entire screen.
- [style.css](https://github.com/mikaelaalu/game-over/blob/006b78528b649318cfc69aa5a12afbbd0330e8c0/jump/style.css)
  You could try adding overflow: hidden to the body so that the page won’t scroll up/down and to the sides whenever the arrow keys are pressed.
- [index.js](https://github.com/mikaelaalu/game-over/blob/006b78528b649318cfc69aa5a12afbbd0330e8c0/jump/index.js#L159)
  You have a commented out block for debugging. This could be removed for the final and pushed up product.
- You have images in the images folder that are unused that you can remove for the final product
- [hero.js](https://github.com/mikaelaalu/game-over/blob/006b78528b649318cfc69aa5a12afbbd0330e8c0/jump/hero.js#L178) 
  In your replay function in hero.js, you don’t reset the item arrays or declare a new hero. I think that could be the reason why the old hero and items still remains sometimes after pressing the replay button.
- [hero.js](https://github.com/mikaelaalu/game-over/blob/master/jump/hero.js#L16-L105)
  I think that you don't have to repeat hero in this.hero.setCollider, so instead declare this.setCollider and this.addAnimation. Not completely sure about the syntax in classes, but maybe it's a good improvement to delete 'hero' when not needed. 
- [index.js](https://github.com/mikaelaalu/game-over/blob/master/jump/index.js#L100-L134)
  If followed the tip above then you could delete the repeating hero.hero and just type hero.collide(obstacles) for example. 
- Good practice that you have structured up your code into several files. 
- Maybe store all css files in one directory. 
- It's a funny game and we like your covid-19 theme. Good job! 


## Tested by

#### Programmers

- <a href="https://github.com/oaflindberg">Andreas Lindberg</a>
- <a href="https://github.com/lundborgm">Michaela Lundborg</a>
- <a href="https://github.com/ThomasSonnerstam">Thomas Sönnerstam</a>
- <a href="https://github.com/ViktorSjoblom">Viktor Sjöblom</a>

#### No programmers

- Teresia Lundsgård
- Linda Olsson
- Elin Söndergaard
- Christoffer Jansson
- Niklas Bank

## License

This project is licensed under the MIT License - see the LICENSE <a href="https://github.com/mikaelaalu/game-over/blob/master/LICENSE"> file </a> for details
