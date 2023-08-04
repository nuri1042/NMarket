import { IProductProps } from '../../interfaces/productProps';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'DELETE_ITEM';
export const INCREASE_QTY = 'INCREASE_QTY';
export const DECREASE_QTY = 'DECREASE_QTY';
export const ADD_FAVOR = 'ADD_FAVOR';
export const REMOVE_FAVOR = 'REMOVE_FAVOR';
export const RESET = 'RESET';
export const ONCHANGE_QTY = 'ONCHANGE_QTY';

// action type 선언
export interface AddItemAction {
  type: typeof ADD_ITEM;
  data: IProductProps;
}
export interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  data: IProductProps;
}
export interface IncreaseQtyAction {
  type: typeof INCREASE_QTY;
  data: IProductProps;
}
export interface DecreaseQtyAction {
  type: typeof DECREASE_QTY;
  data: IProductProps;
}
export interface OnChangeQtyAction {
  type: typeof ONCHANGE_QTY;
  data: IProductProps;
  changedQty: number;
}
export interface AddFavorAction {
  type: typeof ADD_FAVOR;
  data: IProductProps;
}
export interface RemoveFavorAction {
  type: typeof REMOVE_FAVOR;
  data: IProductProps;
}
export interface ResetAction {
  type: typeof RESET;
  data: IProductProps;
}

// Action Creator - dispatch해줄 값으로 쓰려고 만드는 것
export const addItem = (data: IProductProps): AddItemAction => ({
  type: ADD_ITEM,
  data,
});
export const removeItem = (data: IProductProps): RemoveItemAction => ({
  type: REMOVE_ITEM,
  data,
});
export const increaseQty = (data: IProductProps): IncreaseQtyAction => ({
  type: INCREASE_QTY,
  data,
});
export const decreaseQty = (data: IProductProps): DecreaseQtyAction => ({
  type: DECREASE_QTY,
  data,
});
export const addFavor = (data: IProductProps): AddFavorAction => ({
  type: ADD_FAVOR,
  data,
});
export const removeFavor = (data: IProductProps): RemoveFavorAction => ({
  type: REMOVE_FAVOR,
  data,
});
export const reset = () => ({
  type: RESET,
});
export const changeQty = (data: IProductProps, changedQty: number): OnChangeQtyAction => ({
  type: ONCHANGE_QTY,
  data,
  changedQty,
});

export type Actions = AddItemAction | RemoveItemAction | IncreaseQtyAction | DecreaseQtyAction | AddFavorAction | RemoveFavorAction | ResetAction | OnChangeQtyAction;
