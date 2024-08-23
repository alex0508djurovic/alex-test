import ProductProvider from "@/context/productContext";
import { FC, PropsWithChildren } from "react";

const ProductLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default ProductLayout;
