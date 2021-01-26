$(function(){
	let $ele=$('strong');
  $('.image').on('mouseover',function(){
    $ele.stop(true).animate({opacity:1,left:'0%'},400);
  })
  .on('mouseout',function(){
    $ele.stop(true).animate({opacity:0,left:'-200%'},400);
  });
});
