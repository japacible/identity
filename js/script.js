$(document).ready(function() {
  var contentarea = $("#content ul");
  for (var i = 0; i < 1; i++) {
    //A piece of my awesomeness!  
    var object = objects[Math.floor(Math.random()*objects.length)];

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
    section.append(name);
    section.append(source);

    var image = $(document.createElement("img"));
    image.prop("src", object.image);
    alert(image.prop('src'));
    image.width(800);
    //image.height(800);
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

    alert("okay, it should appear now or something!");
  }
});
