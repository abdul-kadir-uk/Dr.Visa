import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Destinations from "@/components/home/Destinations";
import Process from "@/components/home/Process";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import EnquiryForm from "@/components/home/EnquiryForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Destinations />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <EnquiryForm />
    </main>
  );
}
