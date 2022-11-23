import React, { useState } from "react";
import Modal from "react-modal";

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

const ModalCom = ({ isOpen, confirmHandler, cancelHandler }) => {
    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <h2>Legacy Modal</h2>
            <button onClick={confirmHandler}>확인</button>
            <button onClick={cancelHandler}>취소</button>
            <div>I am a modal</div>
        </Modal>
    );
};

const LegacyModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openHandler = () => setIsOpen(true);

    const confirmHandler = () => {
        alert("확인");
        setIsOpen(false);
    };
    const cancelHandler = () => {
        alert("취소");
        setIsOpen(false);
    };
    return (
        <>
            <div style={back}>
                <button onClick={openHandler}>Open LegacyModal</button>
            </div>
            <ModalCom
                isOpen={modalIsOpen}
                confirmHandler={confirmHandler}
                cancelHandler={cancelHandler}
            />
        </>
    );
};

export default LegacyModal;
