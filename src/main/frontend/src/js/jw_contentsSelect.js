let a = [],
    c = [],
    d = 0,
    g = true,
    f = 0,
    t = 0;

function contentsSelect(contentsData, resultData, e) {
    // 각각 컨텐츠에 해당하는 스위치 배열을 만들었다 이를 통해서 컨텐츠를 골랐을 때
    // (true) 해제할 때 (false) 를 통해 장바구니 활성화 예정
    try {
        if (g === true) {
            for (let i = 0; i < contentsData.length; i++) {
                c[i] = false;
            }
            g = false;
        }
        // 해당하는 컨텐츠를 누를 때 true <-> false 변경
        for (let j = 0; j < contentsData.length; j++) {
            if (resultData.id === `ID${j + 1}`) {
                if (c[j] === false && a.length < 5)
                    c[j] = !c[j];
                else if (c[j] === true && a.length < 6) {
                    c[j] = !c[j];
                } else {
                }

                switch (c[j]) {

                    // 해당하는 컨텐츠를 담았을 때 세션 스토리지에 보낼 데이터 추가 & 가격 더하기
                    case true:
                        if (a.length < 5) {

                            a.push(resultData);
                            f = a.find((x) => x.id === e.target.id);
                            d += f.discount;
                            t += f.price;
                        }
                        break;

                    // 해당하는 컨텐츠를 뺐을 때 해당하는 id의 price를 빼줌 & 해당하는 id의 컨텐츠 데이터 제거
                    case false:
                        f = a.find((x) => x.id === e.target.id);
                        d -= f.discount;
                        t -= f.price;
                        a = a.filter((x) => x.id !== e.target.id);

                        break;

                    default:
                }
            }
        }
    } catch {
        console.error(e)
        alert("5개 까지만 담을 수 있습니다.")

    }

    return [a, c, t, d];
}

export default contentsSelect;
//  // 해당하는 컨텐츠를 누를 때 true <-> false 변경
//  for (var j = 0; j < contentsData.length; j++) {
//   if (resultData.id === `ID${j + 1}` && a.length < 5) {
//     c[j] = !c[j];

//     switch (c[j]) {
//       // 해당하는 컨텐츠를 눌렀을 때 세션 스토리지에 보낼 데이터
//       case true:
//         if(a.length<5){

//           a.push(resultData);
//           f = a.find((x) => x.id === e.target.id);
//           t += f.price;
//         }
//           break;

//       case false:
//         // 클릭했을 때 해당하는 id의 price를 빼줌
//         f = a.find((x) => x.id === e.target.id);
//         t -= f.price;
//         a = a.filter((x) => x.id !== e.target.id);

//         break;

//       default:
//     }
//   }
// }
