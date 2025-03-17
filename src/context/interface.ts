export interface IFoodMenu {
  lateralBar: boolean;
  setLateralBar: React.Dispatch<React.SetStateAction<boolean>>;
  productsApi: ICatProdutos[] | null;
  useAddCart: boolean;
  setUseAddCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICatProdutos {
  name: string;
  products: IProduto[];
}

export interface IProduto {
  id: number;
  name: string;
  price: number;
  descricao: string;
  precoBase: number;
  precoPromo: number;
  horarioPromoInit: string;
  horarioPromoFinal: string;
  imagem: string;
}
