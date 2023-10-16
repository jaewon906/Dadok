import ApplySubscribeJW from "../pages/jw_applySubscribe";
import Main from "../pages/jw_main";
import {Routes, Route, Outlet} from "react-router-dom";
import React from "react";
import Mj_detail_page from "../pages/mj_detail_page";
import MySubscribe from "../pages/MySubscribe";
import LoginPage from "../pages/loginPage";
import OauthLogin from "../js/loginLoading";

function App_jw() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/" element={<Outlet/>}>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="kakao/oauth" element={<OauthLogin/>}/>
                    <Route path="home/" element={<ApplySubscribeJW/>}/>
                    <Route path="home/" element={<Outlet/>}>
                        <Route path="category=/:contentsId" element={<Mj_detail_page/>}/>
                        <Route path="mySubscribe" element={<MySubscribe/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App_jw;
