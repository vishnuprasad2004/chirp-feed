"use client";

import Image from "next/image";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";


interface PostProps {
    avaterUrl: String,
    name: String
    username: String,
    postDescription:String,
    likes: Number,
    date: String,
}

const Post:React.FC<PostProps> = ({ avaterUrl, date, likes, postDescription, username, name}) => {


    const [liked, setLiked] = useState(false)

    return(
        <div className="p-4 m-3 rounded-3xl bg-neutral-900">
            <div className="flex flex-row items-center">
                <Image
                    className="me-3 inline-block h-11 w-11 rounded-full bg-contain object-cover"
                    src={avaterUrl.toString()}
                    width={500}
                    height={500}
                    alt="Profile picture"
                />
                <div className="flex flex-col justify-evenly items-start">
                    <span>{name}<span className="text-xs ml-1 text-neutral-300">{"@"+username.toString()}</span></span>
                    <span className="text-xs text-neutral-400">{date}</span>
                </div>
            </div>
            <div className="m-1 mt-1">
                {postDescription}
                <div className="ml-10 flex flex-row items-center w-max select-none">
                    <span className="p-2" onClick={() => {setLiked(!liked)}}>
                        {liked && <BsHeartFill className="text-rose-700 hover:bg-neutral-700"/>}
                        {!liked && <BsHeart className="text-neutral-300-700 hover:bg-neutral-700"/>}
                    </span>
                    {likes.toString()+" likes"}
                </div>
            </div>
        </div>
    )    
}

export default Post