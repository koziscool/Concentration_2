
var matcherModel = {
    size: 4,
    cards: [],
    aCard: { id: 3, value: "A" },
    numGuesses: 0,
    matchedCards: 0,
    totalCards: 0,

    gameStateText: "You haven't won yet, keep going.",

    cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],

    init: function( size ) {
        console.log("model");

        this.size = size || this.size;
        var totalPairs = Math.pow( this.size, 2 ) / 2;
        for( var i = 0; i < totalPairs; ++i ) {
            this.addPair();
        }
        this.shuffle()
    },

    addPair: function() {
        this.cards.push( this.aCard );
        this.cards.push( this.aCard );
    },

    shuffle: function() {
        console.log('shuffling');
    }
}