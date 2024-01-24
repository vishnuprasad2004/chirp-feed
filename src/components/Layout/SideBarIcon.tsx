import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface SideLogoIconProps {
    href?: string;
    icon: IconType;
    label: String;
    onClick?: () => void
}

const SideBarIcon: React.FC<SideLogoIconProps> = ({ href, icon: Icon, label, onClick }) => {

    return (
        <Link href={href || "#"}>
            {/* small screen */}
            <div className="relative flex p-2 pl-4 pr-4 object-center justify-center items-center gap-4 rounded-full hover:bg-neutral-900  transition duration-0 hover:duration-200 m-2 lg:hidden cursor-pointer">
                <Icon onClick={onClick} />
            </div>

            {/* large screen */}
            <div className="relative p-2 pl-4 pr-6 items-center gap-4 rounded-full hover:bg-neutral-900 w-full transition duration-0 hover:duration-200 m-2 hidden lg:flex cursor-pointer">
                <Icon onClick={onClick}/>
                <span className="block ">{label}</span>
            </div>
        </Link>
    )
}

export default SideBarIcon