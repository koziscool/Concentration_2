
var matcherView = {

    model: matcherModel,

    init: function() {
        console.log('view');

        this.$grid = $('#matcher-grid');
        this.addCardsToGrid();

        var width = 100.0 / this.model.size - 2;
        $('.card').css({
            width: width + "%"
        });
    },

    addCardsToGrid: function() {
        console.log('add cards');
        for( var i = 0; i < this.model.cards.length; i++ ) {
            var card = this.model.cards[i];
            var $cardDiv = $("<div> <div class='name'>" + card.value.toString() + "</div></div>");
            $cardDiv.addClass('card');
            $cardDiv.data('card-id', card.id);
            $cardDiv.attr('id', 'card-' + card.id);
            this.$grid.append( $cardDiv );
        }
        console.log('finished add cards');
    },
};
