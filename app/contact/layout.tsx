import Notification from "@/component/Notification";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="relative  overflow-x-hidden">
    <Notification />
    {children}
    </div>
  );
}