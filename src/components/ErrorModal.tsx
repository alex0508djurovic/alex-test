import React, { Dispatch, SetStateAction } from "react";

type Props = {
    msg: string;
    setShow: Dispatch<SetStateAction<boolean>>;
};

const ErrorModal = (props: Props) => {
    const { msg, setShow } = props;
    return (
        <div
            className="flex flex-col gap-4 p-8  absolute mb-4 text-2xl top-[30%] text-white rounded-lg bg-gray-900 dark:bg-gray-800 dark:text-red-400"
            role="alert"
        >
            <div>{msg}</div>
            <button className="bg-blue-950 w-full" onClick={() => setShow(false)}>
                OK
            </button>
        </div>
    );
};

export default ErrorModal;
