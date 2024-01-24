"use client";

import NavBar from "@/components/Navbar"
import { BsSearch } from "react-icons/bs"


const Explore = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="flex object-center max-w-max">
                <input type="search" name="" id="" className="absolute pl-9 pr-2 m-2 p-1 rounded-full bg-neutral-800" />
                <BsSearch className="m-4 absolute"></BsSearch>
            </div>
        </>
    )
}

export default Explore