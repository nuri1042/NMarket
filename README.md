# NMarket 프로젝트

## 프로젝트 소개
Next.js 기반의 E-Commerce 플랫폼 프로젝트

## 참여 인원
1인 개발

## 배포 링크
https://nmarket.netlify.app

## 🛠 적용 기술 및 라이브러리
- Programming Languages : Javascript, Typescript
- Frontend Development : Next.js, React
- 상태관리 : Redux, Redux-persist
- Server : Postman Mock Server
- Style : Styled-Components
  
## 개발 프로세스
### 1. 요구사항 명세
 
#### API 설계
- 인터페이스를 구성하고 그에 맞는 API 스펙을 설계
- 설계한 API가 실제 동작하지 않는 점을 염두에 두고, 해당 Mock Data를 이용해 개발하고자 Postman Mock Server를 활용
<img width="659" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/f2eacf59-018d-4fea-84eb-cf903aad6186">

### 2. 개발

- Mock server를 이용한 API(Mock Data) 호출 시뮬레이션
- UI 코드와 mock 서버의 통합

### 3. 배포




## 프로젝트 구조
```
📦pages
 ┣ 📂api
 ┃ ┗ 📂auth
 ┃ ┃ ┗ 📜[...nextauth].tsx
 ┣ 📂products
 ┃ ┣ 📂categories
 ┃ ┃ ┗ 📂[name]
 ┃ ┃ ┃ ┣ 📜[detail].tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂product
 ┃ ┃ ┗ 📜[id].tsx
 ┣ 📜Cart.tsx
 ┣ 📜Login.tsx
 ┣ 📜Mypage.tsx
 ┣ 📜_app.tsx
 ┣ 📜_document.tsx
 ┣ 📜index.tsx
 ┗ 📜verifyRequest.tsx

📦components
 ┣ 📜AppLayout.tsx
 ┣ 📜CartItemList.tsx
 ┣ 📜CartNavMenu.tsx
 ┣ 📜CartTotalInfo.tsx
 ┣ 📜CategoryMenu.tsx
 ┣ 📜CategoryNavLayout.tsx
 ┣ 📜CheckUserSession.tsx
 ┣ 📜FavorList.tsx
 ┣ 📜ItemList.tsx
 ┗ 📜MainBanner.tsx
```

## 주요 기능
- 메인페이지 상품 리스트, 상품 상세 페이지, 마이페이지 찜 목록, 로그인, 로그아웃, 장바구니 추가, 삭제, 카테고리 필터링
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/0ea61159-87dd-44dd-b58c-5dd5e099cc25">
<br/>
<br/>


### NextAuth를 이용한 소셜 로그인, Sendgrid 이용한 이메일 인증 방식 로그인
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/e856ba3f-7d86-4599-86ae-85d539fd96db">
<br/>
<br/>

- NextAuth의 옵션 지정 객체에서 소셜 로그인이 가능하도록 구현

https://github.com/nuri1042/NMarket/blob/8807ba26ab5f7d86deb34a37ab820c64835e8a59/pages/api/auth/%5B...nextauth%5D.tsx#L14-L39


<br/>

### 마이페이지
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/0eaf37fa-e578-45a6-9274-3e4220b29fe4">

<br/>
<br/>


- Client-side에서 useSession 훅을 통해 인증된 사용자의 세션을 확인
- 세션 여부에 따라 마이페이지로의 접근이 제한되도록 구현
https://github.com/nuri1042/NMarket/blob/8807ba26ab5f7d86deb34a37ab820c64835e8a59/components/CheckUserSession.tsx#L4-L16

<br/>

### 장바구니
<img width="500" alt="image" src="https://github.com/nuri1042/NMarket/assets/19181088/95031a7c-2704-40af-b524-bf139157fce0">

- Redux를 이용해 상품을 장바구니에 추가하거나 찜 목록에 추가할 수 있도록 구현
- Reducer를 통해 상태를 업데이트하는 로직을 관리하여 관심사를 분리

https://github.com/nuri1042/NMarket/blob/8807ba26ab5f7d86deb34a37ab820c64835e8a59/redux/reducers/product.tsx#L11-L112












