import { useProductHistory } from "@/context/historyContext";
import { useInventory } from "@/context/productContext";
import { IHistory, IProduct, ProductAction } from "@/types";
import { isValidItem } from "@/validation";
import { useState } from "react";

const useProduct = () => {
    const { products: productList, setProducts: setProductList } = useInventory();
    const { setProdHistory } = useProductHistory();
    const [newProduct, setNewProduct] = useState<IProduct>({} as IProduct);
    const [error, setError] = useState<string>("");
    const addProduct = (newProduct: IProduct): void => {
        const err = isValidItem(newProduct);
        if (err) {
            setError(err);
        } else {
            if (productList.some((item) => item.name === newProduct.name)) {
                setError("There is already a product with name: " + newProduct.name);
            } else {
                setError("");
                setProductList((prev) => [...prev, newProduct]);
                setProdHistory(
                    (prev) =>
                        [
                            ...prev,
                            { actionType: ProductAction.Add, obj: newProduct, timeStamp: Date.now() },
                        ] as IHistory[]
                );
                setNewProduct({} as IProduct);
            }
        }
    };
    const updateProduct = (newOne: IProduct, oldName: string) => {
        if (isValidItem(newProduct)) {
            const isAlreadyExists = productList.some((item) => item.name !== oldName && item.name === newOne.name);
            if (isAlreadyExists) {
                setError("Update is failed\n");
            } else {
                setError("");
                setProductList((prev) => prev.map((item) => (item.name === oldName ? newOne : item)));
                setProdHistory(
                    (prev) =>
                        [...prev, { actionType: ProductAction.Edit, obj: newOne, timeStamp: Date.now() }] as IHistory[]
                );
            }
        } else {
            setError("Invalid Input");
        }
    };
    const deleteProduct = (name: string) => {
        setProductList((prev) => prev.filter((item) => item.name !== name));
    };
    return {
        productList,
        addProduct,
        updateProduct,
        deleteProduct,
        error,
        setError,
        newProduct,
        setNewProduct,
    };
};

export default useProduct;
