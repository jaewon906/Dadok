import style from "../css/MySub1.module.css";
import getUserInfo from "../js/getUserInfo";
import cmStyle from "../css/commom.css"
import {month} from "../js/month";
export default function MySub1() {


    return(
        <div className={style.section}>
            <div className={[style.banner, "disp-f-s-b"].join(" ")}>
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
                                <p>{month()}월 예상 구독료</p>
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
            <div className={[style.banner, style.banner2, "disp-f-d-c"].join(" ")}>
                <div className={["disp-f-s-b", style.couponUpper].join(" ")}>
                    <p>할인 쿠폰</p>
                    <div className={[style.choiceBtn, "disp-f-a-c", "disp-f-c"].join(" ")}>선택하기</div>
                </div>
                <div className={[style.couponList, "disp-f-c"].join(" ")}>
                    <div className={[style.couponSub, "disp-f-d-c", "disp-f-s-b", "disp-f-a-c"].join(" ")}>
                        <div className={["circle", style.plusBtn, "disp-f-a-c", "disp-f-c"].join(" ")}>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <p>고객님, 사용 가능한 쿠폰을 확인 해 보세요!</p>
                    </div>
                </div>
            </div>
            <div className={false? style.subItems : style.noSubItems}>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL+"/mySubsImg/no-subs.png"} alt={""}/>
                    </div>
                    <p>구독 중인 상품이 없습니다.</p>
                    <button onClick={()=>{window.location.href="/home"}}>구독 상품 보러가기</button>
                </div>

            </div>
        </div>
    )
};