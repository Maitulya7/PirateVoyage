import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import Trip from "../components/trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImge="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Services"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
