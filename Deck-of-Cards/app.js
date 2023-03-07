const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initialiseDeck() {
      const {deck, suits, values} = this;
      for (let suit of suits) {
        for (let value of values.split(',')) {
          deck.push({value, suit});
        }
      }
    },
    shuffleDeck() {
      const {deck} = this;
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
    drawCard() {
      const drawnCard = this.deck.pop();
      this.drawnCards.push(drawnCard)
      return drawnCard;
    }
  }
}

const deck1 = makeDeck();
deck1.initialiseDeck();
