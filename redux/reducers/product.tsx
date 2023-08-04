import { PURGE } from 'redux-persist';
import { ProductState } from '../../interfaces/productData.interfaces';
import { Actions, ADD_ITEM, REMOVE_ITEM, INCREASE_QTY, DECREASE_QTY, ADD_FAVOR, REMOVE_FAVOR, RESET, ONCHANGE_QTY } from '../actions/product';

const initialState: ProductState = {
  itemList: [], // item 저장할 배열
  totalPrice: 0,
  favorList: [], // 찜한 상품 저장할 배열
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_ITEM: {
      // 카트에 해당 물품있는지 검색
      const isInCart = state.itemList.find((item) => (item.id === action.data.id ? true : false));

      return {
        ...state,
        itemList: isInCart
          ? state.itemList.map(
              (item) =>
                item.id === action.data.id // 선택한 아이템이 장바구니 내 상품과 일치하면
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                      changedPrice: item.originPrice * (item.quantity + 1),
                    } // 수량 1 증가
                  : item // 일치하지 않으면 그대로 둠
            )
          : [...state.itemList, action.data], // 장바구니에 해당 상품이 없으면 새로 추가
        totalPrice: state.totalPrice + action.data.originPrice,
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        itemList: state.itemList.filter(
          (item) => item.id != action.data.id // filter 함수로 선택한 물품을 itemList 에서 제외
        ),
        totalPrice: state.totalPrice - action.data.quantity * action.data.originPrice,
      };
    }
    case INCREASE_QTY: {
      return {
        ...state,
        itemList: state.itemList.map(
          (item) =>
            item.id === action.data.id // id가 일치하면
              ? {
                  ...item,
                  quantity: item.quantity + 1, // quantity 값 증가
                  changedPrice: item.originPrice * (item.quantity + 1), // 상품 금액 증가
                }
              : item // 아니라면 그대로 둠
        ),
        totalPrice: state.totalPrice + action.data.originPrice,
      };
    }
    case DECREASE_QTY: {
      return {
        ...state,
        itemList: state.itemList.map((item) =>
          item.id === action.data.id && item.quantity >= 2 // id가 일치하는 경우와 옵션 최소 수량은 1개
            ? {
                ...item,
                quantity: item.quantity - 1, // quantity 값 감소
                changedPrice: item.originPrice * (item.quantity - 1), // 상품 금액 감소
              }
            : item
        ),
        totalPrice: action.data.quantity >= 2 ? state.totalPrice - action.data.originPrice : state.totalPrice,
      };
    }
    case ONCHANGE_QTY: {
      return {
        ...state,
        itemList: state.itemList.map((item) =>
          item.id === action.data.id
            ? {
                ...item,
                quantity: action.changedQty,
                changedPrice: item.originPrice * action.changedQty,
              }
            : item
        ),
        totalPrice: state.totalPrice - action.data.originPrice * action.data.quantity + action.data.originPrice * action.changedQty,
      };
    }
    case ADD_FAVOR: {
      // 찜 목록에 해당 물품있는지 검색
      const isInFavorList = state.favorList.find((item) => (item.id === action.data.id ? true : false));

      return {
        ...state,
        favorList: isInFavorList
          ? state.favorList // 상품이 이미 리스트에 들어있으면 그대로 둠
          : [...state.favorList, action.data], // 없으면 리스트에 추가
      };
    }
    case REMOVE_FAVOR: {
      return {
        ...state,
        favorList: state.favorList.filter((item) => item.id != action.data.id),
      };
    }
    case RESET:
      return initialState; // return the initial value

    default:
      return state;
  }
};

export default reducer;
