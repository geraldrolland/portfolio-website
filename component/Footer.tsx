"use client";

import SocialLinks from "./SocialLinks";
import CopyRight from "./CopyRight";

const Footer = () => {
    return (
        <>
        <div className="w-full flex flex-col items-center gap-y-4 py-4 min-h-[70px] bg-gray-800 mt-[50px]">
        <SocialLinks size="20px" gap="4" color="white" />
        <CopyRight />
        </div>

        </>
    )
}

export default Footer;