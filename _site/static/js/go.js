function pickNum(array, number){
    var result = [];
    var length = array.length;
    // pick the random values
    if(number < length){
        for(i = 0; i < number; i++){
            var index = Math.floor(Math.random() * (length));
            result.push(array[index]);
            if(index > -1){
                array.splice(index,1);
            }
            length = array.length;
        }
        return result;
    }
    else {
        return array;
    }
}

function preload(imageArray){
    $(imageArray).each(function(){
        var html = $.parseHTML(this);
        var src = $(html).attr('src');
        $.preloadImages(src);
    });
}

var interval = 2000; // 2 seconds for each word.
var numWords = 3; // 3 words seems like a decent amount.
var words; // End choices.
var text; // All nice sounding adjectives.
var images; // All logos for stuff I can use.
var finalImages; // All final images.
var current = 0; // Initialize the list.
var raw;

// Get the raw JSON dump.
raw = $.getJSON("../../words.json", function(e){
    // get all the text and images on inventory
    text = e.words.text;
    images = e.words.images;
    // preload the images
    preload(images);

    // pick <numWords> random ones from each
    words = pickNum(text, numWords);

    finalImages = pickNum(images, numWords);
    words = words.concat(finalImages);

    // add the final text
    words = words.concat(e.words.close);
});

$(window).load(function runScript(){
    if (typeof words === "undefined"){
        setTimeout(function(){
            runScript();
        }, 250);
    } else {
        var length = words.length - 1;
        setInterval(function swapWords(){
            if(current < length){
                current++;
                $("#slogan").fadeOut(function(){
                    $("#slogan").html(words[current]);
                });
                var contains = words[current].indexOf('<img ') > -1;
                if(contains == false){
                    $("#slogan").fadeIn();
                }
            }
        }, interval);
    }
});


