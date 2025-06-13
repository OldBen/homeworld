import { Scene } from 'phaser';
import Deck from '../game-objects/Deck';
import Card from '../game-objects/Card';
import Player from '../game-objects/Player';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    player: Player;
    deck: Deck;
    handDisplay: Phaser.GameObjects.Group;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);
        this.handDisplay = this.add.group();

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);


        let cards = [];
        for (let i = 0; i < 10; i++) {
            let cost = Math.floor(Math.random() * 3);
            cards.push(new Card(i.toString(), cost)); 
        }
        this.deck = new Deck(cards);
        this.player = new Player(this.deck);

        console.log(this.player.deck);
        this.player.drawCards(3);
        console.log(this.player.hand);
        this.redrawHand();
        
        var key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        key.on('down', () => {
            this.player.drawCard();
            if (this.player.deck.remainingCards() === 0) {
                this.scene.start('GameOver');
            }
            this.redrawHand();
            
            

        });
    }

    redrawHand(): void {
        this.handDisplay.clear(true, true);
        this.player.hand.cards.forEach((card, index) => {
            let sprite = this.add.sprite(100 + (index + 1) * 80, 650, 'cards');
            if (card.highlighted) {
                sprite.setFrame(1); // Highlighted frame
            }
            let text = this.add.text(90 + (index + 1) * 80, 620, card.cardName, { font: 'Arial', color: '#111111'}).setFontSize(36);
            sprite.setInteractive();
            sprite.on('pointerdown', () => {
                if (this.player.hand.cards[index].highlighted){
                    this.player.hand.playCard(index);
                } else {
                    this.player.hand.cards.forEach((c) => c.highlighted = false);
                    this.player.hand.cards[index].highlighted = true;
                }
                this.redrawHand();
            });
            this.handDisplay.add(sprite);
            this.handDisplay.add(text);
        });
    }
}
