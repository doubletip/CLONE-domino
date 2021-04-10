var secSlider = new Swiper('.swiper1', {
	loop: true,
	autoplay: {
		delay:3000,
	},
	slidesPerView:1,
	navigation: {
		nextEl: '.navigation .next',
		prevEl: '.navigation .prev',
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



var benefitSlider = new Swiper('.swiper2', {
	slidesPerView: 3,
	spaceBetween: 5,
	freemode: true,
	navigation: {
		nextEl: '.navigation .next',
		prevEl: '.navigation .prev',
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

