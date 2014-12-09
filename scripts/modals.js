var modal_maker = (function() {
    'use strict';

    var modalstring = document.createElement('div'),
        modal_overlay = document.createElement('div'),
        text_content = document.createElement('p'),
        body_wrap = document.querySelector('.body-wrap');

    modal_overlay.classList.add('modal-overlay');
    modalstring.classList.add('modal-wrap');
    modalstring.innerHTML = "<button class='modal-close-btn'>Close</button>";

    var appendToBody = function(args) {
        document.body.appendChild(args);
    };
    var removeNode = function(args) {
        document.body.removeChild(args);
    };
    var invokeModal = function() {
        body_wrap.insertBefore(modalstring, this);
        body_wrap.insertBefore(modal_overlay, this);
        text_content.textContent = this.dataset.modalText;
        modalstring.appendChild(text_content);
    };
    var closeModal = function(evt) {
        if (evt.target.classList.contains('modal-close-btn')) {
            body_wrap.removeChild(modalstring);
            body_wrap.removeChild(modal_overlay);
        }
    };
    return {
        launch: invokeModal,
        remove: closeModal
    };
})();
