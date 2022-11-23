import { useDispatch } from "react-redux";
import { setOpenModal } from "../slices/promiseModalSlice";

import store from "../store";

const useCommonModal = () => {
    const dispatch = useDispatch();
    const open = () => {
        dispatch(setOpenModal());
        return new Promise((resolve) => {
            const unsubscribe = store.subscribe(() => {
                const { confirm } = store.getState().promiseModalSlice;
                resolve(confirm);
                unsubscribe();
            });
        });
    };
    return open;
};

export default useCommonModal;
