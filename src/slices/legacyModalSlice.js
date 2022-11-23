import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    confirmHandler: null,
    cancelHandler: null,
};

export const legacyModalSlice = createSlice({
    name: "legacyModal",
    initialState,
    reducers: {
        setOpenModal: (state, { payload }) => {
            state.isOpen = true;
            state.confirmHandler = payload.confirmHandler;
            state.cancelHandler = payload.cancelHandler;
        },
        setCloseModal: () => {
            return { ...initialState };
        },
    },
});

export const { setOpenModal, setCloseModal } = legacyModalSlice.actions;

export default legacyModalSlice.reducer;
