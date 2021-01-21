'use strict';
window.addEventListener('load',()=>{
	const prices=[120,50,180];
	const result=document.getElementById('result');
	const fruits=document.getElementsByClassName('fruits');
	const numberChange=()=>{
		console.log('in');
		let sum=0;
		for(let i=0;i<fruits.length;i++){
			sum+=parseInt(fruits[i].value) * prices[i];
		}
		result.textContent=`${sum}円です!`;
	};
	for(let i=0;i<fruits.length;i++){
		fruits[i].addEventListener('change',numberChange);
	//	fruits[i].addEventListener('keyup',numberChange);
	//	fruits[i].addEventListener('mouseup',numberChange);
	}
});
