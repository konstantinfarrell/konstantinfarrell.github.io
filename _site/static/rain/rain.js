$('head').append("<link rel='stylesheet' type='text/css' href='/static/rain/rain.css' />");
$(document).ready(function(){
    var size = 10;
    var timeout = 16;
    var height = 6;
    var max_speed = 4000;
    var max_lines = Math.floor(($(window).width()/150));
    var start_y = -1 * height * size;

    $('body').append('<div id="background"></div>');
    $('#background').css('top', 0);
    var html = "<div id='cell-container'></div>";
    $('#background').append(html);

    function drip(cell, x, speed){
        var tops = $("#"+cell).position().top - $("#"+cell).height();
        $("#"+cell).css({
            'top': tops,
            'left': x
        });
        $("#"+cell).animate({'top': $(window).height() }, speed, "linear", function(){
            setTimeout(function(){
                var next_x = (Math.round(Math.random()*($(window).width()/size))-1)*size;
                var opacity = Math.random() * (0.50) + 0.2;
                $("#"+cell).css('opacity', opacity);
                $("#"+cell).css('left', next_x);
                $("#"+cell).css('top', start_y);
                speed = Math.floor(Math.random()*max_speed+3000);
                x = next_x;
                drip(cell, x, speed);
            }, 20);
        });
    }

    for(i = 0; i < max_lines; i++){
        var speed = Math.floor(Math.random()*max_speed)+3000;
        var next_x = Math.round(Math.random()*($(window).width() - 2 * size) + size);
        var cell_name = "cell_"+i;
        var cell_html = '<div id="'+cell_name+'" class="cell"></div>';
        $('#cell-container').append(cell_html);
        $("#"+cell_name).css('left', next_x);
        $("#"+cell_name).css({'width': size, 'height': height * size });
        $("#"+cell_name).css('top', start_y - next_x);
        drip(cell_name, next_x, speed);
    }

});
