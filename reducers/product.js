export const initialState = {
  itemList: [], // item 저장할 배열
  totalPrice: 0,
  favorList: [], // 찜한 상품 저장할 배열
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "DELETE_ITEM";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const ADD_FAVOR = "ADD_FAVOR";
export const REMOVE_FAVOR = "REMOVE_FAVOR";

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});
export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
});
export const increaseQty = (item) => ({
  type: INCREASE_QTY,
  item,
});
export const decreaseQty = (item) => ({
  type: DECREASE_QTY,
  item,
});
export const addFavor = (item) => ({
  type: ADD_FAVOR,
  item,
});
export const removeFavor = (item) => ({
  type: REMOVE_FAVOR,
  item,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      // 카트에 해당 물품있는지 검색
      const isInCart = state.itemList.find((item) =>
        item.id === action.item.id ? true : false
      );

      return {
        ...state,
        itemList: isInCart
          ? state.itemList.map(
              (item) =>
                item.id === action.item.id // 선택한 아이템이 장바구니 내 상품과 일치하면
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    } // 수량 1 증가
                  : item // 일치하지 않으면 그대로 둠
            )
          : [...state.itemList, action.item], // 장바구니에 해당 상품이 없으면 새로 추가
        totalPrice: state.totalPrice + action.item.originPrice,
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        itemList: state.itemList.filter(
          (item) => item.id != action.item.id // filter 함수로 선택한 물품을 itemList 에서 제외
        ),
        totalPrice:
          state.totalPrice - action.item.quantity * action.item.originPrice,
      };
    }
    case INCREASE_QTY: {
      return {
        ...state,
        itemList: state.itemList.map(
          (item) =>
            item.id === action.item.id // id가 일치하면
              ? {
                  ...item,
                  quantity: item.quantity + 1, // quantity 값 증가
                  changedPrice:
                    item.originPrice + item.originPrice * item.quantity, // 상품 금액 증가
                }
              : item // 아니라면 그대로 둠
        ),
        totalPrice: state.totalPrice + action.item.originPrice,
      };
    }
    case DECREASE_QTY: {
      return {
        ...state,
        itemList: state.itemList.map((item) =>
          item.id === action.item.id && item.quantity >= 2 // id가 일치하는 경우와 옵션 최소 수량은 1개
            ? {
                ...item,
                quantity: item.quantity - 1, // quantity 값 감소
                changedPrice: item.changedPrice - item.originPrice, // 상품 금액 감소
              }
            : item
        ),
        totalPrice:
          action.item.quantity >= 2
            ? state.totalPrice - action.item.originPrice
            : state.totalPrice,
      };
    }
    case ADD_FAVOR: {
      // 찜 목록에 해당 물품있는지 검색
      const isInFavorList = state.favorList.find((item) =>
        item.id === action.item.id ? true : false
      );

      return {
        ...state,
        favorList: isInFavorList
          ? state.favorList // 상품이 이미 리스트에 들어있으면 그대로 둠
          : [...state.favorList, action.item], // 없으면 리스트에 추가
      };
    }
    case REMOVE_FAVOR: {
      return {
        ...state,
        favorList: state.favorList.filter((item) => item.id != action.item.id),
      };
    }
    default:
      return state;
  }
};

export default reducer;
