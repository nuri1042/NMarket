import styled from "styled-components";
import Image from "next/image";
import { media } from "./theme";

export const ItemlistTitle = styled.div`
  padding: 83px 0 30px 0;
  width: 890px;
  margin: 0 auto;
  font-size: 18px;
  & h2 {
    font-weight: 600;
    text-align: center;
  }
`;

export const InnerCont = styled.div`
  padding-bottom: 40px;
  max-width: 890px;
  margin: 0 auto;
`;
export const Items = styled.div`
  width: 860px;
  display: grid;
  grid-template-columns: 260px 260px 260px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;

  ${media.large`
    width: 760px;
    column-gap: 5px;
  `}
  ${media.medium`
    width: 690px;
    grid-template-columns: 300px 300px;
    gap: 3px;

  `}
`;
export const ItemsUl = styled.ul`
  margin-bottom: 55px;
`;

export const ItemsLi = styled.li`
  list-style: none;

  &:hover {
    box-shadow: 0 7px 7px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3 ease-in-out;
    border-radius: 7px;
  }
`;
export const Thumbnail = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  margin: 0 auto;

  ${media.large`
    width: 240px;
    height: 240px;
  `}
  ${media.medium`
    width: 300px;
    height: 300px;
  `}
`;
export const ThumbImg = styled(Image)`
  width: 260px;
  height: 260px;
  objectFit="contain"

  &:hover{
    scale(1.5);
  }
  ${media.large`
    width: 240px;
    height: 240px;
  `}
  ${media.medium`
    width: 350px;
    height: 350px;
  `}
`;
export const Desc = styled.div`
  width: 260px;

  ${media.large`
    width: 240px;
  `}
  ${media.medium`
    width: 290px;
  `}
`;
export const DescName = styled.p`
  heigth: 35px;
  padding: 16px 0 8px 8px;
  font-size: 18px;
  line-height: 1.29;
  font-weight: 500;
  line-height: 1.5rem;

  ${media.medium`
    font-size: 24px;
  `}
`;
export const Price = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #333;
`;
