import React from "react";
import quotebook from "../assets/quotebook.webp";

function HackHeader() {
    return (
        <header className = "bg-gray-200 p-4 h-[25vh]">
            <div className = "h-full flex flex-row items-center justify-center space-x-4">
                <img
                    src = { quotebook }
                    alt = "Quotebook Icon"
                    className = "h-full"
                />
                <div>
                    <p className = "text-5xl font-bold">
                        Hack at UCI
                    </p>
                    <p className = "text-xl font-bold">
                        Tech Deliverable
                    </p>
                </div>
            </div>
        </header>
    );
}

export default HackHeader;