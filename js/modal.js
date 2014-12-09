var overlayMask = document.createElement('div');
	overlayMask.className = 'overlay-mask';
	document.body.appendChild(overlayMask);


document.querySelector('.overlay-trigger').onclick = function(){	
	overlayMask.style.display = 'block';
}

overlayMask.addEventListener("click",function(){	
	overlayMask.style.display = 'none';
});
