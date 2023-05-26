function handlerModal() {
    const modal = document.querySelector('.modal__controller');
    const modalButtons = document.querySelectorAll('.btn__modal');

    for (let i = 0; i < modalButtons.length; i++) {
        modalButtons[i].addEventListener('click', () => {
            modal.showModal();

            closeModal();
        })
    }
}

function closeModal() {
    const modal = document.querySelector('.modal__controller');
    const buttonClose = document.querySelector('.btn__modal--close');

    buttonClose.addEventListener('click', () => {
        modal.close();
    })
}

handlerModal();