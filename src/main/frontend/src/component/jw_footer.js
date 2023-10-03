import style from '../css/jw_footer.module.css'

function FooterJW(){

    return(
        <>
        <div className={style.container}>
            <div className={style.textArea}>
                <div>개인정보처리방침</div>
                <div>이용약관</div>
</div>
            <div className={style.textArea}>
                <div>(주) JW 경기도 성남시 중원구 금광로 11 대표이사 홍길동</div>
                <div>사업자등록번호 123-12-123123</div>
                <div>통신판매신고 제 2023-서울용산-11111호 사업자정보확인</div>
                <div>입점/제휴문의 ploi9@naver.com </div>
            </div>
            <div className={style.textArea}>
                <div>Copyright ⓒ JW Corp. All Rights Reserved.</div>
            </div>
        </div>
        </>
    )
}
export default FooterJW;