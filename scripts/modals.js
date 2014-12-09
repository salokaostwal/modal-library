var modal_maker = (function() {
  'use strict';

  var modalstring = document.createElement('div'),
    modal_container = document.querySelector('.modal-area'),
    body = document.querySelector('body');
  modalstring.innerHTML = "<button class='modal-close-btn'>close</button>";
  modalstring.classList.add('modal-wrap');

  var toggleOverlay = function() {
    body.classList.toggle('overlay');
  };
  var invokeModal = function() {
    modal_container.appendChild(modalstring);
    modalstring.classList.add('init');
    toggleOverlay();
  };
  var closeModal = function(evt) {
    if(evt.target.classList.contains('modal-close-btn')) {
      modal_container.removeChild(modalstring);
      toggleOverlay();
    }
  };
  return {
    launch: invokeModal,
    remove: closeModal
  };
})();
