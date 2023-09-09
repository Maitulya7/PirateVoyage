import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/trip";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImge="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
