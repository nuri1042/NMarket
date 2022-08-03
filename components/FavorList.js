import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const FavorList = () => {
  const { favorList } = useSelector((state) => state.product);
  return (
    <>
      <div
        className="section"
        style={{ width: "598px", marginLeft: "40px", float: "left" }}
      >
        <div
          className="article-wish"
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "2px solid #555",
            backgroundColor: "#fff",
            minHeight: "320px",
          }}
        >
          <h3
            style={{
              paddingLeft: "28px",
              fontSize: "14px",
              lineHeight: "1.25em",
            }}
          >
            MY WISH
          </h3>
          <div className="detail">
            <div
              className="pdtList"
              style={{
                paddingBottom: "20px",
                overflow: "hidden",
                marginTop: "26px",
                paddingLeft: "13px",
              }}
            >
              {favorList.length !== 0 ? (
                favorList.map((favorList) => {
                  return (
                    <div
                      style={{
                        float: "left",
                        position: "relative",
                        width: "142px",
                        background: "none",
                        textAlign: "center",
                      }}
                    >
                      <a
                        style={{
                          padding: "0 18px",
                          width: "106px",
                          height: "106px",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "15px",
                        }}
                      >
                        <img
                          src={favorList.imageUrl}
                          alt="favor item image"
                          style={{
                            width: "100%",
                            height: "auto",
                            verticalAlign: "top",
                          }}
                        />
                      </a>
                      <span
                        className="pdtName"
                        style={{
                          display: "block",
                          width: "106px",
                          margin: "0 auto",
                          minHeight: "32px",
                          paddingBottom: "5px",
                          verticalAlign: "top",
                          lineHeight: "1.2em",
                          wordWrap: "break-word",
                          // wordBreak: "break-all",
                          // textOverflow: "ellipsis",
                          // whiteSpace: "nowrap",
                          overflow: "hidden",
                          maxHeight: "2.4em",
                        }}
                      >
                        <a
                          style={{
                            color: "#777",
                            fontWeight: "normal",
                            width: "106px",
                            fontSize: "13px",
                          }}
                        >
                          {favorList.name}
                        </a>
                      </span>
                    </div>
                  );
                })
              ) : (
                <div
                  className="nodata"
                  style={{ marginTop: "70px", textAlign: "center" }}
                >
                  <p>
                    <img
                      src="https://fiximage.10x10.co.kr/web2015/my10x10/txt_no_data_wish.png"
                      alt=""
                    />
                  </p>
                  <a
                    href="/"
                    style={{
                      marginTop: "13px",
                      width: "140px",
                      background: "#d50c0c",
                      border: "1px solid #d50c0c",
                      color: "#fff",
                      fontSize: "11px",
                      lineHeight: "13px",
                      padding: "9px 10px 10px",
                      display: "inline-block",
                      textAlign: "center",
                      fontWeight: "bold",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    WISH 담으러 가기
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavorList;
