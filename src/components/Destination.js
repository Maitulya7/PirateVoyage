import DestinationDate from "./Destinationdata";
import "./Destinationstyle.css";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot , within a time frame</p>

        <DestinationDate
          className="first-des"
          heading="Japan"
          text="Discover the Land of the Rising Sun, Japan, where ancient traditions
        blend seamlessly with modern innovation. Immerse yourself in the
        vibrant streets of Tokyo, where futuristic skyscrapers coexist with
        historic temples. Explore Kyoto's serene beauty, home to stunning
        cherry blossoms and traditional tea ceremonies. Indulge in exquisite
        sushi and savor the delicate flavors of Japanese cuisine. Don't miss
        the tranquility of Mount Fuji's iconic silhouette or the historic
        allure of Hiroshima's Peace Memorial Park. Whether you're seeking
        cultural richness, natural beauty, or culinary delights, Japan
        offers an unforgettable journey into a world where tradition and
        modernity harmonize."
          img1="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          img2="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />

        <DestinationDate
          className="first-des-revers"
          heading="Roma"
          text="Explore the eternal allure of Rome, where history and art converge in a timeless embrace. Wander through the Colosseum's ancient grandeur and the Roman Forum's historic echoes. Discover the Vatican City's spiritual treasures, from St. Peter's Basilica to the artistic marvels of the Sistine Chapel. Meander along cobblestone streets to encounter charming piazzas and fountains like the iconic Trevi Fountain. Savor delectable Italian cuisine in quaint trattorias and indulge in gelato under the Roman sun. Rome's charisma is palpable, from the grandeur of its past to the vibrancy of its present, making it a city where every corner tells a story of unparalleled significance."
          img1="https://images.unsplash.com/photo-1591014979417-20f9a787a4da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80"
          img2="https://images.unsplash.com/photo-1596627116790-af6f46dddbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
    </>
  );
};

export default Destination;
