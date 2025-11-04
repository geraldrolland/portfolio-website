"use client";

import Menu from "./Menu";
import Separator from "./Seperator";
import DownloadCV from "./DownlaodCV";
import  {MenuIcon} from "lucide-react";

type NavBarPropType = {
    setDisplayMenu: (displayMenu: boolean) => void,
};
const NavBar = ({ setDisplayMenu}: NavBarPropType) => {
    return (
        <nav className="w-full bg-white h-[50px] z-10 fixed top-0 left-0 right-0 md:shadow-md shadow-none flex  md:justify-end justify-between items-center px-4">
            <MenuIcon className="md:hidden block cursor-pointer" onClick={() => setDisplayMenu(true)} />
            <div id="menu-for-med-screens" className="h-full flex gap-x-8 items-center md:px-1">
                <Menu />
                <Separator />
                <DownloadCV />
            </div>

        </nav>
    )
}

export default NavBar;