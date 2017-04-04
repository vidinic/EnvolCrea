


/* scroll de navigation */

$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('#nav li a').click(function () {
        $('#nav li a').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('href');
        scrollTo(id);
        return false;
    });

    function scrollTo(target) {
        if ($(target).length >= 1) {
            height = $(target).offset().top;
        }
        $('html, body').animate({scrollTo: height}, 1200);
        return false;
    }
});




/* bouton bas de page */

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
});

document.addEventListener('DOMContentLoaded', function() {
    var aLiens = document.querySelectorAll('a[href*="#"]');
    for(var i=0, len = aLiens.length; i<len; i++) {
        aLiens[i].onclick = function () {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = this.getAttribute("href").slice(1);
                if (target.length) {
                    scrollTo(document.getElementById(target).offsetTop, 1000);
                    return false;
                }
            }
        };
    }
});
//Exemple de : Forestrf
// http://jsfiddle.net/forestrf/tPQSv/2/
function scrollTo(element, duration) {
    var e = document.documentElement;
    if(e.scrollTop===0){
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t+1===e.scrollTop--?e:document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

function scrollToC(element, from, to, duration) {
    if (duration < 0) return;
    if(typeof from === "object")from=from.offsetTop;
    if(typeof to === "object")to=to.offsetTop;
    scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, x1, x2, t, v, step, operacion) {
    if (t < 0 || t > 1 || v <= 0) return;
    element.scrollTop = x1 - (x1-x2)*operacion(t);
    t += v * step;
    setTimeout(function() {
        scrollToX(element, x1, x2, t, v, step, operacion);
    }, step);
}

function easeOutCuaic(t){
    t--;
    return t*t*t+1;
}




