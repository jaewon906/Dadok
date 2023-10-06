import style from "../css/MySub1.module.css"
import {Link, useLocation} from 'react-router-dom'
import Header_JW from "../component/jw_header";
import React, {useLayoutEffect, useState} from "react";
import axios from "axios";
import MySub1 from "../component/MySub1";
import MySub2 from "../component/MySub2";
import MySub3 from "../component/MySub3";
import MySub4 from "../component/MySub4";
import MySub5 from "../component/MySub5";
import MySub6 from "../component/MySub6";


function MySubscribe() {

    const [loading, setLoading] = useState(false)

    const location = useLocation()
    const menu = location.search.split("=")[1]

    useLayoutEffect(() => {

        axios.get(`/api/mySubscribe?menu=${menu}`)
            .then(res => {
                setLoading(true)
            })
            .catch(error => {
                setLoading(false)
                window.location.href = "./"
            });

    }, [location])


    return (
        <>{
            loading ? <>
                <Header_JW/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className={style.container}>
                        <div className={style.nav}>
                            <p>MY 구독</p>
                        </div>
                        <div style={{width: "100%", display: "flex"}}>
                            <div className={style.leftAside}>
                                <Link className={style.leftMenu} to={"?menu=MENU1"}>
                                    <p style={menu === "MENU1" || menu === undefined ? {color: "rgb(64, 143, 247)"} : {}}>구독
                                        중인 상품</p>
                                    <p style={menu === "MENU1" || menu === undefined? {color: "rgb(64, 143, 247)"} : {}}><i
                                        className="fa-solid fa-chevron-right"></i></p>
                                </Link>

                                <Link className={style.leftMenu} to={"?menu=MENU2"}>
                                    <p style={menu === "MENU2" ? {color: "rgb(64, 143, 247)"} : {}}>쿠폰함</p>
                                    <p style={menu === "MENU2" ? {color: "rgb(64, 143, 247)"} : {}}><i
                                        className="fa-solid fa-chevron-right"></i></p>
                                </Link>

                                <Link className={style.leftMenu} to={"?menu=MENU3"}>
                                    <p style={menu === "MENU3" ? {color: "rgb(64, 143, 247)"} : {}}>월별 이용 내역</p>
                                    <p style={menu === "MENU3" ? {color: "rgb(64, 143, 247)"} : {}}><i
                                        className="fa-solid fa-chevron-right"></i></p>
                                </Link>

                                <Link className={style.leftMenu} to={"?menu=MENU4"}>
                                    <p style={menu === "MENU4" ? {color: "rgb(64, 143, 247)"} : {}}>요금제 상품</p>
                                    <p style={menu === "MENU4" ? {color: "rgb(64, 143, 247)"} : {}}><i
                                        className="fa-solid fa-chevron-right"></i></p>
                                </Link>

                                <Link className={style.leftMenu} to={"?menu=MENU5"}>
                                    <p style={menu === "MENU5" ? {color: "rgb(64, 143, 247)"} : {}}>구독료 결제 정보</p>
                                    <p style={menu === "MENU5" ? {color: "rgb(64, 143, 247)"} : {}}><i
                                        className="fa-solid fa-chevron-right"></i></p>
                                </Link>

                                <Link className={style.leftMenu} to={"?menu=MENU6"}>
                                    <p style={menu === "MENU6" ? {color: "rgb(64, 143, 247)"} : {}}>MY 리뷰</p>
                                    <p style={menu === "MENU6" ? {color: "rgb(64, 143, 247)"} : {}}><i
                                        className="fa-solid fa-chevron-right"></i></p>
                                </Link>
                            </div>
                            <div className={style.main}>
                                {menu === "MENU1" || menu === undefined ?
                                   <MySub1/>
                                    :
                                    ""
                                }
                                {menu === "MENU2" ?
                                    <MySub2/> :
                                    ""
                                }
                                {menu === "MENU3" ?
                                    <MySub3/> :
                                    ""
                                }
                                {menu === "MENU4" ?
                                    <MySub4/> :
                                    ""
                                }
                                {menu === "MENU5" ?
                                    <MySub5/> :
                                    ""
                                }
                                {menu === "MENU6" ?
                                    <MySub6/> :
                                    ""
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </> : ""
        }</>)

}


export default MySubscribe;

