'use strict';
window.addEventListener('load',()=>{
	let path='images/';
	let images=['cat1.jpg','cat2.jpg','cat3.jpg'];
	let index=0;
	let ele=document.getElementById('mainImage');
	ele.addEventListener('click',(eve)=>{
		eve.target.src=path+images[++index % images.length];
	});
});