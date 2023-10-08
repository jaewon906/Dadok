import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import style from '../css/loginModal.module.css'
import {useDispatch, useSelector} from "react-redux"
import {loginModalRdc} from "../data/jw_data";

export default function LoginModal() {
    const isModal = useSelector(store => store.dataSet.loginModalOnOff),
        [width1, setWidth] = useState(window.innerWidth),
        [a, setA] = useState(),
        [b, setB] = useState(),
        dispatch = useDispatch();
    document.body.style = "overflow:hidden"

    window.onresize = () =>{
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }


    useEffect(() => {
        setB(document.documentElement.scrollTop + document.documentElement.clientHeight * 0.3)
    }, [])

    function closeFn(e) {
        document.body.style = "overflow:none"
        setA(isModal)

        dispatch(loginModalRdc(isModal))
    }

    return (
        <>
            <div style={{display: (a ? "none" : "flex"), width:width1}} className={style.container}>
                {b >= 10 ? <div style={{top: b}} className={style.modal}>
                    <div className={style.xBtn} onClick={closeFn}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <p style={{fontSize: '20px', fontWeight:"bold"}}> 지금 로그인 하시겠어요?</p>
                    <p style={{marginTop: '20px', color: 'rgb(100,100,100)'}}> 구독 신청을 계속 하시려면 로그인이 필요해요.</p>
                    <div className={style.select}>
                        <button onClick={closeFn} className={style.button1}>아니오</button>
                        <Link to='/login'>
                            <button onClick={closeFn} className={style.button2}>로그인 할게요</button>
                        </Link>
                    </div>
                </div> : ""}
            </div>
        </>
    )

}

