$(document).ready(function() {
    $('.hover').on('mouseenter', function(event) {
        $(this).children('section').show();
    });

    $('.hover').on('mouseleave', function(event) {
        $(this).children('section').hide();
    });

    var windowWidth = $('#topdiv').width();
    var percentSize = (100/3);
    var $jenObject = $('#images li');

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

    $('#usa-switch').on('switch-change', function(e, data) {
        var usaStatus = $('#usa-switch').bootstrapSwitch('status');
        var asiaStatus = $('#asia-switch').bootstrapSwitch('status');

        if (usaStatus) {
            $('.usa img').show();
        } else {
            $('.usa img').hide();
        }
    });

    $('#asia-switch').on('switch-change', function(e, data) {
        var usaStatus = $('#usa-switch').bootstrapSwitch('status');
        var asiaStatus = $('#asia-switch').bootstrapSwitch('status');

        if (asiaStatus) {
            $('.asia img').show();
        } else {
            $('.asia img').hide();
        }
    });
    
    setGrid();
    setSize();

    $(window).resize(function () {
        windowWidth = $('#topdiv').width();
        setGrid();
        setSize();
    });
});