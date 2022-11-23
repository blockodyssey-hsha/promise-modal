import React, {
    createContext,
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

export const DialogContext = createContext(() => {
    throw new Error("Component is not wrapped with a ModalProvider.");
});

export default function ModalProvider({ children }) {
    const promiseInfo = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleDialog = useCallback(() => {
        return new Promise((resolve) => {
            promiseInfo.current = resolve;
            setIsOpen(true);
        });
    }, []);

    const onConfirm = useCallback(() => {
        promiseInfo.current(true);
        promiseInfo.current = null;
        setIsOpen(false);
    }, []);

    const onClose = useCallback(() => {
        promiseInfo.current(false);
        promiseInfo.current = null;
        setIsOpen(false);
    }, []);

    const value = useMemo(
        () => ({ handleDialog, onConfirm, onClose, isOpen }),
        [handleDialog, onClose, onConfirm, isOpen]
    );

    return (
        <DialogContext.Provider value={value}>
            {children}
        </DialogContext.Provider>
    );
}
