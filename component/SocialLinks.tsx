"use client";

import { LuLinkedin } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";


type SocialLinksPropType = {
    gap: string,
    size: string,
    color: string,
};
const SocialLinks = ({size, gap, color}: SocialLinksPropType) => {
    return (
        <>
        <div className={`flex gap-x-${gap} mt-10`}>
            <a href="#" className={`text-${color}`}><LuLinkedin className={`text-[${size}] text-${color}`} /></a>
            <a href="#" className={`text-${color}`}><FiGithub className={`text-[${size}] text-${color}`} /></a>
            <a href="#" className={`text-${color}`}><SlSocialTwitter className={`text-[${size}] text-${color}`} /></a>
        </div>
        </>
    )
}

export default SocialLinks;
