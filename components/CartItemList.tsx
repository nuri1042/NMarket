import { useCallback } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  changeQty,
} from "../redux/actions/product";
import {
  ItemInfo,
  ItemOptionBox,
  ProductInfo,
  ProductThumb,
  Price,
  QtyDesc,
  ItemInfoBox,
  BtnItemBuyWrap,
  BtnItemBuyBox,
  ItemPrice,
  InputQty,
  InputQtyBtn,
  ItemDelBtn,
} from "../styles/cartItemStyle";
import { IProductProps } from "../interfaces/productProps";
import React from "react";

const CartItem = ({ itemList }: { itemList: IProductProps }) => {
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increaseQty(itemList));
  }, [itemList]);

  const onDecrease = useCallback(() => {
    dispatch(decreaseQty(itemList));
  }, [itemList]);

  const onRemove = useCallback(() => {
    dispatch(removeItem(itemList));
  }, [itemList]);

  const onChangeQty = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changedQty = parseInt(e.target.value);
      if (changedQty > 0) {
        dispatch(changeQty(itemList, changedQty));
      }
    },
    [itemList]
  );

  return (
    <>
      <ul className="cart-seller-list">
        <li style={{ borderTop: "1px solid #f2f4f7" }}>
          <div className="cart-seller-item" style={{ margin: "0 20px" }}>
            <ItemInfoBox>
              <ItemInfo>
                <ProductThumb>
                  <Link as={`/products/${itemList.id}`} href="/products/[id]">
                    <a>
                      <div>
                        <img
                          src={itemList.imageUrl}
                          alt="아이템 이미지"
                          style={{ width: "70px", height: "70px" }}
                        />
                      </div>
                    </a>
                  </Link>
                </ProductThumb>
                <ProductInfo>
                  <p className="name" style={{ lineHeight: 1.4 }}>
                    <Link as={`/products/${itemList.id}`} href="/products/[id]">
                      <a>{itemList.name}</a>
                    </Link>
                  </p>
                  <div className="price-wrap">
                    <Price>
                      {new String(itemList.originPrice).replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}
                    </Price>
                  </div>
                </ProductInfo>
              </ItemInfo>
              <ItemOptionBox>
                <QtyDesc>수량</QtyDesc>
                <InputQty>
                  <div className="qty">
                    <InputQtyBtn onClick={onDecrease}>-</InputQtyBtn>
                    <input
                      type="text"
                      name="itemQty"
                      maxLength={4}
                      pattern="[0-9]*"
                      value={itemList.quantity}
                      // onChange={onChangeQty}
                    />
                    <InputQtyBtn onClick={onIncrease}>+</InputQtyBtn>
                  </div>
                </InputQty>
                <ItemDelBtn onClick={onRemove}>삭제</ItemDelBtn>
              </ItemOptionBox>
              <BtnItemBuyWrap>
                <BtnItemBuyBox>
                  <div className="item-price-box">
                    <div className="item-price">
                      <ItemPrice>
                        {new String(itemList.changedPrice).replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        )}
                        원
                      </ItemPrice>
                    </div>
                  </div>
                </BtnItemBuyBox>
              </BtnItemBuyWrap>
            </ItemInfoBox>
          </div>
        </li>
      </ul>
    </>
  );
};
export default React.memo(CartItem);
