import { IHistory, IProduct, ProductAction } from "@/types";
import React, { FC } from "react";

interface Props {
    data: IHistory;
}

const HistoryItem: FC<Props> = ({ data: { actionType, obj, timeStamp } }) => {
    return (
        <div className="flex flex-row flex-start text-lg">
            <div className="w-[10%] min-w-[120px] text-md">{new Date(timeStamp).toISOString().split("T")[0]}</div>
            <div className="min-w-[100px] text-center">
                <p
                    className={`rounded-md ${
                        actionType === ProductAction.Add
                            ? "bg-pink-300"
                            : actionType === ProductAction.Delete
                            ? "bg-gray-300"
                            : "bg-yellow-300"
                    } `}
                >
                    {actionType}
                </p>
            </div>
            <div className="w-[50%] pl-6">
                <p>{obj.name}</p>
            </div>
        </div>
    );
};

export default HistoryItem;
