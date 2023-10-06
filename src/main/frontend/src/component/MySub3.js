import style from "../css/MySub3.module.css"
export default function MySub3() {

    return (
        <div className={style.section}>
            <div className={[style.noBill,"disp-f-c","disp-f-a-c"].join(" ")}>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL+"/mySubsImg/icn-bill-none.png"} alt={""}/>
                    </div>
                    <p>이용 내역이 없습니다.</p>
                    <button onClick={()=>{window.location.href="/home"}}>구독 상품 보러가기</button>
                </div>
            </div>
        </div>
    );
};