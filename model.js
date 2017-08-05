
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

    selectedCard: null,

    init: function( size ) {
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
        var currentIndex = this.cards.length, temp, rand;

        while( 0 !== currentIndex ){
            rand = Math.floor( Math.random() * currentIndex );
            currentIndex--;

            temp = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[rand];
            this.cards[rand] = temp
        }
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
    },

    getCard: function(id){
        for( var index in this.cards ) {
            if( this.cards[index].id === id ) return this.cards[index];
        }
        return null;
    },

    setSelectedCard: function( cardId ) {
        this.selectedCard = this.getCard( cardId );
    },

    sameCard: function( id ) {
        return this.selectedCard && id === this.selectedCard.id;
    },

    checkGuess: function(cardId) {
        this.numGuesses++;
        var guessedCard = this.getCard(cardId);
        var correct = this.selectedCard.matches(guessedCard);
        if( correct) {
            this.matchedCards += 2;
        }

        this.selectedCard = null;

        if( this.matchedCards === this.totalCards )
        {
            this.gameStateText = "Congratulations, you won!";
        }

        return correct;
    },

}

