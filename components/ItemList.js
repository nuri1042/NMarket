import { AutoComplete } from "antd";
import React from "react";

import Link from "next/link";

const ItemList = ({ product }) => {
  return (
    <div>
      <div
        className="item-list"
        style={{ padding: "83px 0 0 0", display: "flex" }}
      >
        <div
          className="inner-cont"
          style={{
            paddingBottom: "40px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            className="items"
            style={{
              width: "860px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
          >
            {product &&
              product.map((product, index) => {
                return (
                  <ul style={{ margin: "0 -20px" }} key={product.id}>
                    <li
                      style={{
                        width: "260px",
                        height: "370px",
                        margin: "0 20px",
                        listStyle: "none",
                      }}
                    >
                      <Link as={`/Products/${index}`} href="/Products/[index]">
                        <a>
                          <div className="thumbnail">
                            <img src={product.imageUrl} alt="" />
                          </div>
                          <div className="desc">
                            <p
                              className="name"
                              style={{
                                height: "35px",
                                padding: "12px 0 8px",
                                fontSize: "14px",
                                lineHeight: 1.29,
                              }}
                            >
                              {product.description}
                            </p>
                            <div
                              className="price"
                              style={{
                                fontSize: "13px",
                                fontWeight: "normal",
                                color: "#333",
                              }}
                            >
                              {product.price}
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemList;
