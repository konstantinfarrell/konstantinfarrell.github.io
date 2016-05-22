
$(document).ready(function(){
    function goDirection(){
        var num = Math.floor(Math.random()*4);
        if(num==0){
            return ['top', $(document).height()];
        } else if(num==1){
            return ['left', $(document).width()];
        } else if(num==2){
            return ['top', -30];
        } else if(num==3){
            return ['left', -30];
        }
    }

    // Take RGB values and return a CSS formatted string representation.
    function toCSS(r,g,b){
        return "rgb("+r+","+g+","+b+")";
    }

    // Return a pseudorandom number between 0 and 255
    function rcv(){
        return Math.floor(Math.random()*256);
    }

    function getij(name){
        return name.split('_').slice(0,2).map(Number);
    }

    $('body').append("<div id='grib-container'><div id='grib'></div></div>");

    function css(){
        $('body').css('overflow', 'hidden');
        $("#grib-container").css({
            'width': '100%',
            'height': '100%',
        });

        $("#grib").css({
            'background-color': '#111',
            'width': '100%',
            'height': '100%',
            'margin': 'auto',
            'padding': '0',
            'position': 'relative'
        });
    }
    css();

    var size = [30, 30];
    var num = [$(document).width()/size[0], $(document).height()/size[1]];
    var memory = 3000;

    $("#grib").click(function(e){
        var x = e.clientX;
        var y = e.clientY;
        var index_X = Math.floor(x/size[0]);
        var index_Y = Math.floor(y/size[1]);
        var name = index_X + "_" + index_Y + "_cell";
        var exists = document.getElementById(name);

        if(!exists){
            $("#grib").append("<div id='"+name+"'></div>");
            $("#"+name).css({'display': 'none'});
            $("#"+name).fadeIn(100).promise();
        }

        var color = toCSS(rcv(), rcv(), rcv());

        $("#"+name).css({
            'position': 'absolute',
            'background-color': color,
            'box-shadow': '0 0 1px '+color,
            'border-radius': '2px',
            'top': index_Y * size[1],
            'left': index_X * size[0],
            'width': size[0],
            'height': size[1]
        });

        setTimeout(function(){
            var d = goDirection();
            var direction = d[0];
            var magnitude = d[1];
            var animation = {};
            animation[direction] = magnitude;
            $("#"+name).animate(animation,500).promise().done(function(){
                $("#"+name).remove();
            });
        }, memory);
    });
});
