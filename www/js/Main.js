var Main = {};

const SHIMMER_WAVE_1 = "SHIMMER_WAVE_1";
const SHIMMER_WAVE_2 = "SHIMMER_WAVE_2";
const SHIMMER_WAVE_CHAOS = "SHIMMER_WAVE_CHAOS";
const SHIMMER_RANDOM = "SHIMMER_RANDOM";
const SHIMMER_RAINBOW_1 = "SHIMMER_RAINBOW_1";
const SHIMMER_RAINBOW_2 = "SHIMMER_RAINBOW_2";

$(document).ready(() => { Main.onLoad() });

Main.onLoad = function(){
	$('.headerContent').addClass('loaded');

	$('.navIcon, .navCover').click(function(){
		$('body').toggleClass('nav');
	});

	$('.readMoreContainer').click(function(){
		$(this).closest('.textContainer').toggleClass('collapsed');
	});

	$(window).scroll(function(){
		Main.triggerScrollClasses();
	});

	$(window).resize(function(){
		Main.triggerScrollClasses();
	});

	if ($('body').attr('data-page') == 'project') {
		$('.projectButtons .button').each(function() {
			if (!$(this).attr('href')) {
				$(this).remove();
				$('.projectButtons').append(this);
			}
		});
	}

	setTimeout(() => {
		// animateSVGs(SHIMMER_RAINBOW_2);
		Main.triggerScrollClasses();
	}, 10);
};

Main.onUnload = function(){
};

Main.isDevice = function(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

Main.triggerScrollClasses = function(){
	let scrollTop = $(window).scrollTop();
	let windowHeight = window.innerHeight;

	$('body').toggleClass('scrolled', (scrollTop > 0));
	$('body').toggleClass('foldPassed', (scrollTop > windowHeight/3));

	$('.trigger').each(function(index){
		if($(this).isOnScreen()){
			$(this).addClass('triggered');
		}
	});
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

	var randZero = Math.random();

	if (randZero < 0.33) {
		color[0] = '0'
		color[1] = '0'
	} else if (randZero < 0.66) {
		color[2] = '0'
		color[3] = '0'
	} else {
		color[4] = '0'
		color[5] = '0'
	}

  return color;
}

function animateSVGs (mode) {
	let delayAcc = 0;

	if (mode == SHIMMER_RAINBOW_1 || mode == SHIMMER_RAINBOW_2) {
		$('.headerSvgContainer svg').css('opacity', 1);

		if (mode == SHIMMER_RAINBOW_2) {

			cycle = 1;

			setInterval(() => {
				$('.headerSvgContainer path').each(function(index) {
					if (cycle == 0) {
						var color = getRandomColor();

						$(this).css('fill', color)
							.css('stroke', color)
							// .css('opacity', 1);
					} else if (cycle == 1) {
						$(this).css('opacity', 0);
					} else if (cycle == 2) {
						$(this).css('fill', 'white')
							.css('stroke', 'black')
							.css('opacity', 1);
					}
				});

				// cycle = (cycle + 1) % 3;
			}, 4000);
		}
	} else {
		$('.headerSvgContainer svg path').css('animation', '100s logoShimmer infinite');
	}

	$('.headerSvgContainer path').each(function(index) {
		var delay = 0;

		if (mode == SHIMMER_WAVE_1) {
			delayAcc -= 0.05;
			delay = delayAcc;
		} else if (mode == SHIMMER_WAVE_2) {
			delayAcc -= 5;
			delay = delayAcc;
		} else if (mode == SHIMMER_WAVE_CHAOS) {
			delayAcc -= (0.5 + Math.random() * 30);
			delay = delayAcc;
		} else if (mode == SHIMMER_RAINBOW_1) {
			delayAcc += 0.005;
			delay = delayAcc;

			$(this)
				.css('animation', 'none')
				.css('opacity', 1)
				.css('transition-duration', (Math.random() * 2) + "s")
				.css('transition-delay', delay + "s")
				.css('fill', getRandomColor());

			setInterval(() => {
				$(this).css('fill', getRandomColor())
			}, 3500);
		} else if (mode == SHIMMER_RAINBOW_2) {
			delayAcc += 0.005;
			delay = delayAcc;

			var color = getRandomColor();

			$(this)
				.css('animation', 'none')
				.css('opacity', 1)
				.css('transition-duration', (Math.random() * 2) + "s")
				.css('transition-delay', delay + "s")
				.css('stroke', color)
				.css('fill', color);
		} else {
			if (Math.random() > 0.4) {
				$(this).css('display', 'none');
			}
			delay = Math.random() * -30;
		}

		if ($(this).css('animation-delay') == '0s') {
			$(this).css('animation-delay', delay + 's');
		}
	});
}

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
