import axios from "axios";
import {useLocation} from "react-router-dom";

export default function OauthLogin() {

    const code = useLocation()

    axios.get("/api/kakaoLogin",{
        params:{
            code:code.search.split("code=")[1]
        }
    })
        .then( (res)=> {
            console.log("로그인 완료")
            console.log(res.data)
            console.log(res)
            // window.location.href="/home"
        })
        .catch(err=>{console.error(err)})

    return (
        <div style={{
            minWidth: '1440px',
            width: '100vw',
            height: '100vh',
            position: "absolute",
            zIndex: '100',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column'
            }}>
                <p style={{fontSize: '40px', fontWeight:'bold'}}>로그인 중 입니다.</p><br/>
                <p style={{fontSize: '20px', fontWeight:'bold'}}>잠시만 기다려주세요!</p>
            </div>
        </div>
    )
};