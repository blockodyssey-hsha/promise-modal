import React, { useState } from "react";
import Modal from "react-modal";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setCloseModal, setOpenModal } from "./slices/legacyModalSlice";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

const back = {
    margin: "0px auto",
    width: "200px",
    height: "100px",
    background: "beige",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const ModalCom = () => {
    const { isOpen, confirmHandler, cancelHandler } = useSelector(
        (state) => state.legacyModalSlice
    );
    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <h2>Redux Legacy Modal</h2>
            <button onClick={confirmHandler}>확인</button>
            <button onClick={cancelHandler}>취소</button>
            <div>I am a modal</div>
        </Modal>
    );
};

const ReduxLegacyModal = () => {
    const dispatch = useDispatch();

    const confirmHandler = () => {
        alert("확인");
        dispatch(setCloseModal());
    };
    const cancelHandler = () => {
        alert("취소");
        dispatch(setCloseModal());
    };

    const openHandler = () =>
        dispatch(setOpenModal({ confirmHandler, cancelHandler }));

    return (
        <>
            <div style={back}>
                <button onClick={openHandler}>Open ReduxLegacyModal</button>
            </div>
            <ModalCom />
        </>
    );
};

export default ReduxLegacyModal;
