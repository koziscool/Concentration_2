
console.log('koz');

$(document).ready( function(){
    $('input[type=submit]').click( function(e){
        console.log('tetris');
        e.preventDefault();
        var size = $('#grid_size').val();
        matcherController.init(size);
        $(this).closest('form').hide();

    });
});