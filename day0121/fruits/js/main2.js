window.onload=function(){
	var result=document.getElementById("result");
	var fruits=document.querySelectorAll('[data-price]');
	for(var i=0;i<fruits.length;i++){
		fruits[i].addEventListener("change",numberChange);
		fruits[i].addEventListener("keyup",numberChange);
    fruits[i].addEventListener("mouseup",numberChange);
	}
	function numberChange(){
		var sum=0;
		for(var i=0;i<fruits.length;i++){
			sum+=parseInt(fruits[i].getAttribute('data-price'))*fruits[i].value;
		}
		result.textContent='合計は'+sum+'円です';
		//console.dir(fruits[0]);
	}
}