
console.log('koz');

$(document).ready( function(){
    console.log('tetris');
    $('input[type=submit]').click( function(e){
        console.log('click');
        e.preventDefault();
        var size = $('#grid_size').val();
        matcherController.init(size);
        $(this).closest('form').hide();
        $('.card').animate({opacity: 1});
    });
});