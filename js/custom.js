jQuery.fn.blindLeftToggle = function (duration, easing, complete) {
    return this.animate({
        marginLeft: parseFloat(this.css('marginLeft')) < 0 ? 0 : -this.outerWidth()
    }, jQuery.speed(duration, easing, complete));
};

$(document).ready(function() {

    $('.mobile-nav').click(function() {
        var nav = $('.sidenavbar');
        var sidebar = $('.sidebar');
    
        nav.blindLeftToggle(500);
        sidebar.blindLeftToggle(500);
    
    });

    $('.scroll-to').click(function() {
        $('html, body').animate({scrollTop: $('#goto').offset().top}, 1000)
    });

    $('#goto').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } 
        else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
          offset: '60px'
    });

});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");
};

document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
});