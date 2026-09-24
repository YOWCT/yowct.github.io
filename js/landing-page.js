// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var href = $(this).attr('href');
        if (href && href.indexOf('#') !== -1) {
            var hash = href.substring(href.indexOf('#'));
            var $target = $(hash);
            if ($target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $target.offset().top
                }, 1500, 'easeInOutExpo');
            }
        }
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});