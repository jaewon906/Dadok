import style from "../css/subscribeModal.module.css";
import axios from "axios";
import getUserInfo from "./getUserInfo";

export default function Payment(props) {

    const username = props.username
    const email = props.email
    const userNumber = getUserInfo(3)
    const price = props.price

    function onClickPayment() {
        /* 1. 가맹점 식별하기 */
        const {IMP} = window;
        const code = 'imp14397622'
        IMP.init(code);

        /* 2. 결제 데이터 정의하기 */
        const data = {
            pg: 'html5_inicis',                           // PG사
            pay_method: 'card',                           // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
            amount: 100,                                 // 결제금액
            name: 'Da독',                  // 주문명
            buyer_name: username,                           // 구매자 이름
            buyer_tel: "",                     // 구매자 전화번호
            buyer_email: email,               // 구매자 이메일
            buyer_addr: "",                    // 구매자 주소
            buyer_postcode: userNumber,                      // 구매자 우편번호
        };

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    }

    /* 3. 콜백 함수 정의하기 */
    function callback(response) {

        const {
            success,
            merchant_uid,
            amount,
            error_msg,
            imp_uid,
            pay_method,
            name,
            paid_amount,
            currency,
            pg_provider,
            pg_type,
            pg_tid,
            apply_num,
            buyer_nane,
            buyer_email,
            buyer_tel,
            buyer_addr,
            buyer_postcode,
            custom_data,
            status,
            paid_at,
            receipt_url,
            card_name,
            bank_name,
            card_quota,
            card_number
        } = response;

        if (!success) {

            const sessionStorage = window.sessionStorage

            let items = sessionStorage.getItem("key");
            const a= encodeURIComponent(items.toString())

            console.log(a)
            axios.post("/api/user/order", null, {
                params: {
                    items:a,
                    userNumber : userNumber
                }
            })
                .then(() => {
                    window.sessionStorage.clear()
                    window.location.href = `purchase/result?userNumber=${userNumber}&merchant_uid=${merchant_uid}`
                })
                .catch(e => {
                    alert("error")
                    console.error(e)
                    console.error("서버로 결제 내용을 보내는데 실패했습니다.")
                })

        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    }


    return (
        <>
            <button className={style.purchaseBtn} onClick={onClickPayment}>약관 동의하고 구독서비스 가입하기</button>
        </>
    );
}

