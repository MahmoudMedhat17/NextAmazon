"use client";

import {ChevronUp} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { APPNAME } from "@/lib/constants";

const Footer = () => {

    const date = new Date();
    const yearlyDate = date.getFullYear();

  return (
    <footer className="bg-black text-white">
        <div className="w-full">
            <Button variant="ghost" className="w-full bg-gray-800 text-white" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
                <ChevronUp/>
                Back to top
            </Button>    
        </div>
        <div className="p-4">
            <div className="flex items-center justify-center gap-3 text-sm">
                <Link href="/page/conditions-of-us">
                    Conditions of Use
                </Link>
                <Link href="/page/privacy-policy">
                    Privacy Notice
                </Link>
                <Link href="/page/help">
                    Help                
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <p>
                © 2000-{yearlyDate}, {APPNAME}, Inc. or its affiliates
                </p>
            </div>
            <div className="mt-8 flex items-center justify-center text-sm">
                <p className="text-gray-400">El-Sheikh-Zayed City, Giza | +201012107269</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;