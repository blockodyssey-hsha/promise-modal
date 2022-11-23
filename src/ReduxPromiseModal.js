import React from "react";

import Modal from "react-modal";
import { Provider, useDispatch, useSelector } from "react-redux";
import useCommonModal from "./hooks/useModal";
import { setCloseModal, setConfirm } from "./slices/promiseModalSlice";

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
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.promiseModalSlice.isOpen);
    const confirmHandler = () => {
        dispatch(setConfirm(true));
        dispatch(setCloseModal());
    };
    const closeHandler = () => {
        dispatch(setConfirm(false));
        dispatch(setCloseModal());
    };

    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <h2>Redux Legacy Modal</h2>
            <button onClick={confirmHandler}>확인</button>
            <button onClick={closeHandler}>취소</button>
            <div>I am a modal</div>
        </Modal>
    );
};

const ReduxPromiseModal = () => {
    const openModal = useCommonModal();

    const openHandler = async () => {
        const isConfirm = await openModal();
        if (isConfirm) alert("확인");
        else alert("취소");
    };
    return (
        <>
            <div style={back}>
                <button onClick={openHandler}>Open ReduxPromiseModal</button>
            </div>
            <ModalCom />
        </>
    );
};

export default ReduxPromiseModal;
