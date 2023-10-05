import Header_JW from "../component/jw_header";
import style from "../css/loginPage.module.css"
import {Link} from "react-router-dom";
import axios from "axios";
export default function LoginPage() {


    function loginWithKakao() {
           window.location.href  = `https://kauth.kakao.com/oauth/authorize?client_id=${'ba1dbc690bf2094c4d036e94b7c1e6bc'}&redirect_uri=${'http://43.201.219.24/kakao/oauth'}&response_type=code`
    }
    function loginWithNaver() {
       axios.get("/api/logout")
        alert("df")
    }
    function notComplete(){
        window.alert("구현중입니다.")
    }

    return (
        <>
            <Header_JW/>
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.section1}>
                        <h1>어떤 방법으로</h1>
                        <h1>로그인 하시겠어요?</h1><br/>
                        <span>고객님을 위한 다양한 로그인 방식을 제공합니다.</span>
                    </div>
                    <div className={style.section2}>
                        <table className={style.iconLogin}>
                            <tbody>
                            <tr>
                                <td>
                                    <button onClick={loginWithKakao} className={style.kakaoLogin}></button>
                                </td>
                                <td>
                                    <button onClick={loginWithNaver} className={style.naverLogin}></button>
                                </td>
                                <td>
                                    <button onClick={notComplete} className={style.tossLogin}></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={style.section3}>
                        <button onClick={notComplete}>회원가입</button>
                        <div className={style.findIdPw}>
                            <Link to={""}>아이디/비밀번호 찾기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};