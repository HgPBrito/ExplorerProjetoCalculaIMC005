export const Modal = {

    wrapper: document.querySelector(".modal-wrapper"),
    buttonClose: document.querySelector(".close"),
    message: document.querySelector("#result"),

    open() {
        Modal.wrapper.classList.add("open");
    },
    close() {
        Modal.wrapper.classList.remove("open");
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
}
