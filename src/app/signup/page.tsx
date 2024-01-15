import InputField from "@/components/InputField"
import SideBarLogo from "@/components/Layout/SideBarLogo"
import { Work_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"


const work_sans = Work_Sans({weight:"600",subsets:["latin"]})

const Signup = () => {
    // const router = useRouter();
    return (
        <div className="flex flex-row">
            <Image 
                src="/twitter-banner-yellow.png" 
                className="h-screen w-auto" 
                alt=""
                width={500}
                height={500}
            />
            <div className="p-10">
                <SideBarLogo/>
                <div className="flex flex-col">
                    <span className="text-6xl mb-4"><h1 className={work_sans.className}>Happening Now</h1></span>
                    <h1 className="text-4xl font-bold">Signup</h1>

                    <InputField type="email" label="Emails"/>
                    <InputField type="text" label="Username"/>
                    <InputField type="password" label="Password"/>
                    <button className="p-2 pl-6 pr-6 mt-10 w-full grow bg-yellow-400 hover:bg-yellow-500 rounded-full flex justify-center items-center transition duration-0 hover:duration-200 font-bold text-xl">Post</button>
                    <Link href="/login" className="text-blue-500">Already have an Account</Link>
                </div>
            </div>
        </div>
    )
}


export default Signup