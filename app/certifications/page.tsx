import Certifications from "@/component/Certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Certifications â€” Gerald Ujowundu",
    description: "Certifications and credentials of Onyeka Gerald Ujowundu â€” AWS, ALX Africa, and National Open University of Nigeria.",
};

export default function CertificationsPage() {
    return (
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <Certifications />
        </div>
    );
}
