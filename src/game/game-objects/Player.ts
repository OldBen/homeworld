import Deck from "./Deck";
import Hand from "./Hand";

class Player {
    deck: Deck;
    hand: Hand;

    constructor(deck: Deck) {
        this.deck = deck;
        this.hand = new Hand();
    }
    
    drawCard(): void {
        if (this.deck.remainingCards() > 0) {
            const card = this.deck.CardsInDeck.pop();
            if (card) {
                this.hand.addCard(card);
            }
        } else {
            console.log("No more cards in the deck to draw.");
        }
    }
}
export default Player;