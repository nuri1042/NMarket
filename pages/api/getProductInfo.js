const product = [
  {
    id: 0,
    quantity: 1,
    name: "트윈마카 60색",
    description: "아트메이트 트윈마카 60색",
    originPrice: 24000,
    changedPrice: 24000,
    imageUrl:
      "https://webimage.10x10.co.kr/image/tenten600/451/T004513393.jpg/10x10/resize/260x260/",
  },
  {
    id: 1,
    quantity: 1,
    name: "스누피 브런치세트",
    description: "완벽한 브런치를 위한 스누피, 하루 특가",
    originPrice: 14900,
    changedPrice: 14900,
    imageUrl:
      "https://webimage.10x10.co.kr/image/tenten600/278/T002784157-1.jpg/10x10/resize/260x260/",
  },
  {
    id: 2,
    quantity: 1,
    name: "카라영 인센스 플로라 산벚꽃 + 홀더 포함",
    description: "산책하다 스치는 향긋한 벚꽃 향을 집에서",
    originPrice: 15900,
    changedPrice: 15900,
    imageUrl:
      "https://webimage.10x10.co.kr/image/tenten600/420/T004201290.jpg/10x10/resize/260x260/",
  },
  {
    id: 3,
    quantity: 1,
    name: "디온리 와인 에어레이터 NKQ041BK",
    description: "최고의 와인 컨디션을 위한 똑똑한 선택",
    originPrice: 39800,
    changedPrice: 39800,
    imageUrl:
      "https://webimage.10x10.co.kr/image/tenten600/398/T003985604.jpg/10x10/resize/260x260/",
  },
  {
    id: 4,
    quantity: 1,
    name: "헤이 메거진랙 라운드 슬림테이블",
    description: "알뜰한 공간 활용이 필요하다면 딱이지!",
    originPrice: 115430,
    changedPrice: 115430,
    imageUrl:
      "https://webimage.10x10.co.kr/image/tenten600/451/T004518181.jpg/10x10/resize/260x260/",
  },
  {
    id: 5,
    quantity: 1,
    name: "몰랑 3in1 몰랑빵 샌드위치 와플메이커",
    description: "깜찍한 몰랑이가 그려진 디저트 같이 먹을래?",
    originPrice: 29800,
    changedPrice: 29800,
    imageUrl:
      "https://imgstatic.10x10.co.kr/contents/maincontents/202204/mian_mdchoice_img89869.jpg/10x10/resize/260x260/",
  },
  {
    id: 6,
    quantity: 1,
    name: "선데이 체크 거실 커튼 4color",
    description: "거실 커튼 하나로 화사하게 바뀌는 분위기",
    originPrice: 49600,
    changedPrice: 49600,
    imageUrl:
      "https://webimage.10x10.co.kr/image/tenten600/451/T004511689.jpg/10x10/resize/260x260/",
  },
  {
    id: 7,
    quantity: 1,
    name: "2022 spring-summer collection",
    description: "화려한 포인트를 더하고 싶은 날 착용해요",
    originPrice: 20010,
    changedPrice: 20010,
    imageUrl:
      "https://imgstatic.10x10.co.kr/contents/maincontents/202204/mian_mdchoice_img89850.jpg/10x10/resize/260x260/",
  },
  {
    id: 8,
    quantity: 1,
    name: "[페이스팩토리]붓기싸악 림프관리 엔젤괄사 베이비핑크",
    description: "엔젤괄사 베이비핑크 출시",
    originPrice: 34900,
    changedPrice: 34900,
    imageUrl:
      "https://webimage.10x10.co.kr/image/tenten600/450/T004500266.jpg/10x10/resize/260x260/",
  },
  {
    id: 9,
    quantity: 1,
    name: "[사계절/간절기 이불특가] 나인홈&나라홈 간절기 사계절 침구 특가!",
    description: "간절기 사계절 침구 특가",
    originPrice: 11250,
    changedPrice: 11250,
    imageUrl:
      "https://webimage.10x10.co.kr/eventIMG/2022/today/Frontimage20220824123708.JPEG",
  },
  {
    id: 10,
    quantity: 1,
    name: "[스티커팩] 단 하루 특가! 베스트 스티커팩 모음!",
    description: "다꾸, 폰꾸 다 가능해 베스트 스티커팩 특가",
    originPrice: 5000,
    changedPrice: 5000,
    imageUrl:
      "https://webimage.10x10.co.kr/eventIMG/2022/today/Frontimage20220823164645.JPEG",
  },
  {
    id: 11,
    quantity: 1,
    name: "추천)추석 선물 세트 모음",
    description: "마음까지 든든한 추석 선물 세트 모음",
    originPrice: 11000,
    changedPrice: 11000,
    imageUrl:
      "https://webimage.10x10.co.kr/eventIMG/2022/today/Frontimage20220823164813.JPEG",
  },
];

export default (req, res) => {
  // 요청 시에 데이터를 JSON 형태로 res 객체에 담아서 전달하는 방식
  // res.statusCode = 200;
  // res.json(product);
  res.status(200).json(JSON.stringify(product));
};
