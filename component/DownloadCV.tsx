import { Download } from "lucide-react";

const DownloadCV = () => {
    return (
        <a
            href="/mycv.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 border border-line px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
        >
            <Download size={14} />
            <span>CV</span>
        </a>
    );
};

export default DownloadCV;
