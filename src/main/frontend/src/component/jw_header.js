import style from '../css/jw_header.module.css'
import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import getUserInfo from "../additional_features/getUserInfo";
import axios from "axios";

function Header_JW() {

    let a = [false, false, false, false]
    const [onOff, setOnOff] = useState(a)
    const location = useLocation()
    const endpoint = location.pathname.split('/')[location.pathname.split('/').length - 1]

    useEffect(() => {
        switch (endpoint) {
            case "home":
                a[0] = true;
                break;
            case "myInfo":
                a[1] = true;
                break;
            case "event":
                a[2] = true;
                break;
            case "helpdesk":
                a[3] = true;
                break;
        }

    }, [location])

    const onOffFunction = (e) => {
        let b = e.target.id
        a = [false, false, false, false]

        for (let i = 0; i < a.length; i++) {
            if (b === `header${i + 1}`) {
                a[i] = true
            }
        }
        setOnOff(a)
    }

    const notComplete = () => {
        alert("구현중입니다!")
    }

    const logout = () => {
        axios.post("/api/logout", null)
            .then(res => {
                window.location.reload();
            })
            .catch()
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <div className={style.menu}>
                        <a style={{marginLeft:"-30px"}} href='/home' onClick={onOffFunction}><img src={process.env.PUBLIC_URL + '/logo.png'} alt=''/></a>
                        <Link to='/home' className={style.linkStyle}>
                            <button id='header1' onClick={onOffFunction}
                                    className={(onOff[0] ? `${style.selected}` : null)}>구독신청
                            </button>
                        </Link>
                        <Link to='/home/mySubscribe' className={style.linkStyle}>
                            <button id='header2' onClick={onOffFunction}
                                    className={(onOff[1] ? `${style.selected}` : null)}>MY 구독
                            </button>
                        </Link>
                        <Link to='/home' className={style.linkStyle}>
                            <button id='header3' onClick={notComplete}
                                    className={(onOff[2] ? `${style.selected}` : null)}>이벤트
                            </button>
                        </Link>
                        <Link to='/home' className={style.linkStyle}>
                            <button id='header4' onClick={notComplete}
                                    className={(onOff[3] ? `${style.selected}` : null)}>고객센터
                            </button>
                        </Link>
                    </div>
                    <div style={{display: 'flex', alignItems: "center"}}>
                        {getUserInfo(1) ?
                            <>
                                <div className={style.user}>
                                    <div><img src={getUserInfo(2)} alt={""}/></div>
                                </div>
                            </> :
                            ""}
                        <div className={style.myInfo}>
                            <Link to={!getUserInfo(1)?
                                "/login":
                                "/home/mySubscribe"}>
                                <i className="fa-regular fa-user"></i> MY구독
                            </Link>
                        </div>
                        <div className={style.logIn}>
                            {!getUserInfo(1) ?
                                <Link to='/login'>
                                    <i style={{marginRight: '5px'}}
                                       className="fa-solid  fa-arrow-right-to-bracket"/> 로그인
                                </Link> :
                                <Link onClick={logout}>
                                    <i style={{marginRight: '5px'}}
                                       className="fa-solid  fa-arrow-right-to-bracket"/> 로그아웃
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header_JW;