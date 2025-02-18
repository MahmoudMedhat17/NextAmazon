import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import Menu from "./Menu";
import { Button } from "@/components/ui/button";
import {MenuIcon} from "lucide-react";
import { data } from "@/lib/data";



const Header = () => {
    return (
        <header className="bg-black text-white">
            <div className="px-2">
                {/* First navbar */}
                <div className="flex justify-between items-center">
                    {/* Logo and Website name */}
                    <div className="flex items-center">
                        <Link href="/" className="header-button flex items-center font-extrabold">
                            <Image src="/icons/logo.svg" width={40} height={40} alt={`${APP_NAME} logo`}/>
                            {APP_NAME}
                        </Link>
                    </div>
                    {/* Search bar */}
                    <div className="hidden md:block flex-1 max-w-xl">
                        <Search/>
                    </div>
                    {/* Menu section which contains Sign in and cart */}
                    <Menu/>        
                </div>
                {/* Search bar in mobile view */}
                <div className="block md:hidden py-2">
                    <Search/>
                </div>
            </div>
            {/* Second navbar */}
            <div className="px-3 bg-gray-800 flex items-center mb-[1px]">
                {/* Button to click on and shows a sidebar */}
                <Button variant="ghost" className="dark header-button flex items-center gap-1 text-base header-button [&svg]:size-6">
                    <MenuIcon/>
                    All
                </Button>
                {/* Top topics in the website bar */}
                <div className="flex items-center gap-3 overflow-hidden flex-wrap  max-h-[42px]">
                    {
                        data.headerMenus.map((data)=>(
                            <Link href={data.href} key={data.name} className="header-button !p-2">
                            {data.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;