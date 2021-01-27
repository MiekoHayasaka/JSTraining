$(function(){
	let $ele=$('strong');
  $('.image').on('mouseover',function(){
    $ele.stop(true).animate({opacity:1,left:'0%'},400);
  })
  .on('mouseout',function(){
    $ele.stop(true).animate({opacity:0,left:'-200%'},400);
  });
  $('#menus li').each(function(i){
    $(this).css({top:(i%2==0? -5 :5)+"px",left:i*130+"px"})
    .on('mouseover',function(){
      $(this).animate({width:'110px',height:'110px',lineHeight:'110px'},200);
    })
    .on('mouseout',function(){
        $(this).animate({width:'100px',height:'100px',lineHeight:'100px'},200);
    });
  });
});