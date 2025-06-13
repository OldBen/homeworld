import Card from "./Card";

class Deck {
    StartingCards: number;
    CardsInDeck: Card[];

    constructor(cards: Card[]) {
        this.StartingCards = cards.length;
        this.CardsInDeck = [];
        for (let i = 0; i < this.StartingCards; i++) {
            this.CardsInDeck.push(cards[i]);
        }
        this.shuffle();
    }

    remainingCards(): number {
        return this.CardsInDeck.length;
    }

    shuffle(): void {
        var m = this.CardsInDeck.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.CardsInDeck[m];
            this.CardsInDeck[m] = this.CardsInDeck[i];
            this.CardsInDeck[i] = t;
        }
    }
}
export default Deck;