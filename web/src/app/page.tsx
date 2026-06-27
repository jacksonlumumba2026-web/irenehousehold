import { Hero } from "@/components/home/Hero";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FlashSaleBanner } from "@/components/home/FlashSaleBanner";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsStrip } from "@/components/home/StatsStrip";
import {
  FeaturedProducts,
  BestSellers,
  NewArrivals,
} from "@/components/home/FeaturedProducts";
import { LifestyleGallery } from "@/components/home/LifestyleGallery";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { PaymentSection } from "@/components/home/PaymentSection";
import { HotelSection } from "@/components/home/HotelSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <CategoryGrid />
      <FlashSaleBanner />
      <WhyChooseUs />
      <StatsStrip />
      <FeaturedProducts />
      <BestSellers />
      <NewArrivals />
      <LifestyleGallery />
      <ReviewsCarousel />
      <PaymentSection />
      <HotelSection />
      <CommunitySection />
      <Newsletter />
    </>
  );
}
