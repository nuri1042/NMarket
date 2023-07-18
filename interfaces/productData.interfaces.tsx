import { IProductProps } from "./productProps";

// product reducer에 사용되는 초기데이터 interface
export interface ProductState {
  itemList: IProductProps[]; // item 저장할 배열
  totalPrice: number;
  favorList: IProductProps[]; // 찜한 상품 저장할 배열
}
