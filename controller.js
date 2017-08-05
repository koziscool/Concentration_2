
var matcherController = {

    model: matcherModel,
    view: matcherView,

    init: function(size) {
        this.model.init( size );
        this.view.init();
    },

    selecting: false,

    selectCard( cardId ) {
        if( this.selecting ){
            return;
        }
        this.selecting = true;

        if( this.model.sameCard( cardId ) ){
            this.selecting = false;
            return;
        }

        this.view.revealCard( cardId );

        if( this.model.selectedCard ){
            var selectedCard = this.model.selectedCard;
            var correct = this.model.checkGuess( cardId );
            var that = this;
            this.view.updateGameView();
            
            if( correct ){
                setTimeout( function(){
                    that.view.setCorrect(cardId);
                    that.view.setCorrect(selectedCard.id);
                    that.selecting = false;
                }, 500);
            } else {
                setTimeout( function (){
                    that.view.hideCards();
                    that.selecting = false;
                }, 1000 );
            }

        } else {
            this.model.setSelectedCard(cardId);
            this.selecting = false;
        }

    }

};

