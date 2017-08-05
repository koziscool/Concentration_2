
var matcherView = {

    model: matcherModel,

    init: function() {
        this.$grid = $('#matcher-grid');
        this.addCardsToGrid();

        var width = 100.0 / this.model.size - 2;
        $('.card').css({
            width: width + "%"
        });

        $('.card').click(function(e){
          matcherController.selectCard($(this).data('card-id'))
        });
    },

    addCardsToGrid: function() {
        for( var i = 0; i < this.model.cards.length; i++ ) {
            var card = this.model.cards[i];
            var $cardDiv = $("<div> <div class='name'>" + card.value.toString() + "</div></div>");
            $cardDiv.addClass('card');
            $cardDiv.data('card-id', card.id);
            $cardDiv.attr('id', 'card-' + card.id);
            this.$grid.append( $cardDiv );
        }
    },

    revealCard: function(cardId) {
        $('#card-' + cardId).addClass('revealed')
    },

    hideCards: function() {
        $('.card').not('.correct').removeClass('revealed');
    },

    setCorrect: function(cardId) {
        $('#card-' + cardId).off('click');
        $('#card-' + cardId).addClass('correct');
    },


    updateGameView: function() {
        var $gameState = $('#game-state-text');
        $gameState.text( this.model.gameStateText );
        
        var $numGuesses = $('#num-guesses');
        $numGuesses.text( this.model.numGuesses );

        var $totalCards = $('#total-cards');
        $totalCards.text( this.model.totalCards );
        
        var $matchedCards = $('#matched-cards');
        $matchedCards.text( this.model.matchedCards );
    }

};
