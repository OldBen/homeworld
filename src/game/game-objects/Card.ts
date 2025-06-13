class Card {
    cardName: string = "Default Card";
    cost: number = 0;
    highlighted: boolean = false;

    constructor(cardName: string, cost: number) {
        this.cardName = cardName;
        this.cost = cost;
    }
}
export default Card;