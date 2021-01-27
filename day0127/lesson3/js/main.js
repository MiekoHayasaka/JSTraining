$(function(){
	$('.slideshow').each(function(){
		const fadeTime=1000;
		let $slides=$(this).find('img');
		let i=0;
		$slides.eq(i).fadeIn(fadeTime);
		setInterval(function(){
			$slides.eq(i++).fadeOut(fadeTime);
			if(i==$slides.length){i=0;}
			$slides.eq(i).fadeIn(fadeTime);
		},3000);
	});

});
