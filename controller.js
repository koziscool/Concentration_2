
var matcherController = {

    model: matcherModel,
    view: matcherView,

    init: function(size) {
        console.log('controller');
        this.model.init( size );
        this.view.init();
    }

};

