import { useState, useEffect, useRef } from "react";
import style from '../css/mj_detail.module.css'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import amountNotation from "../js/jw_amount_notation";



/* ↓ 전체 페이지에서 왼쪽 부분에 Detail 게시물에서 선택한 상품의 상세정보가 보여짐 */

function SideLeftBox(props) {
    const [data, setData] = useState([props.data]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const [imgUrl, setImgUrl] = useState('');
    let imgRef = useRef();


    useEffect(() => {
        setData(props.data)
        setIsLoading(val => !val)
    }, [])

    useEffect(() => {
        for (let i = 1; i < props.length.length; i++) {
            switch (props.data.id) {
                case `ID${i}`: {
                    setImgUrl(`/detailImg/detailImg_${i}.jpg`)
                }
            }
        }
    }, [])

    function scrollMove(x, y) {
        window.scrollTo({ top: y, left: x, behavior: 'smooth' });
    }
    return (
        <>
        <div className={style.left_side_box}>
            <div className={style.left_btn_box}>
                <button onClick={() => scrollMove(0, 0)}>상품 안내</button>
                <button onClick={() => scrollMove(0, 870)}>사용 방법</button>
                <button onClick={() => scrollMove(0, 1700)}>상세 정보</button>
                <button onClick={() => scrollMove(0, imgRef.current.height)}>유의 사항</button>
            </div>

            <div className={style.left_content_box}>
                <img ref={imgRef} src={process.env.PUBLIC_URL + imgUrl} alt={''}/>
                <Detailfooter />
            </div>
        </div></>
    )
}

function SideRightBox(props) {

    const [data, setData] = useState([props.data]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setData(props.data)
        setIsLoading(val => !val)
    }, [])

    const detailList = data

    const addCart =() =>{

    }

    return (
        <>{isLoading ? <div className={style.right_side_box}>
            <div className={style.right_detailcontent}>
                <div>
                    <div className={style.right_detail_text}>
                        <b style={{ fontSize: "35px" }}>{detailList.title}</b>
                        <img src={detailList.url} alt={''}/>
                    </div>
                    <button className={style.right_optionbtn}>{detailList.option}</button>
                    <div>
                        <div>
                            <small className={style.saleprice}>{'정가 '+amountNotation(detailList.price)+'원'}</small><br></br>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',width:'100%'}}>
                                <p>{'할인가 '+amountNotation(detailList.price - detailList.discount)+'원'}</p>
                                <span className={style.percent}>{Math.floor(100 * (detailList.discount / detailList.price))+'% 할인'}</span>
                            </div>
                            <button onClick={addCart} className={style.right_addbtn}>+ 담기</button>
                        </div>
                    </div>
                </div>

            </div>
            <Link to={'/home'} div className={style.right_detailbtn}>
                다른 구독 상품 보러가기
            </Link>
        </div> : ""}
        </>
    )
}

function Detailfooter() {
    return (
        <div className={style.detail_footer_box}>
            <div className={style.detail_footer_text}>
                <ul>
                    <p>서비스 안내</p>
                    <li>가입일을 기준으로 매달 자동 결제되는 상품입니다.</li>
                    <li>서비스 이용을 위해 이용약관 및 개인정보 제공'에 동의해야 합니다.</li>
                </ul>
                <ul>
                    <p>서비스 대상</p>
                    <li>만 19세 이상 고객님만 가입이 가능합니다.</li>
                </ul>
                <ul>
                    <p>서비스 해지</p>
                    <li>해지 신청을 하더라도 다음 결제일 전 날까지 서비스를 계속 이용할 수 있습니다. 결제일이 되면 자동 해지됩니다.</li>
                    <li>가입하신 후 콘텐츠를 한 편도 시청하지 않고, 결제일로부터 7일안에 해지 신청하는 경우 전액 환불 받을 수 있습니다. 고객센터로 문의해주세요.</li>
                    <li>제휴사 사이트에서 해지하셨을 경우, 제휴사 사정으로 해지 표시가 실시간으로 되지 않는 점 양해 부탁드립니다. 이 경우, 정확한 이용 기간은 제휴사 사이트에서 확인해주세요.</li>
                </ul>
                <ul>
                    <p>유의사항</p>
                    <li>이미 가입하신 고객의 경우, 현재 이용 중인 계정으로는 가입할 수 없습니다. 이용권이 만료된 이후 신청해주세요.</li>
                    <li>해당 사이트에서 멤버십 옵션을 변경한 경우, 변경된 옵션으로 최종 적용됩니다.</li>
                    <li>이용에 관해 궁금한 점은 고객센터 help.gudok.com/ko 또는 00-1234-4567로 문의해주세요.
                        ※ 상담 가능 시간 : 매일 오전 8시 ~ 오후 8시
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { SideLeftBox, SideRightBox, Detailfooter };