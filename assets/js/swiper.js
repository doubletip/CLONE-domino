var secSlider = new Swiper('.swiper-container', {
	loop: true,
	autoplay: {
		delay:3000,
	},
	slidesPerView:1,
	navigation: {
		nextEl: '.slider .swiper-container .next',
		prevEl: '.slider .swiper-container .prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	on: {
		init: function(swiper){
			console.log(this.slides[this.activeIndex]);
		},
		slideChange: function(){
			console.log(2);
		}
	},
});

$(".swiper-play").hide();

			$(".swiper-pause").click(function(){
				secSlider.autoplay.stop();
				$(this).hide();
				$(".swiper-play").show();
			});
				$(".swiper-play").click(function(){
					secSlider.autoplay.start();
				$(this).hide();
				$(".swiper-pause").show();
			});

