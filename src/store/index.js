import { combineReducers, configureStore } from "@reduxjs/toolkit";

import legacyModalSlice from "../slices/legacyModalSlice";
import promiseModalSlice from "../slices/promiseModalSlice";

const reducer = (state, action) =>
    combineReducers({ legacyModalSlice, promiseModalSlice })(state, action);

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ["legacyModalSlice/setOpenModal"],
                // Ignore these field paths in all actions
                ignoredActionPaths: [],
                // Ignore these paths in the state
                ignoredPaths: [
                    "legacyModalSlice.confirmHandler",
                    "legacyModalSlice.cancelHandler",
                ],
            },
        }),
    devTools: process.env.NODE_ENV !== "production",
});
