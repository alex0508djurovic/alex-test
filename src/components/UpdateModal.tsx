import { IProduct } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { GrClosedCaption } from "react-icons/gr";
import { IoClose, IoCloseCircle } from "react-icons/io5";

type Props = {
    data: IProduct;
    setShow: Dispatch<SetStateAction<boolean>>;
    handleUpdate: () => void;
    setDate: Dispatch<SetStateAction<IProduct>>;
};

const UpdateModal = (props: Props) => {
    const { data, setDate, setShow, handleUpdate } = props;
    return (
        <div className="absolute top-[40%] flex flex-col gap-2 align-middle justify-start bg-black text-black w-[80%] h-auto text-center p-9 rounded-lg shadow-lg sm:w-[40%] sm:top-[20%]">
            <div className="relative flex flex-row justify-center gap-1">
                <h2 className="w-full text-center text-yellow-200 text-xl">Update Product Detail</h2>
                <button onClick={() => setShow(false)} className="absolute right-4 text-white text-3xl">
                    <IoClose />
                </button>
            </div>
            <div className="flex flex-col align-top justify-start gap-1">
                <p className="text-white text-left text-sm">Name</p>
                <input
                    value={data.name}
                    type="text"
                    className="rounded-sm"
                    onChange={(e) => setDate((prev) => ({ ...prev, name: e.target.value }))}
                />
            </div>
            <div className="flex flex-col align-top justify-start gap-1">
                <p className="text-white text-left text-sm">Description</p>
                <textarea
                    value={data.description}
                    rows={Math.floor(data.description.length / 60)}
                    placeholder="Can't Update without Description"
                    className="rounded-sm"
                    onChange={(e) => setDate((prev) => ({ ...prev, description: e.target.value }))}
                />
            </div>
            <div className="flex flex-col align-top justify-start gap-1">
                <p className="text-white text-left text-sm">Price</p>
                <input
                    value={data.price}
                    type="number"
                    className="rounded-sm"
                    onChange={(e) => setDate((prev) => ({ ...prev, price: parseInt(e.target.value) }))}
                />
            </div>
            <div className="flex flex-col align-top justify-start gap-1">
                <p className="text-white text-left text-sm">Stock</p>
                <input
                    value={data.stock}
                    type="number"
                    className="rounded-sm"
                    onChange={(e) => setDate((prev) => ({ ...prev, stock: parseInt(e.target.value) }))}
                />
            </div>
            <button
                className="text-white bg-blue-950 p-1 m-4 w-[30%] ml-[66%]"
                onClick={() => {
                    handleUpdate();
                    setShow(false);
                }}
            >
                OK
            </button>
        </div>
    );
};

export default UpdateModal;
