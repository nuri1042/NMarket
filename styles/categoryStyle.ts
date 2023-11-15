import styled from "styled-components";

export const ContentWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #c8c9ca;
  padding: 2rem 3rem;
  margin-bottom: 4rem;
  border: 1px solid black;
`;
export const ContentHeader = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
export const ContentHeaderTitle = styled.h1`
  display: flex;
  gap: 1.75rem;

  & div {
    font-size: 40px;
  }
  & p {
    font-size: 1.5rem;
    line-height: 4rem;
    color: grey;
    font-weight: 500;
  }
`;
export const ContentSortDiv = styled.div`
  margin-top: 1.75rem;
  gap: 1.25rem;
  display: flex;

  & select {
    border: none;
    font-size: 20px;
    font-weight: 500;
    text-align: right;
  }
  & div {
    font-size: 18px;
    line-height: 2;
  }
`;
export const Nav = styled.nav`
  font-size: 1.5rem;

  & ul {
    display: flex;
    gap: 1.35rem;
  }
`;
export const DetailsLi = styled.li`
  margin-bottom: 1.5rem;
  & a {
    padding: 0.1rem 0;
    &:hover {
      border-bottom: 2.6px solid #c8c9ca;
    }
  }
`;
