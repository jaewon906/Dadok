import style from "../css/MySub2.module.css"
import getUserInfo from "../additional_features/getUserInfo";
import cmStyle from "../css/commom.css"
import {useState} from "react";
export default function MySub2() {

    const [clicked, setClicked] = useState(true)

    const clickedStyle={
        color : "black",
        borderBottom : "2px solid black"
    }

    const notClickedStyle={
        color : "rgb(200,200,200)",
    }

    const isClicked =(e) =>{

        const id = e.target.id
        const tgr = 0

        if(id !== tgr){
            setClicked(val=>!val)
        }

    }

    return (
        <div className={style.section}>
            <div className={style.secHeader}>
                <p>{getUserInfo(0)}</p>
                <p>보유 중인 쿠폰이에요</p>
            </div>
            <div className={[style.couponCount,"disp-f"].join(" ")}>
                <div style={clicked ? clickedStyle: notClickedStyle} id={"c1"} onClick={isClicked} className={[style.couponHave, "disp-f-a-c","disp-f-s-b"].join(" ")}>
                    <p>구독 중인 쿠폰</p>
                    <div style={clicked ? {backgroundColor:"black"}:{backgroundColor:"rgb(200,200,200)"}} className={["circle", style.count,"disp-f-c", "disp-f-a-c"].join(" ")}>0</div>
                </div>
                <div style={!clicked ? clickedStyle: notClickedStyle} id={"c2"} onClick={isClicked} className={[style.couponHave, "disp-f-a-c","disp-f-s-b"].join(" ")}>
                    <p>Da독 할인 쿠폰</p>
                    <div style={!clicked ? {backgroundColor:"black"}:{backgroundColor:"rgb(200,200,200)"}} className={["circle", style.count, "disp-f-c", "disp-f-a-c"].join(" ")}>0</div>
                </div>
            </div>
            <div className={[style.noSubCoupons,"disp-f-c","disp-f-a-c"].join(" ")}>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL+"/mySubsImg/no-coupon.png"} alt={""}/>
                    </div>
                    <p>보유 중인 쿠폰이 없습니다.</p>
                    <button onClick={()=>{window.location.href="/home"}}>구독 상품 보러가기</button>
                </div>
            </div>
        </div>
    );
};