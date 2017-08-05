
var matcherModel = {
    size: 4,
    cards: [],
    aCard: { id: 3, value: "A" },
    numGuesses: 0,
    matchedCards: 0,
    totalCards: 0,

    currentId: 1,

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
        var value = this.randomValue();
        this.cards.push( new this.Card( this.getId(), value ) );
        this.cards.push( new this.Card( this.getId(), value ) );
        this.totalCards += 2;
    },

    shuffle: function() {
        console.log('shuffling');
    },


    Card: function( id, value ){
        this.id = id;
        this.value = value;

        this.matches = function( otherCard ){
            return this.value === otherCard.value;
        }
    },

    randomValue: function() {
        return this.cardValues[ Math.floor(Math.random() * this.cardValues.length) ]
    },

    getId: function() {
        var id = this.currentId;
        this.currentId++;
        return id;
    }
}