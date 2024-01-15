"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsBellFill,  BsCompassFill, BsHouseFill, BsPersonFill, BsSearch, BsThreeDots } from "react-icons/bs";
import SideLogoIcon from "./Layout/SideBarLogo";
import SideBarIcon from "./Layout/SideBarIcon";


export default function NavBar() {

    const list = [{
        icon: BsHouseFill,
        label: "Home",
        href: "/home"
    },
    {
        icon: BsSearch,
        label: "Explore",
        href: "/explore"
    },
    {
        icon: BsBellFill,
        label: "Notifications",
        href: "/notifications"
    },
    {
        icon: BsPersonFill,
        label: "Profile",
        href: "/profile/alexdunphy"
    }]


    return ( 
        <div className='text-2xl p-4 gap-4 w-1/5 text-left sticky flex flex-col justify-between border-r border-neutral-800 h-screen select-none '>

            <SideLogoIcon/>
            <div className="">
                {list.map(element => {
                    return (<SideBarIcon key={element.href} href={element.href} icon={element.icon} label={element.label}/>)
                })}

                {/* create post button */}
                <Link href="/compose/post">
                    <button className="p-2 pl-6 pr-6 mt-10 w-full grow bg-yellow-400 hover:bg-yellow-500 rounded-full flex justify-center items-center transition duration-0 hover:duration-200 font-bold text-xl">Post</button>
                </Link>
            </div>



            {/* Profile part */}
            <div className="rounded-full mt-10 p-2 hover:bg-neutral-900 transition duration-0 hover:duration-200 flex items-center mb-auto gap-2 bg-neutral-950">
                <Image
                    className="me-3 inline-block h-11 w-11 rounded-full bg-contain object-cover"
                    src="/profile-image.jpg"
                    width={500}
                    height={500}
                    alt="Profile picture"
                />
                <div className="flex flex-col">
                    <p className="text-lg m-0 p-0 overflow-hidden text-nowrap">Alex Dunphy</p>
                    <span className="p-0 m-0 text-sm text-neutral-400 ">@alexdunphy</span>
                </div>
                <BsThreeDots />
            </div>

        </div>
    )
}
