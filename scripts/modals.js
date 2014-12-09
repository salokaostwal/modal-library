var modal_maker = (function() {
    'use strict';

    var modalstring = document.createElement('div'),
        modal_container = document.querySelector('.modal-area'),
        modal_overlay = document.createElement('div');

    modal_overlay.classList.add('modal-overlay');
    modalstring.innerHTML = "<button class='modal-close-btn'>Close</button>";
    modalstring.classList.add('modal-wrap');


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
