function sessionStorage(a){
/////                            세션 스토리지                         ///////////////

    // 추가한 배열을 JSON으로 변환. 세션은 JSON (문자열) 만 저장 가능
    const aConvertJson = JSON.stringify(a);
    // 세션 스토리지 호출
    const sessionStorage = window.sessionStorage;
    // JSON으로 변환한 데이터를 "key" 값으로 저장
    sessionStorage.setItem("key", aConvertJson);
    // key 값이 "key" 인 데이터를 불러옴
    const getKey = sessionStorage.getItem("key");
    // 불러온 JSON 파일을 JS로 변환
    const getKeyConvertJS = JSON.parse(getKey);
    return(getKeyConvertJS)
}
export default sessionStorage;