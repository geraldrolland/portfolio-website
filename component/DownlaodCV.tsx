import Link from "next/link";
import { Download } from "lucide-react";

const DownloadCV = () => {
    return (
        <Link
            href="/mycv.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 sm:px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
        >
            <Download size={16} />
            <span>Download CV</span>
        </Link>
    )
}

export default DownloadCV;
