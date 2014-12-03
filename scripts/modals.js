var modal_maker = (function() {
  'use strict';

  var modalstring = document.createElement('div');
  modalstring.innerHTML = "<button class='close-btn'>close</button>";
  modalstring.classList.add('modal');

  return {
    invokeModal: function() {},
    closeModal: function() {}
  };
})();
