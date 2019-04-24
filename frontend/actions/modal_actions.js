export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CONFIRM_MODAL = "CONFIRM_MODAL";

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal,
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const openConfirmModal = (modal, booking) => {
    return {
        type: CONFIRM_MODAL,
        modal,
        booking
    }
}