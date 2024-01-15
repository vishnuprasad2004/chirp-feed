import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface SideLogoIconProps {
    href: string;
    icon: IconType;
    label: String;
}

const SideBarIcon: React.FC<SideLogoIconProps> = ({ href, icon: Icon, label }) => {

    return (
        <Link href={href}>
            <div className="p-2 pl-4 pr-6 flex items-center gap-4 rounded-full hover:bg-neutral-900 w-full transition duration-0 hover:duration-200 m-2">
                <Icon />
                <span className="block xl:block lg:block sm:hidden md:hidden">{label}</span>
            </div>
        </Link>
    )
}

export default SideBarIcon