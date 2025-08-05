class Person {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.characterPosition = "right";
        this.characterPositions = {
            left: {
                x: canvas.width/2-160,
                y: canvas.height-260,
            },
            right: {
                x: canvas.width/2+80,
                y: canvas.height-260,
            }
        }
        this.characterWidth = 75;
        this.characterHeight = 150;
    }
    draw() {
        let character = new Image();
        character.src = "images/character.png";

        let characterPosition = this.characterPositions[this.characterPosition]
        if(this.characterPosition == 'right') {
            this.ctx.save();
            this.ctx.translate(characterPosition.x + this.characterWidth/2, characterPosition.y + this.characterWidth/2)
            this.ctx.translate(-(characterPosition.x+this.characterWidth/2), -(characterPosition.y+this.characterWidth/2))
        }
        let sx = this.characterPosition === "left" ? 0 : character.width / 2;

this.ctx.drawImage(
  character,
  sx, 0,                     // ambil bagian kiri atau kanan dari sprite
  character.width / 2,       // lebar 1 frame
  character.height,          // tinggi frame
  characterPosition.x,
  characterPosition.y,
  this.characterWidth,
  this.characterHeight
);

        if(this.characterPosition == 'right') this.ctx.restore();
    }
    moveLeft() {
        this.characterPosition = 'left'
        
    }
    moveRight() {
        this.characterPosition = 'right'
    }
}