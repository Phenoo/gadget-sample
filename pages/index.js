import Overflow from "@/components/Overflow";
import BlogSection from "@/components/sections/BlogSection";
import Faq from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import ReviewSection from "@/components/sections/ReviewSection";
import Services from "@/components/sections/Services";
import Subscribe from "@/components/sections/Subscribe";
import { FaStar, FaCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Overflow text='ready to get started?' bgcolor='#111' colorx='#fff' /> */}
      <Services />
      <Overflow text='ready to get started?' colorx='#111'icon={<FaCircle color='#ff8180' />} />
      <Subscribe />
      <Overflow text='success stories' bgcolor='#111' colorx='#fff' />
      <ReviewSection />
      <Overflow text='technoly news and trends' bgcolor='#111' colorx='#fff'  />
      <BlogSection />
      <Faq  />
      <Overflow text='ready to take a leap? '  bgcolor='#111' colorx='#fff' />

    </main>
  )
}
