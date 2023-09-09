import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import AboutUs from "../components/Aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImge="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
        title="About Us"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
