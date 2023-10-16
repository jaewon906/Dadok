import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function gaspScrollTrigger(idx1, idx2, idx3, idx4, idx5, idx6, idx7) {
  gsap.registerPlugin(ScrollTrigger);

  // 첫 번째 메인화면 첫번째 줄 가운데 이미지

  gsap.from(idx7.current,{
    opacity:0, delay:1.5
  })

  gsap.to(idx7.current,{
    opacity:1, duration:1, delay:1.5})

 

  // 첫 번째 메인화면 애니메이션
  for (var i = 0; i < 3; i++) {
    gsap.fromTo(
      idx2.current[i],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 * i }
    );
  }
  for(var i=0; i<39; i++){
  var  a =  Math.random()*1.5
    gsap.fromTo(
          idx1.current[i],
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: a, y: -50 }
        );
  }
  
  // 각 페이지 글자 에니메이션
  for (var i = 0; i < 2; i++) {
    gsap.fromTo(
      idx4.current[i],
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: idx4.current[i],
          start: "-100 70%",
          end: "+=700 70%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }
  for (var i = 2; i < 4; i++) {
    gsap.fromTo(
      idx4.current[i],
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: idx4.current[i],
          start: "-100 70%",
          end: "+=1200 70%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }
  for (var i = 4; i < 6; i++) {
    gsap.fromTo(
      idx4.current[i],
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: idx4.current[i],
          start: "-100 70%",
          end: "+=800 70%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }
  // 두 번째 그림 에니메이션
  for (var i = 0; i < idx3.current.length; i++) {
    let a = 1;
    if (i % 2 === 0) {
      a = -1;
    } else {
      a = 1;
    }
    gsap.fromTo(
      idx3.current[i],
      { x: 10 * a, y: 10, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0.15 * i,
        scrollTrigger: {
          trigger: idx4.current[0],
          start: "top 50%",
          end: "+=1000 70%",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }

  // 세 번째 페이지 그림 에니메이션
  for (var i = 0; i < idx5.current.length; i++) {
    gsap.fromTo(
      idx5.current[i],
      { scale: 0 },
      { scale: 1,delay: 0.1 * i,
        scrollTrigger: {
          trigger: idx5.current[0],
          start: "500 70%",
          end: "1500 70%",
          toggleActions: "restart reverse restart reverse"
        },
      }
    );
  }

  // 네 번째 그림
  gsap.fromTo(
    idx6.current[0],
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: idx4.current[4],
        start: "top 70%",
        end: "+=50 70%",
        toggleActions: "restart resume reverse resume",
      },
    }
  );
}

export default gaspScrollTrigger;
