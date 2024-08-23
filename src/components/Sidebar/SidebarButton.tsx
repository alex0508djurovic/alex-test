import { ISidebarItem } from "@/constants/sidebarList";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type Props = ISidebarItem;

const SidebarButton: FC<Props> = ({ linkTo, display, enabled = false }) => {
    const router = useRouter();
    const handleChangeRoute = () => {
        router.push(linkTo);
    };
    return (
        <button
            onClick={handleChangeRoute}
            disabled={!enabled}
            className={`rounded-2xl ${
                enabled ? "bg-blue-500" : "bg-blue-200"
            } w-[90%] p-2 m-[5%] mt-[6px] mb-[6px] overflow-hidden ${enabled ? "block" : "hidden"} sm:block`}
        >
            <p className="text-xl">{display}</p>
        </button>
    );
};

export default SidebarButton;
