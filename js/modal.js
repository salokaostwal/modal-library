document.addEventListener('DOMContentLoaded', function(){
  var overlayMask = document.createElement('div');
  	overlayMask.className = 'overlay-mask';
  var overlayContainer = document.createElement('div');
    overlayContainer.className = 'overlay-container';
    overlayContainer.innerHTML = '<div class="close"></div><h3>This is the modal content</h3>';

  document.body.appendChild(overlayMask);
  document.body.appendChild(overlayContainer);

  document.querySelector('.overlay-trigger').onclick = function(){	
  	overlayMask.style.display = 'block';
    overlayContainer.style.display = 'block';
  }

  overlayMask.addEventListener("click",function(){	
  	overlayMask.style.display = 'none';
    overlayContainer.style.display = 'none';
  });


  var btnclose = document.querySelector(".close");
    btnclose.addEventListener("click",function(){  
      overlayMask.style.display = 'none';
      overlayContainer.style.display = 'none';
    });
}, false);



