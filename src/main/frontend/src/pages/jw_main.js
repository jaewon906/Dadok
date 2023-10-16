import { useLayoutEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import gaspScrollTrigger from "../js/gsapScrollTrigger";
import style from "../css/jw_main.module.css";
export default function Main() {
  const imgUrl1 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-siwon.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-strawberrycong.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-tving.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-netflix2.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-youtubepremium2.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-doosonfood.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-tving.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-aboutPet.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-enfant.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-dagreen.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-millie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-eubos.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-modoo.png",
  ];
  const imgUrl2 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-yogiyo.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-vcoloring.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-welaaa.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-illy.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-npep.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-disney.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-npep.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-cjFoodVille.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-washswat.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-yogiyo.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-themarket.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-gs25.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-vcoloring_genie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-dagreen.png",
  ];
  const imgUrl3 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-welaaa.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-disney.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-vcoloring_genie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-dagreen.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-eubos.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-aboutPet.png",
  ];
  const imgUrl4 = [
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-strawberrycong.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-youtubepremium2.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-aboutPet.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-illy.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-millie.png",
    "https://image.lguplus.com/static/pc-static/hago/images/common/subs-lg-welaaa.png",
  ];
  
  const imgRef1 = useRef([]),
    imgRef2 = useRef([]),
    textRef1 = useRef([]),
    textRef2 = useRef([]),
    imgRef3 = useRef([]),
    imgRef4 = useRef([]),
    imgRef5 = useRef(),
    [a,setA] = useState("");

  useLayoutEffect(() => {
    gaspScrollTrigger(imgRef1, textRef1, imgRef2, textRef2, imgRef3, imgRef4,imgRef5);
  }, []);

  function randomImg(){

    const aa = imgUrl1[Math.floor(Math.random()*10)]
       setA(aa)

}
   setTimeout(randomImg,1500)

  return (
    <div className={style.container}>

      {/* 첫번째 화면 */}
      <div className={style.box}>
        <p className={style.mainTxt1}
          ref={(el) => {
            textRef1.current[0] = el;
          }}
        >
          <span style={{fontSize:"70px", color:"orangered"}}>Da</span> 독
        </p>
        <p className={style.mainTxt2}
          ref={(el) => {
            textRef1.current[1] = el;
          }}
        >
          평범한 일상의 순간도 더 특별하게
        </p>
        <p className={style.mainTxt3}
          ref={(el) => {
            textRef1.current[2] = el;
          }}
        >
          내 일상에 필요한 서비스를 구독!
        </p>

        <div
          style={{
            paddingTop: "250px",width:'100%', overflow:'hidden'
          }}
        >
          <div className={style.imgBoxss}>
            <div
              style={{
                paddingLeft: "100px",
              }}
              className={style.imgBoxs}
            >
              {imgUrl3.map((v, i) => {
                return (
                  <div
                    ref={(el) => {
                      imgRef1.current[i] = el;
                    }}
                    key={i}
                    className={style.img}
                  >
                    <img className={style.imgs} src={v} alt="" />
                  </div>
                );
              })}
            </div>
            <div ref={imgRef5}  className={style.lineOneCenterImg}>
              <img src={a} alt=''/>
            </div>
            <div
              style={{
                paddingRight: "100px",
              }}
              className={style.imgBoxs}
            >
              {imgUrl4.map((v, i) => {
                return (
                  <div
                    ref={(el) => {
                      imgRef1.current[i + imgUrl3.length] = el;
                    }}
                    key={i}
                    className={style.img}
                  >
                    <img className={style.imgs} src={v} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.imgBoxl}>
            {imgUrl1.map((v, i) => {
              return (
                <div
                  ref={(el) => {
                    imgRef1.current[i + imgUrl3.length + imgUrl4.length] = el;
                  }}
                  key={i}
                  className={style.img}
                >
                  <img className={style.imgs} src={v} alt="" />
                </div>
              );
            })}
          </div>
          
          <div className={`${style.imgBoxl} ${style.after}`}>
            {imgUrl2.map((v, i) => {
              return (
                <div
                  ref={(el) => {
                    imgRef1.current[
                      i + imgUrl3.length + imgUrl4.length + imgUrl1.length
                    ] = el;
                  }}
                  key={i}
                  className={style.img}
                >
                  <img className={style.imgs} src={v} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 두번째 화면 */}
      <div className={`${style.box} ${style.box1}`}>
        <div className={style.contentBox2}>
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                marginTop: "200px",
              }}
            >
              <div className={style.text11}
                ref={(el) => {
                  textRef2.current[0] = el;
                }}
              >
                <p>마음대로 고르고</p>
                <p style={{marginTop:'20px'}}>
                  <span
                    style={{
                      color: "rgb(247, 64, 134)",
                    }}
                  >
                    할인도 받아요
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                lineHeight: "30px",
                marginLeft: "-60px",
                color: "rgb(71, 71, 71)",
                width: "170px",
                fontSize: "20px",
              }}
            >
              <div className={style.text2}
                ref={(el) => {
                  textRef2.current[1] = el;
                }}
              >
                <p>내 마음대로 고르는데</p><br/>
                <p>추가 할인까지 해줘요</p> 
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                ref={(el) => {
                  imgRef2.current[0] = el;
                }}
                className={style.pzImg1}
                src={
                  "https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-a.png"
                }
                alt=""
              ></img>
              <img
                ref={(el) => {
                  imgRef2.current[1] = el;
                }}
                className={style.pzImg2}
                src={
                  "https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-b.png"
                }
                alt=""
              ></img>
              <img
                ref={(el) => {
                  imgRef2.current[2] = el;
                }}
                className={style.pzImg3}
                src={
                  "https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-c.png"
                }
                alt=""
              ></img>
              <img
                ref={(el) => {
                  imgRef2.current[3] = el;
                }}
                className={style.pzImg4}
                src={
                  "https://image.lguplus.com/static/pc-static/hago/images/common/block-subs-d.png"
                }
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* 세번째 화면 */}
      <div
        style={{
          height: "2500px"
        }}
        className={style.box}
      >
        <div className={style.contentBox1}>
          <div>
            <img
              ref={(el) => {
                imgRef3.current[0] = el;
              }}
              src={process.env.PUBLIC_URL + "../mainImg/phone-body.png"}
              alt=""
            />
            <img
              ref={(el) => {
                imgRef3.current[1] = el;
              }}
              style={{
                margin: "-550px 220px 0px 0px ",
              }}
              src={
                "https://image.lguplus.com/static/pc-static/hago/images/common/sticky-subs-a.png"
              }
              alt=""
            />
            <img
              ref={(el) => {
                imgRef3.current[2] = el;
              }}
              style={{
                margin: "-80px 30px 0px 0px ",
              }}
              src={
                "https://image.lguplus.com/static/pc-static/hago/images/common/sticky-subs-b.pn" +
                "g"
              }
              alt=""
            />
            <img
              ref={(el) => {
                imgRef3.current[3] = el;
              }}
              style={{
                margin: "-90px 180px 0px 0px ",
              }}
              src={
                "https://image.lguplus.com/static/pc-static/hago/images/common/sticky-subs-c.pn" +
                "g"
              }
              alt=""
            />
            <img
              ref={(el) => {
                imgRef3.current[4] = el;
              }}
              style={{
                margin: "-150px -50px 0px 0px ",
              }}
              src={
                "https://image.lguplus.com/static/pc-static/hago/images/common/sticky-subs-d.pn" +
                "g"
              }
              alt=""
            />
            <img
              ref={(el) => {
                imgRef3.current[5] = el;
              }}
              style={{
                margin: "-130px 30px 0px 0px ",
              }}
              src={
                "https://image.lguplus.com/static/pc-static/hago/images/common/sticky-subs-e.pn" +
                "g"
              }
              alt=""
            />
          </div>
          <div>
            <div>
              <div className={style.text1}
                ref={(el) => {
                  textRef2.current[2] = el;
                }}
                style={{
                  marginTop: "150px",
                }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  콘텐츠, 쇼핑, 생활,
                </p>
                <p style={{marginTop:'20px'}}>
                  교육까지{" "}
                  <span
                    style={{
                      color: "rgb(247, 64, 134)",
                    }}
                  >
                    다 있어요
                  </span>
                </p>
              </div>
              <div
                className={style.text2}
                ref={(el) => {
                  textRef2.current[3] = el;
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                  }}
                >
                  내 일상에 필요한 구독 상품을
                </p><br/>
                <p>
                  고르기만 하세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 네번째 화면 */}
      <div className={`${style.box} ${style.box1}`}>
        <div className={style.contentBox2}>
          <div>
            <div
              style={{
                marginTop: "200px",
              }}
            >
              <div className={style.text11}
                ref={(el) => {
                  textRef2.current[4] = el;
                }}
              >
                <p>구독 관리도</p>
                <p style={{marginTop:'20px'}}>
                  <span
                    style={{
                      color: "rgb(247, 64, 134)",
                    }}
                  >
                    쉽고 편해요
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                marginLeft: "120px",
                lineHeight: "30px",
                width: "310px",
                fontSize: "20px",
              }}
            >
              <div className={style.text2}
                ref={(el) => {
                  textRef2.current[5] = el;
                }}
              >
                <p>MY 구독에서 내 구독 정보 한 눈에 보세요</p><br/>
                <p>해지하기도 쉬워요</p>
              </div>
            </div>
          </div>
          <div>     
              <img
                ref={(el) => {
                  imgRef4.current[0] = el;
                }}
                src={process.env.PUBLIC_URL + "/mainImg/phone-body2.png"}
                alt="phone-body2"
              ></img>
          </div>
        </div>
        <Link to='home'><button className={style.entranceBtn}>둘러보기</button></Link>
      </div>
    </div>

  );
}
