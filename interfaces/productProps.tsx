// api로부터 받아오는 product 객체 interface

export interface IProductProps {
  id: number;
  quantity: number;
  name: string;
  description: string;
  originPrice: number;
  changedPrice: number;
  imageUrl: string;
  category: Category;
}
export interface Category {
  name: {
    src: string;
    desc: string;
  };
  detail: {
    src: string;
    desc: string;
  };
}
