import React from "react";
import quotebook from "../assets/quotebook.webp";

function HackHeader() {
    return (
        <header className = "bg-gradient-to-tr from-blue-100 to-blue-500 p-4 h-[25vh]">
            <div className = "h-full flex flex-row items-center justify-center space-x-4">
                <div>
                    <p className = "text-6xl font-bold">
                        Hack at UCI
                    </p>
                    <p className = "text-2xl font-bold">
                        Tech Deliverable
                    </p>
                </div>
                <img
                    src = { quotebook }
                    alt = "Quotebook Icon"
                    className = "h-full p-4"
                />
            </div>
        </header>
    );
}

export default HackHeader;