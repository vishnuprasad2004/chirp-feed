"use client";

import NavBar from "@/components/Navbar"
import { BsSearch } from "react-icons/bs"


const Explore = () => {
    return (
        <div className="flex flex-row">
            {/* <NavBar></NavBar> */}
            <div className="flex object-center">
                <input type="search" name="" id="" className="absolute pl-9 pr-2 m-2 p-1 rounded-full bg-neutral-800"/>
                <BsSearch className="m-4 absolute"></BsSearch>
            </div>
        </div>
    )
}

export default Explore