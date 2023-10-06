import style from '../css/jw_topBtn.module.css'
import {useState} from 'react';

// top 버튼 클릭시 최상단으로 이동하는 기능
function moveTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
}

function TopBtn() {

    const [btnMarginTop, setBtnMarginTop] = useState(document.documentElement.scrollTop + document.documentElement.clientHeight-100);
    const [btnMarginLeft, setBtnMarginLeft] = useState(document.documentElement.clientWidth + window.scrollX - 75);

    window.onscroll = () => {
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight-100)
        setBtnMarginLeft(document.documentElement.clientWidth + window.scrollX - 75)
    }
    window.onresize = () => {
        setBtnMarginTop(document.documentElement.scrollTop + document.documentElement.clientHeight-100)
        setBtnMarginLeft(document.documentElement.clientWidth + window.scrollX - 75)
    }
    return (
        <div onClick={moveTop} style={{position: 'absolute', top: `${btnMarginTop}px`, left:`${btnMarginLeft}px`}} className={style.topBtn}>
            <div className={style.topBtnArrow}><i className="fa-solid fa-arrow-up"></i></div>
        </div>
    )
}

export default TopBtn;
// import style from '../css/jw_topBtn.module.css'
// import {useState} from 'react';
//
// // top 버튼 클릭시 최상단으로 이동하는 기능
// function moveTop() {
//     window.scrollTo({top: 0, behavior: "smooth"})
// }
//
// function TopBtn() {
//     const [btnMarginTop, setBtnMarginTop] = useState(document.documentElement.scrollTop + 800);
//     window.onscroll = () => {
//         setBtnMarginTop(document.documentElement.scrollTop+ 800)
//         console.log(btnMarginTop)
//     }
//     window.onresize = () => {
//         setBtnMarginTop(document.documentElement.scrollTop+ 800)
//     }
//     return (
//         <div onClick={moveTop} style={{position: 'absolute', top: `${btnMarginTop}px`}} className={style.topBtn}>
//             <div className={style.topBtnArrow}><i className="fa-solid fa-arrow-up"></i></div>
//         </div>
//     )
// }
//
// export default TopBtn;
