import Card from './Card';

class Hand {
  cards: Card[] = [];
  
  constructor() {

  }
  addCard(card: Card): void {
    this.cards.push(card);
  }
}

export default Hand;