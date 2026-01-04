import BestSellingProduct from "@/components/BestSellingProduct";
import ExploreOurProducts from "@/components/ExploreOurProducts";
import FlashSales from "@/components/FlashSales";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import HomeBanner from "@/components/HomeBanner";
import NewArrival from "@/components/NewArrival";
import TrustBadges from "@/components/TrustBadges";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <FlashSales />
      <hr className="border-[#CBCCCF] mx-24" />

      <BestSellingProduct />

      <div className="sm:mx-20">
        <HeroBanner />
      </div>

      <ExploreOurProducts />

      <NewArrival />

      <TrustBadges />

      <Footer />

      {/* <hr /> */}
    </>
  );
}
