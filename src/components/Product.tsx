import { useProductHistory } from "@/context/historyContext";
import { IHistory, IProduct, ProductAction } from "@/types";
import React, { Dispatch, MouseEvent, SetStateAction } from "react";

type Props = {
    data: IProduct;
    isSelected: boolean;
    index: number;
    setSelectedName: (data: string) => void;
    onDelete: () => void;
    setUpdate: Dispatch<SetStateAction<boolean>>;
};

const Product = (props: Props) => {
    const { setProdHistory } = useProductHistory();
    const { data, index, setSelectedName, isSelected, onDelete, setUpdate } = props;
    const handleUpdate = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setUpdate(true);
    };
    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setProdHistory(
            (prev) =>
                [
                    ...prev,
                    {
                        actionType: ProductAction.Delete,
                        obj: data,
                        timeStamp: Date.now(),
                    },
                ] as IHistory[]
        );
        onDelete();
    };
    return (
        <div
            className={`${
                index % 2 && !isSelected ? "bg-gray-200" : ""
            } flex flex-row  w-full min-h-[50px] text-wrap overflow-hidden cursor-pointer border-t-0 border-black border-2 ${
                isSelected ? "bg-gray-400" : ""
            }`}
            onClick={() => setSelectedName(isSelected ? "" : data?.name)}
        >
            <div className="flex flex-row justify-start pl-2 align-middle text-wrap overflow-hidden w-[20%]  border-black border-r-2 ">
                <p className="select-none">{data.name}</p>
            </div>
            <div className="flex flex-row justify-start pl-3 align-middle w-[50%] overflow-hidden  border-black  border-r-2">
                <p className="select-none">
                    {data.description ?? "No description for this product  border-black border-2"}
                </p>
            </div>
            <div className="flex flex-row justify-center align-middle w-[15%]  border-black  overflow-hidden border-r-2">
                {isSelected ? (
                    <button
                        onClick={handleUpdate}
                        className={` w-full h-full   hover:bg-pink-300 ${isSelected && "bg-blue-500"}`}
                    >
                        Change
                    </button>
                ) : (
                    <p className="select-none">{data.price ?? 0}</p>
                )}
            </div>
            <div className="flex flex-row justify-center align-middle w-[15%] ">
                {isSelected ? (
                    <button
                        className={` w-full h-full hover:bg-pink-300 ${isSelected && "bg-blue-500"}`}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                ) : (
                    <p className="select-none">{data.stock ?? "N/A"}</p>
                )}
            </div>
        </div>
    );
};

export default Product;
