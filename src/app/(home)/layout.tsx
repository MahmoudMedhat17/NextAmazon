import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/header/Index";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col flex-1">
            {children}
        </main>
        <Footer/>
      </div>
  );
};