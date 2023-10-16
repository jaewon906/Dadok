import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollTop from "./js/jw_scrollTop";
import rootReducer from "./data/jw_combineReducers";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import App_jw from "./component/jw_App";
import TopBtn from "./component/jw_topBtn";
import Footer from "./component/jw_footer";


const store = configureStore({
    reducer: rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollTop/>
            <div style={{width:"100vw", height:"auto", minWidth:'1440px', backgroundColor: "rgb(245,245,245)"}}>
                <App_jw/>
                <Footer/>
                <TopBtn/>
            </div>
        </BrowserRouter>
    </Provider>
);

