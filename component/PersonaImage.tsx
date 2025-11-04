'use client';

import Image from "next/image";
import myImage from "../public/my-image.jpg";


type PersonaImagePropType = {
    image: any,
}

const PersonaImage = ({image}: PersonaImagePropType) => {
    return (
        <>
        <div className={`w-[300px] h-[400px]  relative  bg-gray-800 relative`}>
            <div className={`w-[100%]  h-[100%] absolute -top-[15px] -right-[15px]`}>
                <Image src={image} alt="my-image" className="w-full h-full object-cover" />
            </div>

        </div>
        </>
    )
}

export default PersonaImage;