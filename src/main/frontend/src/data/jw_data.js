import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 구독 컨텐츠 데이터
  contentsData: [],
  // 구독 장바구니 onoff
  btnCount: false,
  // 장바구니에 담긴 데이터
  getKeyConvertJS: [],
  // 총 가격
  totalPrice: 0,
  // 할인가
  discount : 0,
  // 모달창 on off
  modalOnOff : null

};

const dataSet = createSlice({
  name: "dataSet",
  initialState,
  reducers: {
    // 장바구니 활성화 비활성화
    addCartbtn1Rdc: (state) => {
      state.btnCount = !state.btnCount;
    },
    // 컨텐츠 데이터 가져오기
    contentGetRdc: (state, action) => {
      state.contentsData = action.payload;
    },
    // 세션에 저장한 데이터 저장
    getKeyConvertJSRdc: (state, action) => {
      state.getKeyConvertJS = action.payload;
    },
    // 총 가격 저장
    totalPriceRdc: (state, action) => {
      state.totalPrice = action.payload;
    },
    // 할인가 저장
    discountRdc: (state, action) => {
      state.discount = action.payload;
    },
   
    modalRdc: (state) => {
      state.modalOnOff = !state.modalOnOff;
    }
  },
});

export const {
  addCartbtn1Rdc,
  contentGetRdc,
  getKeyConvertJSRdc,
  totalPriceRdc,
  discountRdc,
  modalRdc,
  onOffRdc
} = dataSet.actions;
export default dataSet.reducer;
