$(document).ready(function() {
    var windowWidth = $('#topdiv').width();
    var percentSize = (100/3);
    var $jenObject = $('#images li');

    function setSize () {
        var jenObjectWidth = windowWidth * percentSize / 100;

        $jenObject.each(function() {
            $(this).css({
                'height': jenObjectWidth + "px",
                'width': jenObjectWidth + "px"
            });

            var centerX = (jenObjectWidth/2);
            var centerY = (jenObjectWidth/2);
            $(this).on('mousemove', function(event) {
                var mouseX = event.pageX - $(this).offset().left;
                var mouseY = event.pageY - $(this).offset().top;
                var mouseDistX = (mouseX / centerX) * 100 - 100;
                var mouseDistY = (mouseY / centerY) * 100 - 100;
                $(this).find('img').css({
                    'left': -(mouseDistX/6.64) - 15 + "%",
                    'top':  -(mouseDistY/6.64) - 15 + "%"
                });
            });
        });
    }

    $('.hover').on('mouseenter', function(event) {
        $(this).children('section').show();
    });

    $('.hover').on('mouseleave', function(event) {
        $(this).children('section').hide();
    });

    $('#about-link').on('click', function(event) {
        event.preventDefault();
        $('#about').fadeToggle().toggleClass('active');
    });

    $('#images *').on('click', function(event) {
        if ($('#about').hasClass('active')) {
            event.preventDefault();
            $('#about').fadeToggle().toggleClass('active');
        }
    });

    function setGrid () {
        if (windowWidth < 481) {
            percentSize = 100;
        } else if(windowWidth > 480 && windowWidth < 801){
            percentSize = 50;
        } else if(windowWidth > 800 && windowWidth < 1281){
            percentSize = (100/3);
        } else if(windowWidth > 1280 && windowWidth < 1500){
            percentSize = 25;
        } else if(windowWidth > 1499){
            percentSize = 20;
        }
    }
    
    setGrid();
    setSize();

    $(window).resize(function () {
        windowWidth = $('#topdiv').width();
        setGrid();
        setSize();
    });
});