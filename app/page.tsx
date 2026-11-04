import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Details from "@/components/Details";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import LoveNotes from "@/components/LoveNotes";
import Rsvp from "@/components/Rsvp";
import Gifts from "@/components/Gifts";
import LoveQuote from "@/components/LoveQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <Details />
        <Schedule />
        <Gallery />
        <LoveNotes />
        <Rsvp />
        <Gifts />
      </main>
      <LoveQuote />
      <Footer />
    </>
  );
}
