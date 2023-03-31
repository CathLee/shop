import { useCartContext } from "./CartContextProvider";
import { useCartTotal } from "./useCartTotal";

export const useCart = () => {
  const { isOpen, setIsOpen } = useCartContext();
  const { products, appProduct };
  const { total, setTotal } = useCartTotal();
};
