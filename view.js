
var matcherView = {

    init: function() {
        console.log('view');

        this.$grid = $('#matcher-grid');
        this.$grid.empty();
        this.$grid.append('cards here');

        this.addCardsToGrid()
    },

    addCardsToGrid: function() {

    },
};
