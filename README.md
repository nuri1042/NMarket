# NMarket 프로젝트

## 프로젝트 소개
Next.js 기반의 E-Commerce 플랫폼 프로젝트입니다.

## 배포 링크
https://nmarket.netlify.app

- NextJS의 페이지 구조, 컴포넌트의 분리, 코드 리팩토링, 웹 성능개선에 대해 고민하고 학습할 수 있었습니다.
- Next.js


## 🛠 적용 기술 및 라이브러리
- Programming Languages : Javascript, Typescript
- Frontend Development : Next.js
- 상태관리 : React-Redux, Redux, axios
- Style : Styled-Components, Ant Design

## 주요 기능
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/0ea61159-87dd-44dd-b58c-5dd5e099cc25">

- 메인페이지 상품 리스트, 상품 상세 페이지, 마이페이지 찜 목록, 로그인, 로그아웃, 장바구니 추가, 삭제

### NextAuth를 이용한 소셜 로그인, Sendgrid 이용한 이메일 인증 방식 로그인
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/e856ba3f-7d86-4599-86ae-85d539fd96db">

- NextAuth의 옵션 지정 객체에서 소셜 로그인이 가능하도록 구현하였습니다.

- https://github.com/nuri1042/NMarket/blob/8807ba26ab5f7d86deb34a37ab820c64835e8a59/pages/api/auth/%5B...nextauth%5D.tsx#L14-L39

### 마이페이지
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/0eaf37fa-e578-45a6-9274-3e4220b29fe4">

- Client-side에서 useSession 훅을 통해 인증된 사용자의 세션을 확인합니다.
- 세션 여부에 따라 마이페이지로의 접근이 제한되도록 구현하였습니다.

https://github.com/nuri1042/NMarket/blob/8807ba26ab5f7d86deb34a37ab820c64835e8a59/components/CheckUserSession.tsx#L4-L16

### 장바구니
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/95031a7c-2704-40af-b524-bf139157fce0">

- Redux를 이용해 상품을 장바구니에 추가하거나 찜 목록에 추가할 수 있도록 구현하였습니다.
- Reducer를 통해 상태를 업데이트하는 로직을 관리하여 관심사를 분리하였습니다.

https://github.com/nuri1042/NMarket/blob/8807ba26ab5f7d86deb34a37ab820c64835e8a59/redux/reducers/product.tsx#L11-L112










