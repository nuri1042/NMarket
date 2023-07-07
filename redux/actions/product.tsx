import { ItemData } from "../../interfaces/productData.interfaces";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "DELETE_ITEM";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const ADD_FAVOR = "ADD_FAVOR";
export const REMOVE_FAVOR = "REMOVE_FAVOR";

// action type 선언
export interface AddItemAction {
  type: typeof ADD_ITEM;
  data: ItemData;
}
export interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  data: ItemData;
}
export interface IncreaseQtyAction {
  type: typeof INCREASE_QTY;
  data: ItemData;
}
export interface DecreaseQtyAction {
  type: typeof DECREASE_QTY;
  data: ItemData;
}
export interface AddFavorAction {
  type: typeof ADD_FAVOR;
  data: ItemData;
}
export interface RemoveFavorAction {
  type: typeof REMOVE_FAVOR;
  data: ItemData;
}

export const addItem = (data: ItemData): AddItemAction => ({
  type: ADD_ITEM,
  data,
});
export const removeItem = (data: ItemData): RemoveItemAction => ({
  type: REMOVE_ITEM,
  data,
});
export const increaseQty = (data: ItemData): IncreaseQtyAction => ({
  type: INCREASE_QTY,
  data,
});
export const decreaseQty = (data: ItemData): DecreaseQtyAction => ({
  type: DECREASE_QTY,
  data,
});
export const addFavor = (data: ItemData): AddFavorAction => ({
  type: ADD_FAVOR,
  data,
});
export const removeFavor = (data: ItemData): RemoveFavorAction => ({
  type: REMOVE_FAVOR,
  data,
});

export type Actions =
  | AddItemAction
  | RemoveItemAction
  | IncreaseQtyAction
  | DecreaseQtyAction
  | AddFavorAction
  | RemoveFavorAction;
