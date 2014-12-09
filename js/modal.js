document.addEventListener('DOMContentLoaded', function(){

   overlayModal.myOverlay(); // init

}, false);


var overlayModal = ( function(window ){
		var d = document.getElementsByClassName('overlay-mask');
		var overlayClass = document.getElementsByClassName("overlay");
		var myClose = document.getElementsByClassName('close');


	function myOverlay () {	

		if(overlayClass.length === 0) {

			var overlay = document.createElement('div');
			var overlayMask = document.createElement('div');

			overlay.innerHTML = "<div class='modal_content'><div class='close'></div><h3>This is a modal content</h3></div>"
			overlay.style.display = 'block';
			overlay.className = "overlay";
			overlayMask.className = "overlay-mask showOverlay";

			document.body.appendChild(overlay);
			document.body.appendChild(overlayMask);
		};

			d.className = "showOverlay";
	}

	function closed () {
		d[0].className = d[0].className.replace("showOverlay", "");
		overlayClass[0].style.display = 'none';

	}


	function openOverlay ( element ) {

		myOverlay();
		if((d[0].className) === 'overlay-mask '){
			d[0].className = 'overlay-mask'+' ' + 'showOverlay';
		}

		myClose[0].addEventListener('click', function(){
			 closed();
		}, false);

	}


	return {
		triggerOverlay : openOverlay
	};

})(window);



window.onload = function () {
	var trigger = document.getElementsByClassName("overlay-trigger");
	for(var i=0;i<trigger.length;i++){
        trigger[i].addEventListener('click', function(){
        	var attribute = this.getAttribute("href");
        	overlayModal.triggerOverlay(attribute)
        }, false);
    }
};