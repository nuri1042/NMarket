import styled from "styled-components";

export const ItemlistContainer = styled.div`
  padding: 83px 0 26px 0;
  width: 890px;
  margin: 0 auto;
  font-size: 18px;
`;
export const Itemlist = styled.div`
  display: flex;
`;
export const InnerCont = styled.div`
  padding-bottom: 40px;
  width: 100%;
  margin: 0 auto;
`;
export const Items = styled.div`
  width: 860px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;
export const ItemsUl = styled.ul`
  margin: 0 -20px;
`;

export const ItemsLi = styled.li`
  width: 260px;
  height: 300px;
  margin-bottom: 50px;
  list-style: none;

  &:hover {
    box-shadow: 0 7px 7px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3 ease-in-out;
    border-radius: 7px;
  }
`;
export const ThumbImg = styled.img`
  width: 260px;
  height: 260px;
  &:hover{
    scale(1.5);
  }

  // &:hover {
  //   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  //   transition: box-shadow 0.3 ease-in-out;
  // }
`;
export const DescName = styled.p`
  heigth: 35px;
  padding: 12px 0 8px 8px;
  font-size: 14px;
  line-height: 1.29;
`;
export const Price = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #333;
`;
