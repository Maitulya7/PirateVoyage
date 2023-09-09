import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImge="https://images.unsplash.com/photo-1599342406161-ec4e38c870f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        title="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
