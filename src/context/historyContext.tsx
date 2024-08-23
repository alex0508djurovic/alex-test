'use client'

import { mockProductHistory } from "@/constants/mockHistory";
import { IHistory } from "@/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface historyContextType {
  prodHistory: IHistory[];
  setProdHistory: React.Dispatch<React.SetStateAction<IHistory[]>>;
}

const historyContext = createContext<historyContextType | undefined>(undefined);

export const HistoryProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [prodHistory, setProdHistory] = useState<IHistory[]>(mockProductHistory);

  return (
    <historyContext.Provider value={{ prodHistory, setProdHistory }}>
      {children}
    </historyContext.Provider>
  );
};

export const useProductHistory = () => {
  const context = useContext(historyContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a HistoryProvider");
  }
  return context;
};

export default HistoryProvider;
