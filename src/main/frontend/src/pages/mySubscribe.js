import style from "../css/MySubscribe.module.css"
import {Link, useLocation} from 'react-router-dom'
import Header_JW from "../component/jw_header";
import {useLayoutEffect, useState} from "react";
import axios from "axios";
import getUserInfo from "../additional_features/getUserInfo";


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
                                   <div className={style.section}>
                                        <div className={style.banner}>
                                            <div className={style.leftBanner}>
                                                <h2>{getUserInfo(0) + "님이"}</h2>
                                                <h2>{"구독 중인 상품이 없습니다."}</h2>
                                            </div>
                                            <div className={style.rightBanner}>
                                                <ul>
                                                    <li>
                                                        <div className={style.subName}>
                                                            <p>구독료 합계</p>
                                                            <p>월 {0}원</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={style.subTotal}>
                                                            <p>{11}월 예상 구독료</p>
                                                            <p>월 {0}원</p>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <ul className={style.notice} type='circle'>
                                                    <li>가입하신 시점에 따라 결제하실 구독료가 달라질 수 있어요.</li>
                                                    <li>자세한 내용은 월별 이용 내역에서 확인해 주세요.</li>
                                                    <li>다독 상품은 최대 5개까지 동시에 이용이 가능합니다.</li>
                                                </ul>
                                            </div>
                                        </div>
                                       <div className={[style.banner, style.banner2].join(" ")}></div>
                                       <div className={!menu? style.subItems : style.noSubItems}>
                                           <div>
                                               <div>
                                                   <img src={"../../public/mySubsImg/no-subs.png"} alt={""}/>
                                               </div>
                                               <p>구독 중인 상품이 없습니다.</p>
                                               <button onClick={()=>{window.location.href="/home"}}>구독 상품 보러가기</button>
                                           </div>

                                       </div>
                                    </div>
                                    :
                                    ""
                                }
                                {menu === "MENU2" ?
                                    <div className={style.section}>

                                    </div> :
                                    ""
                                }
                                {menu === "MENU3" ?
                                    <div className={style.section}>

                                    </div> :
                                    ""
                                }
                                {menu === "MENU4" ?
                                    <div className={style.section}>

                                    </div> :
                                    ""
                                }
                                {menu === "MENU5" ?
                                    <div className={style.section}>

                                    </div> :
                                    ""
                                }
                                {menu === "MENU6" ?
                                    <div className={style.section}>

                                    </div> :
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

