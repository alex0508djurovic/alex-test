'use client'
import mockProducts from "@/constants/mockProduct";
import { IProduct } from "@/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface productContextType {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const productContext = createContext<productContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [products, setProducts] = useState<IProduct[]>(mockProducts);

  return (
    <productContext.Provider value={{ products, setProducts }}>
      {children}
    </productContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(productContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a ProductProvider");
  }
  return context;
};

export default ProductProvider;
