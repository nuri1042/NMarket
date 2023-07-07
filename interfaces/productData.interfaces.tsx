// api로부터 받아오는 product 객체 interface
export interface ItemData {
  id: number;
  quantity: number;
  name: string;
  description: string;
  originPrice: number;
  changedPrice: number;
  imageUrl: string;
}

// product reducer에 사용되는 초기데이터 interface
export interface ProductState {
  itemList: ItemData[]; // item 저장할 배열
  totalPrice: number;
  favorList: ItemData[]; // 찜한 상품 저장할 배열
}
