import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../reducers/product';
import { ItemInfo, ItemOptionBox, ProductInfo, ProductThumb, Price, QtyDesc, ItemInfoBox, BtnItemBuyWrap, BtnItemBuyBox, ItemPrice } from '../styles/cartItemStyle';

const CartItem = ({ itemList }) => {
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

  // form 필드에 value 를 사용하면서 onChange 핸들러를 설정하지 않으면 warning or error 발생 가능
  const onChangeQty = (e) => {
    const updateQty = e.target.value;
  };
  return (
    <>
      <ul className='cart-seller-list'>
        <li style={{ borderTop: '1px solid #f2f4f7' }}>
          <div className='cart-seller-item' style={{ margin: '0 20px' }}>
            <ItemInfoBox>
              <ItemInfo>
                <ProductThumb>
                  <Link as={`/Products/${itemList.id}`} href='/Products/[index]'>
                    <a>
                      <div>
                        <img src={itemList.imageUrl} alt='아이템 이미지' style={{ width: '70px', height: '70px' }} />
                      </div>
                    </a>
                  </Link>
                </ProductThumb>
                <ProductInfo>
                  <p className='name' style={{ lineHeight: 1.4 }}>
                    <Link as={`/Products/${itemList.id}`} href='/Products/[index]'>
                      <a style={{ fontSize: '15px', fontWeight: 700 }}>{itemList.name}</a>
                    </Link>
                  </p>
                  <div className='price-wrap'>
                    <Price>{new String(itemList.originPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Price>
                  </div>
                </ProductInfo>
              </ItemInfo>
              <ItemOptionBox>
                <QtyDesc>수량</QtyDesc>
                <div className='input-quantity' style={{ float: 'right', padding: '0 12px' }}>
                  <div className='qty' style={{ paddingTop: '16px' }}>
                    <button
                      style={{
                        width: '30px',
                        height: '30px',
                        float: 'left',
                        backgroundColor: 'transparent',
                        border: '1px solid #ebeef2',
                      }}
                      onClick={onDecrease}
                    >
                      -
                    </button>
                    <input
                      type='text'
                      name='itemea'
                      maxLength={4}
                      pattern='[0-9]*'
                      value={itemList.quantity}
                      onChange={(event) => this.onChangeQty(event)}
                      style={{
                        width: '32px',
                        height: '30px',
                        textAlign: 'center',
                        border: '1px solid #ebeef2',
                        boxSizing: 'border-box',
                      }}
                    />

                    <button
                      style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'transparent',
                        border: '1px solid #ebeef2',
                      }}
                      onClick={onIncrease}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  style={{
                    width: '48px',
                    height: '24px',
                    marginTop: '20px',
                    background: '#202429',
                    border: 'none',
                    color: '#fff',
                  }}
                  onClick={onRemove}
                >
                  삭제
                </button>
              </ItemOptionBox>
              <BtnItemBuyWrap>
                <BtnItemBuyBox>
                  <div className='item-price-box'>
                    <div className='item-price'>
                      <ItemPrice>{new String(itemList.changedPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ItemPrice>
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
export default CartItem;
