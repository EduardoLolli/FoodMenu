export interface IFoodMenu {
  lateralBar: boolean;
  setLateralBar: React.Dispatch<React.SetStateAction<boolean>>;
  productsApi: ICatProdutos[] | null;
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
