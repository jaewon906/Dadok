import style from '../css/mj_mypage.module.css'

import Header_JW from '../component/jw_header';
import { Routes, Route, Link } from 'react-router-dom'



function Mj_mypage() {

    return (
        <>
            <Header_JW />
            <div className={style.mypage_container}>
                <div className={style.both_mypage_container}>
                    <div className={style.left_mypage_container}>
                        <div className={style.left_mypage_menu} >
                            <div className={style.mypage_menu_list} >
                                <h4>MY 구독</h4>
                                <Link to='/home'>구독 중인 상품<div style={{ display: "inline-block" }}>▶</div></Link>
                                <Link to='/coupon'>쿠폰함 ▶</Link>
                                <Link to='/month'>월별 이용 내역▶</Link>
                                <Link to='/payment'>구독료 결제 정보▶</Link>
                            </div>
                        </div>
                    </div>
                    <Right_mypage_menu />
                </div>
            </div >
        </>
    );
}


function Right_mypage_menu() {

    const sessionStorage = window.sessionStorage;
    // JSON으로 변환한 데이터를 "key" 값으로 저장
    const getKey = sessionStorage.getItem("key");
    // 불러온 JSON 파일을 JS로 변환
    const choiceItem = JSON.parse(getKey)
    console.log(choiceItem)

    let submitDay = new Date();

    return (
        <>
            <div className={style.right_mypage_menu}>
                <section className="py-3 col-lg-8">
                    <div className="container px-5" style={{ padding: "0px", margin: "0px", width: "1240px" }}>
                        <h1 className="fw-bolder fs-5 mb-4">user님이 구독신청 상품입니다.</h1>
                        {
                            choiceItem.map((value, idx) => {
                                return (
                                    <div className={`card border-0 shadow rounded-3 ${style.mj_cardStyle} `}>
                                        <div className="card-body">
                                            <div className="row gx-0">
                                                <div className="col-lg-6 col-lg-5">
                                                    <div className={`p-md-4`}>
                                                        <div className="mb-2"><img src={value.url} className={style.mj_logo_img} alt="" /></div>
                                                        <div className="h2 fw-bolder"></div>
                                                        <p>{value.title}</p>
                                                        <p>{value.detail}</p>
                                                        <h6>{Math.round(
                                                            (1 - (value.price - value.discount) / value.price) * 100) + "%"}할인</h6>
                                                        <h5>{value.price}원</h5>
                                                        <a className="stretched-link" href="#!">장바구니에서 비우기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                </section>
                <section className='py-5'>
                    <div className="container px-5">
                        <div className="row gx-5">
                            <div className="col-xl-8">
                                <h2 className="fw-bolder fs-5 mb-4">계정을 연결해주세요!</h2>
                                <div className="mb-4">
                                    <div className="small text-muted">계정 연결 전까지는 구독료가 발생되지 않습니다.<br></br>
                                        신청일 이후 40일이 지나면 신청내역이 자동으로 삭제됩니다.</div>
                                </div>
                                {
                                    choiceItem.map((value, idx) => {
                                        return (
                                            <div className="col-xl-12">
                                                <div className="card border-0 h-100">
                                                    <div className={`card-body p-4 border-0 shadow ${style.mj_cardStyle}`}>
                                                        <div className="d-flex h-100 align-items-center justify-content-center">
                                                            <div className="text-center">
                                                                <div className="h6 fw-bolder">{value.title}
                                                                    {(console.log(value.title))}</div>
                                                                <p className="text-muted mb-4">
                                                                    {`신청일: ${submitDay.toLocaleDateString().slice(0, -1)}`}
                                                                    <br />
                                                                    <a href="#!">계정 주소 press@domain.com</a>
                                                                </p>
                                                                <button>계정 연결하기</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container px-5">
                        <h2 className="fw-bolder fs-5 mb-4">user의 성향에 맞는 추가 구독 상품 추천</h2>
                        <div className="row gx-5">
                            <div className="col-lg-4 mb-5">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src="https://www.shutterstock.com/image-photo/funny-red-welsh-corgi-pembroke-260nw-2042038094.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">애견용품</div>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">견생냥품</div></a>
                                        <p className="card-text mb-0">추천해드릴 만한 상품 설명</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="small">
                                                    <div className="fw-bold">추가로 신청하기</div>
                                                    <div className="text-muted">{`${submitDay.toLocaleDateString().slice(0, -1)} 까지 신청 시 추가할인 !`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src="https://san.chosun.com/news/photo/202302/22412_82258_3814.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">애견용품</div>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">견생냥품</div></a>
                                        <p className="card-text mb-0">추천해드릴 만한 상품 설명</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="small">
                                                    <div className="fw-bold">추가로 신청하기</div>
                                                    <div className="text-muted">{`${submitDay.toLocaleDateString().slice(0, -1)} 까지 신청 시 추가할인 !`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src="https://src.hidoc.co.kr/image/lib/2022/7/20/1658306424525_0.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">애견용품</div>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">견생냥품</div></a>
                                        <p className="card-text mb-0">추천해드릴 만한 상품 설명</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="small">
                                                    <div className="fw-bold">추가로 신청하기</div>
                                                    <div className="text-muted">{`${submitDay.toLocaleDateString().slice(0, -1)} 까지 신청 시 추가할인 !`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-end mb-5 mb-xl-0">
                                <a className="text-decoration-none" href="#!">
                                    추가 상품 더보기
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}


export default Mj_mypage;

