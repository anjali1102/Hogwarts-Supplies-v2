import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "/api/products",
        });
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
