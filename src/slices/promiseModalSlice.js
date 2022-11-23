import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    confirm: "",
};

export const promiseModalSlice = createSlice({
    name: "promiseModal",
    initialState,
    reducers: {
        setOpenModal: (state) => {
            state.isOpen = true;
        },
        setCloseModal: () => {
            return { ...initialState };
        },
        setConfirm: (state, { payload }) => {
            state.confirm = payload;
        },
    },
});

export const { setOpenModal, setCloseModal, setConfirm } =
    promiseModalSlice.actions;

export default promiseModalSlice.reducer;
