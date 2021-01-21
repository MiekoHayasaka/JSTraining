'use strict';
window.addEventListener('load',()=>{
	const hides=document.getElementsByClassName('hide');
	for(let ele of hides){
		ele.addEventListener("mouseover",(eve)=>{
			eve.target.style.color='blue';
		});
		ele.addEventListener("mouseout",(eve)=>{
			eve.target.style.color='#aaa';
			eve.target.style.fontSize='16px';
		});
		ele.addEventListener("click",(eve)=>{
			eve.target.style.fontSize='40px';
		});
	}
});