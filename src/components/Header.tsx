"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
    const router = useRouter();
    return (
        <nav className="z-10 absolute top-0 flex flex-nowrap align-middle justify-end  w-full h-[50px] text-white bg-[#343a40] border-b-2 border-red-900">
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 hidden sm:block cursor-pointer"
                onClick={() => router.push("/")}
            >
                <p>Hello, I am Aleksandar Djurovic</p>
            </div>
            <div className="mr-8 h-full flex flex-col">
                <RxAvatar className="h-[80%] mt-[10%] w-auto cursor-pointer" />
                <div>
                    <p className="text-xs">Admin</p>
                </div>
            </div>
            <button className="mr-8">Sign Out</button>
        </nav>
    );
};

export default Header;
