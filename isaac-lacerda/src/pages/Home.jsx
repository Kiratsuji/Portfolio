import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specialties />
      <Projects />
      <Footer />
    </div>
  );
}
