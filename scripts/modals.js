var modal_maker = (function() {
    'use strict';

    var modalstring = document.createElement('div'),
        modal_overlay = document.createElement('div'),
        text_content = document.createElement('p'),
        modal_container = document.querySelector('.modal-area');

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
        modal_container.appendChild(modalstring);
        modalstring.classList.add('init');
        appendToBody(modal_overlay);
        text_content.textContent = this.dataset.modalText;
        modalstring.appendChild(text_content);
    };
    var closeModal = function(evt) {
        if (evt.target.classList.contains('modal-close-btn')) {
            modal_container.removeChild(modalstring);
            removeNode(modal_overlay);
        }
    };
    return {
        launch: invokeModal,
        remove: closeModal
    };
})();
