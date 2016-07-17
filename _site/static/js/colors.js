// Take RGB values and return a CSS formatted string representation.
function toCSS(r,g,b){
    return "rgb("+r+","+g+","+b+")";
}

// Return a pseudorandom number between 0 and 255
function rcv(){
    return Math.floor(Math.random()*256);
}

function colorValue(n){
    var dir = Math.pow(-1, Math.floor(n/255));
    if(dir==1){
        return n%255;
    }
    return 255-(n%255);
}

var delay = 50;    // pause 50 milliseconds before changing the background.
function transition(r, g, b){
    var color = toCSS(colorValue(r), colorValue(g), colorValue(b));
    $('body').css('background-color', color);

    setTimeout(function(){
        transition(r+1, g+1, b+1);
    }, delay);
}

$(document).ready(function(){
    var r = rcv();  // variable for red
    var g = rcv();  // variable for green
    var b = rcv();  // variable for blue
    $('body').css('background-color', toCSS(r,g,b));
    transition(r,g,b);

    $("#push").css({'height': '100px', 'width': '100%'});
});

