import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Info from "@/Components/Info";
import { Navbar } from "@/Components/Navbar";

export default function Page() {
  return (<>
    <main className="m-0 p-0 box-border">
      <Navbar />
      <Hero />
      <Info />
      <Banner />
      <Footer />
    </main>
  </>)
}