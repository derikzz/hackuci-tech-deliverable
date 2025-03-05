import React from "react";
import quotebook from "../assets/quotebook.webp";

function HackHeader() {
    return (
        <header className = "bg-gray-200 p-4 mb-6 h-[20vh] flex flex-row items-center justify-left space-x-4">
            <img
                src = { quotebook }
                alt = "Quotebook Icon"
                className = "h-full"
            />
            <div>
                <h1 className = "text-3xl font-bold">
                    Hack at UCI
                </h1>
                <p className = "text-xl font-bold">
                    Tech Deliverable
                </p>
            </div>
        </header>
    );
}

export default HackHeader;