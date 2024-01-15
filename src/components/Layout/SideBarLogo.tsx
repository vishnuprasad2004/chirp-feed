import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";

export default function SideBarLogo() {

    return (
        <div className="pl-4 text-4xl mb-10 hover:text-yellow-300 w-min">
            <Link href="/home">
                <BsTwitter />
            </Link>
        </div>
    )
}