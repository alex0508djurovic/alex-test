"use client";

import HistoryItem from "@/components/HistoryItem";
import { useProductHistory } from "@/context/historyContext";
import React, { useEffect } from "react";

const HistoryPage = () => {
    const { prodHistory } = useProductHistory();
    return (
        <div className="flex flex-col gap-2 p-6  overflow-hidden w-[70%]">
            {prodHistory.length ? (
                prodHistory
                    .sort((a, b) => new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime())
                    .map((item, index) => <HistoryItem data={item} key={`${index}${item.actionType}`} />)
            ) : (
                <p className="text-center text-3xl">No History Yet</p>
            )}
        </div>
    );
};

export default HistoryPage;
