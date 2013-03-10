$(document).ready(function() {
    //So they're in a different order every time the page is refreshed
    shuffleArray(objects);
    populateImages();
});

/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**
 * Creates all the images and populates them
 * 
 */
function populateImages() {
  var contentarea = $("#content ul");
  for (var i = 0; i < objects.length; i++) {
    //If I want a random object ... but here I just want all of them
    //var object = objects[Math.floor(Math.random()*objects.length)];
    
    //A piece of my awesomeness!  
    var object = objects[i];

    var itemOfJen = $(document.createElement("li"));
    itemOfJen.css({'height': '317.5px'});
    itemOfJen.css({'width': '317.5px'});

    var name = $(document.createElement("h2"));
    var nameText = document.createTextNode(object.name);
    name.append(nameText);

    var link = $(document.createElement("a"));
    link.prop("href", object.link);
    var linkText = document.createTextNode(object.source);
    link.append(linkText);
    
    var source = $(document.createElement("span"));
    source.addClass("author");
    source.append(link);

    var section = $(document.createElement("section"));
    section.addClass("img_overlay");
    section.css({'display' : 'none'});
    section.append(name);
    section.append(source);

    var image = $(document.createElement("img"));
    image.prop("src", object.image);
    image.prop("width", "800");
    image.prop("height", "800");
    image.addClass("lazy");
    image.css({'display' : 'block'});
    image.css({'left' : '-25%'});
    image.css({'top' : '-15%'});

    var figure = $(document.createElement("figure"));
    figure.class = "hover";
    figure.addClass("hover");
    figure.append(section);
    figure.append(image);
    
    itemOfJen.append(figure);

    itemOfJen.hide();
    contentarea.append(itemOfJen);
    itemOfJen.show();
  }
}