import React, { useContext } from "react";
import Modal from "react-modal";
import { DialogContext } from "./context/ModalProvider";

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
    const { onConfirm, onClose, isOpen } = useContext(DialogContext);
    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <h2>Redux Legacy Modal</h2>
            <button onClick={onConfirm}>확인</button>
            <button onClick={onClose}>취소</button>
            <div>I am a modal</div>
        </Modal>
    );
};

const ContextPromiseModal = () => {
    const { handleDialog } = useContext(DialogContext);
    const openHandler = async () => {
        const isConfirm = await handleDialog();
        if (isConfirm) alert("확인");
        else alert("취소");
    };
    return (
        <>
            <div style={back}>
                <button onClick={openHandler}>Open ContextPromiseModal</button>
            </div>
            <ModalCom />
        </>
    );
};

export default ContextPromiseModal;
