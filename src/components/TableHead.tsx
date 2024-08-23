import React from "react";

const TableHead = () => {
  return (
    <div className="flex flex-row w-full text-center border-black border-2">
      <div className="w-[20%]  border-black border-r-2">Name</div>
      <div className="w-[50%]  border-black border-r-2">Description</div>
      <div className="w-[15%]  border-black border-r-2">Price</div>
      <div className="w-[15%]">Stock</div>
    </div>
  );
};

export default TableHead;
