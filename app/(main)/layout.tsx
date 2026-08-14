import Navbar from "@/app/components/landing/banner/Navbar";
import Footer from "@/app/components/landing/footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
