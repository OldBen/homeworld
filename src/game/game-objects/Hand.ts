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
}

export default Hand;