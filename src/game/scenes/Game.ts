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

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);


        let cards = [];
        for (let i = 0; i < 10; i++) {
            cards.push(new Card(i.toString())); 
        }
        this.deck = new Deck(cards);
        this.player = new Player(this.deck);

        console.log(this.player.deck);
        this.player.drawCards(3);
        console.log(this.player.hand);
        this.player.hand.cards.forEach((card, index) => {
            this.add.sprite(100 + (index + 1) * 80, 650, 'cards');
            this.add.text(90 + (index + 1) * 80, 620, card.cardName, { font: 'Arial', color: '#111111'}).setFontSize(36);
        });
        
        this.input.on('pointerdown', () => {
            this.player.drawCard();
            if (this.player.deck.remainingCards() === 0) {
                this.scene.start('GameOver');
            }
            let hand = this.player.hand.cards;
            this.add.sprite(100 + hand.length * 80, 650, 'cards');
            
            this.add.text(90 + hand.length * 80, 620, hand[hand.length - 1].cardName, { font: 'Arial', color: '#111111'}).setFontSize(36);

            

        });
    }
}
