import Card from './Card';

class Hand {
  cards: Card[] = [];
  
  constructor() {

  }
  
  addCard(card: Card): void {
    this.cards.push(card);
  }

  discard(index: number): void {
    if (index >= 0 && index < this.cards.length) {
      this.cards.splice(index, 1);
    } else {
      console.error('Invalid index for discard operation.');
    }
  }

  playCard(index: number): void {
    if (index >= 0 && index < this.cards.length) {
      const card = this.cards[index];
      console.log(`Playing card: ${card.cardName}`);
      this.cards.splice(index, 1);
      for (let i = 0; i < card.cost; i++) {
        let ind = Math.floor(Math.random() * this.cards.length);
        this.discard(ind);
      }
    } else {
      console.error('Invalid index for play operation.');
    }
  }
}

export default Hand;