import { createContext, useState, useMemo, useEffect } from "react";
import { ICatProdutos, IFoodMenu } from "./interface";
import axios from "axios";

export const FoodMenuContext = createContext({} as IFoodMenu);

export const FoodMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lateralBar, setLateralBar] = useState(false);
  const [productsApi, setProductsApi] = useState<ICatProdutos[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetCharacter = async (): Promise<void> => {
    const URL = "http://localhost:3000/categories";
    try {
      const response = await axios.get(URL);
      setProductsApi(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCharacter();
  }, []);

  const value: IFoodMenu = useMemo(
    () => ({ lateralBar, setLateralBar, productsApi }),
    [lateralBar, productsApi]
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <FoodMenuContext.Provider value={value}>
      {children}
    </FoodMenuContext.Provider>
  );
};
