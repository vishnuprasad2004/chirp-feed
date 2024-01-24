"use client";

import NavBar from "@/components/Navbar";


const ProfilePage = ({params}:any) => {
    return(
        <>
            <NavBar/>
            <div>{params.id}</div>
        </>
    )
}


export default ProfilePage