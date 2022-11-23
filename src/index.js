import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import ContextPromiseModal from "./ContextPromiseModal";
import LegacyModal from "./LegacyModal";
import ReduxLegacyModal from "./ReduxLegacyModal";
import ReduxPromiseModal from "./ReduxPromiseModal";
import Modal from "react-modal";
import store from "./store";
import { Provider } from "react-redux";
import ModalProvider from "./context/ModalProvider";

Modal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ul>
                                    <li>
                                        <Link to="/case1">legacy modal</Link>
                                    </li>
                                    <li>
                                        <Link to="/case2">
                                            redux legacy modal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/case3">
                                            redux promise modal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/case4">
                                            context promise modal
                                        </Link>
                                    </li>
                                </ul>
                                <Outlet />
                            </>
                        }
                    >
                        <Route path="/case1" element={<LegacyModal />} />
                        <Route path="/case2" element={<ReduxLegacyModal />} />
                        <Route path="/case3" element={<ReduxPromiseModal />} />
                        <Route
                            path="/case4"
                            element={
                                <ModalProvider>
                                    <ContextPromiseModal />
                                </ModalProvider>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
