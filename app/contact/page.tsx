import ContactMe from "@/component/ContactMe";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact â€” Gerald Ujowundu",
    description: "Get in touch with Onyeka Gerald Ujowundu â€” available for hire via WhatsApp, email, or LinkedIn.",
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <ContactMe />
        </div>
    );
}
