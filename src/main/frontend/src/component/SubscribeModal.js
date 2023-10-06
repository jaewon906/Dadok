import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import style from '../css/subscribeModal.module.css'
import cmStyle from '../css/commom.css'
import {useDispatch} from "react-redux"
import {subscribeModalRdc} from "../data/jw_data";
import getUserInfo from "../additional_features/getUserInfo";
import Payment from "../js/Payment";

let t1 = false,
    t2 = false,
    t3 = false
export default function SubscribeModal() {
    const
        [allAgree, setAllAgree] = useState(false),
        [term1, setTerm1] = useState(false),
        [term2, setTerm2] = useState(false),
        [term3, setTerm3] = useState(false),
        [a, setA] = useState(),
        [b, setB] = useState(),
        dispatch = useDispatch();

    let purchase = false

    document.body.style = "overflow:hidden"


    useEffect(() => {
        setB(document.documentElement.scrollTop + document.documentElement.clientHeight * 0.15)
    }, [])

    function closeFn(e) {
        document.body.style = "overflow:none"

        dispatch(subscribeModalRdc())
    }

    const agreeAllTerms = () => {

        if (allAgree === false) {
            setTerm1(true);
            setTerm2(true);
            setTerm3(true);
            t1=true
            t2=true
            t3=true
            setAllAgree(true);
        } else {

            setTerm1(false);
            setTerm2(false);
            setTerm3(false);
            t1=false
            t2=false
            t3=false
            setAllAgree(false);
        }

    }

    const agreeTerm = (e) => {
        const termId = e.target.id

        switch (termId){
            case "term1" : {
                setTerm1(val=>!val);
                t1 = !t1
                break;
            }
            case "term2" : {
                setTerm2(val=>!val);
                t2 = !t2
                break;
            }
            case "term3" : {
                setTerm3(val=>!val)
                t3 = !t3
                break;
            }
        }

        if(t1 === true && t2 === true && t3 === true){
            setAllAgree(true)
        }
        else{
            setAllAgree(false)
        }

        console.log(allAgree)
    }

    const goToPurchase = () =>{
        purchase = true
    }

    return (
        <>
            <div style={{display: (a ? "none" : "flex")}} className={style.container}>
                {b >= 10 ? <div style={{top: b}} className={style.modal}>
                    <div className={[style.modalHeader, "disp-f-a-c", "disp-f-s-b"].join(" ")}>
                        <p>약관 동의 후 구독 가입하기</p>
                        <div className={style.xBtn} onClick={closeFn}>
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                    <div className={style.modalBody}>
                        <p>구독료는</p>
                        <p>아래 정보로 청구됩니다.</p>
                        <div className={style.userInfo}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>이름</td>
                                    <td>{getUserInfo(0)}</td>
                                </tr>
                                <tr>
                                    <td>ID</td>
                                    <td>{getUserInfo(3)}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={[style.terms, "disp-f-a-c"].join(" ")}>
                            <div onClick={agreeAllTerms}
                                 className={["circle", "disp-f-a-c", "disp-f-c", style.agreeAll].join(" ")}
                                 style={allAgree ? {backgroundColor:"rgb(64, 150, 247)", color:"white"} : {backgroundColor:"white", color:"#cccccc"}}
                            >
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <p>약관 전체 동의</p>
                        </div>
                        <div style={{padding:"20px 0", marginBottom:"30px"}}>
                            <div className={[style.term, "disp-f-a-c", "disp-f-s-b"].join(" ")}>
                                <div style={{display: "flex"}}>
                                    <i id={"term1"}
                                       onClick={agreeTerm}
                                       className="fa-solid fa-check"
                                       style={term1 ? {color: "rgb(64, 150, 247)"} : {color: "#cccccc"}}>
                                    </i>
                                    <p style={term1 ? {color:"black"} : {color:"#cccccc"}}>다독 서비스 이용약관 동의 [필수]</p>
                                </div>
                            </div>
                            <div className={[style.term, "disp-f-a-c", "disp-f-s-b"].join(" ")}>
                                <div style={{display: "flex"}}>
                                    <i
                                        id={"term2"}
                                        onClick={agreeTerm}
                                        className="fa-solid fa-check"
                                        style={term2 ? {color: "rgb(64, 150, 247)"} : {color: "#cccccc"}}>

                                    </i>
                                    <p style={term2 ? {color:"black"} : {color:"#cccccc"}}>개인정보 수집 및 이용 동의 [필수]</p>
                                </div>
                            </div>
                            <div className={[style.term, "disp-f-a-c", "disp-f-s-b"].join(" ")}>
                                <div style={{display: "flex"}}>
                                    <i
                                        id={"term3"}
                                        onClick={agreeTerm}
                                        className="fa-solid fa-check"
                                        style={term3 ? {color: "rgb(64, 150, 247)"} : {color: "#cccccc"}}>

                                    </i>
                                    <p style={term3 ? {color:"black"} : {color:"#cccccc"}}>개인정보 제 3자 제공 동의 [필수]</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.notice}>
                            <p>※ 구독 신청 전 꼭 읽어주세요</p>
                            <ul>
                                <li>
                                    다독은 유플러스 유독을 클론 코딩한 사이트로 실제 구독 되는것이 아닙니다.
                                    구독 상품 정보와 거래에 대한 책임은 판매자에게 있습니다.
                                </li>
                                <br/>
                                <li>다독은 만 19세 이상 전 국민 모두 가입할 수 있습니다. 법인, 청소년은 가입할 수 없습니다.
                                    일리 커피머신&커피캡슐과 같은 할부형 상품은 개인사업자도 가입할 수 없습니다.
                                </li>
                                <br/>
                                <li>다독은 월 선불형 구독 서비스로 가입일로부터 1개월 동안 사용할 수 있습니다.
                                    가입 시점에 요금이 청구되며, 중간에 해지하더라도 다음 결제일 전까지
                                    이용할 수 있습니다.

                                </li>
                                <br/>
                                <li>다독의 구독 컨텐츠를 구매 시 테스트 결제 모듈로 진행하기 때문에 금액은 빠져나가나
                                    실제 결제되는 것은 아닙니다. 당일 오전 12시 이전에 모든 거래 금액이 환불조치 됩니다.
                                    해지하려면 서비스 가입 후 7일 안에 이메일 ploi9@naver.com 으로 접수해 주세요.
                                </li>
                                <br/>
                                <li>다독에 가입하기 전 제휴사 별 상세 유의사항을 반드시 확인해 주세요.
                                    제휴사 별 상세 유의사항은 제휴사를 선택하면 나타나는 자세히 보기 화면 아래에서 확인할 수 있습니다.
                                </li>
                                <br/>
                            </ul>
                        </div>
                    </div>
                    <div className={style.modalFooter}>
                        {allAgree ?
                            <Payment username={getUserInfo(0)} email={getUserInfo(3)} price={""}/> :
                            <div className={style.notPurchaseBtn}>약관 동의하고 구독서비스 가입하기</div>
                        }
                    </div>

                </div> : ""}
            </div>
        </>
    )

}

