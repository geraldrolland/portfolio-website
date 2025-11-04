import Link from "next/link";

const DownloadCV = () => {
    return (
        <Link href={"/mycv.pdf"} download className="p-[8px] bg-gray-700 lg:shadow-md  block text-white rounded-md font-medium text-[18px]">
            Download CV
        </Link>

    )
}

export default DownloadCV;
