(function($) {
    $.fn.friendlytable = function(open) {
        return this.each(function() {
            var titles = [];
            var table = $(this);
            if ($(window).width() <= 768) {
                table.addClass('ft-table');
                ft();
            }
            $(window).resize(function(){
                if ($(this).width() <= 768) {
                    table.addClass('ft-table');
                    if (!table.data('ft')) {
                        ft();
                    }
                } else {
                    table.removeClass('ft-table');
                }
            });
            function ft() {
                table.data('ft',true);
                table.find('th').each(function(){
                    titles.push($(this).text().trim());
                });
                table.find('tr').each(function(){
                    var i = 0;
                    $(this).find('td').each(function(i){
                        if (i==0) {
                            $(this).addClass('ft-expand').append(' <span class="glyphicon glyphicon-chevron-down"></span>');
                        }
                        $(this).prepend('<span class="ft-title">'+titles[i]+':</span> ');
                        i++;
                    });
                });
                $('.ft-expand').click(function(){
                    $('.ft-expand.open').not($(this)).trigger('click');
                    if ($(this).hasClass('open')) {
                        $(this).siblings().removeClass('ft-show')
                        $(this).removeClass('open').find('.glyphicon').addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
                    } else {
                        $(this).siblings().addClass('ft-show');
                        $(this).addClass('open').find('.glyphicon').addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
                    }
                });
            }
        });
    };
}(jQuery));
