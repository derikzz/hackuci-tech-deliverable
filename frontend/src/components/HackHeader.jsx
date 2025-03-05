import React from "react";
import quotebook from "../assets/quotebook.webp";

function HackHeader() {
    return (
        <header className = "bg-gradient-to-tr from-blue-100 to-blue-500 p-4 h-[20vh]">
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