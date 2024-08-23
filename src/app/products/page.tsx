"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Product from "@/components/Product";
import useProduct from "@/hooks/useProduct";
import ErrorModal from "@/components/ErrorModal";
import { IProduct, ProductProperties } from "@/types";
import { TextField } from "@/components/TextField";
import TableHead from "@/components/TableHead";
import UpdateModal from "@/components/UpdateModal";

const ProductPage = () => {
    const { productList, addProduct, updateProduct, deleteProduct, error, newProduct, setNewProduct } = useProduct();

    const [showModal, setShowModal] = useState(true);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedName, setSelectedName] = useState("");
    const [productToUpdate, setProductToUpdate] = useState<IProduct>({} as IProduct);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAddProduct = () => {
        setShowModal(true);
        setSelectedName("");
        addProduct(newProduct);
    };

    useEffect(() => {
        if (productList?.length) {
            const prod = productList?.find((item) => item.name === selectedName) ?? ({} as IProduct);
            if (prod) setProductToUpdate(prod);
        }
    }, [selectedName]);

    const handleUpdateProduct = () => {
        setShowModal(true);
        if (selectedName) {
            updateProduct(productToUpdate, selectedName);
        }
    };

    return (
        <main className="w-full m-4 flex overflow-hidden flex-col items-center justify-start ml-1 sm:w-[70%] ">
            <h1 className="text-center mb-2 text-red-500 text-4xl ">Products</h1>
            <TableHead />
            {error && showModal && <ErrorModal msg={error} setShow={setShowModal} />}
            {selectedName && showUpdateModal && (
                <UpdateModal
                    data={productToUpdate}
                    setDate={setProductToUpdate}
                    setShow={setShowUpdateModal}
                    handleUpdate={handleUpdateProduct}
                />
            )}
            <div className="w-full">
                {productList.length ? (
                    productList.map((item, index) => (
                        <Product
                            key={`${item.name}_${index}`}
                            data={item}
                            index={index}
                            isSelected={selectedName === item.name}
                            setSelectedName={setSelectedName}
                            setUpdate={setShowUpdateModal}
                            onDelete={() => deleteProduct(item.name)}
                        />
                    ))
                ) : (
                    <p className="text-center mt-5">No Product Yet</p>
                )}
            </div>
            <div className="flex flex-row justify-start w-full mt-3">
                <TextField
                    value={newProduct?.name ?? ""}
                    type="text"
                    specStyle="w-[19.5%]"
                    name={ProductProperties[0]}
                    onChange={handleChange}
                />
                <TextField
                    value={newProduct?.description ?? ""}
                    type="text"
                    specStyle="w-[50%]"
                    name={ProductProperties[1]}
                    onChange={handleChange}
                />
                <TextField
                    value={newProduct?.price ?? ""}
                    type="number"
                    specStyle="w-[10.5%]"
                    name={ProductProperties[2]}
                    onChange={handleChange}
                />
                <TextField
                    value={newProduct?.stock ?? ""}
                    type="number"
                    specStyle="w-[10%]"
                    name={ProductProperties[3]}
                    onChange={handleChange}
                />
                <button onClick={handleAddProduct} className="bg-blue-400 hover:bg-pink-500 rounded-md p-2 pr-5">
                    Add
                </button>
            </div>
        </main>
    );
};

export default ProductPage;
