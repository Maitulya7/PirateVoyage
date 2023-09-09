import TripDate from "./tripdata";
import "./tripstyle.css";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripDate
          image="https://images.unsplash.com/photo-1581541709890-f566353a3807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
          heading="Trip to swizerland"
          text="
          Switzerland, a picturesque paradise nestled in the heart of Europe, beckons with its breathtaking Alpine landscapes, pristine lakes, and charming villages. Explore the Swiss Alps for exhilarating adventures, savor delectable Swiss chocolates, and experience the seamless blend of natural beauty and cultural elegance in this enchanting destinati"
        />
        <TripDate
          image="https://images.unsplash.com/photo-1505881402582-c5bc11054f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          heading="Trip to Maldives"
          text="
          
The Maldives, a tropical haven in the Indian Ocean, invites you to discover its azure waters, overwater bungalows, and vibrant marine life. With coral reefs to explore and beaches that stretch for miles, it's a tranquil escape for honeymooners and sun-seekers alike. Paradise found in the Maldives."
        />
        <TripDate
          image="https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          heading="Trip to India"
          text="
          
India, a land of diverse cultures, ancient traditions, and vibrant colors, is a tapestry of experiences. From the iconic Taj Mahal to the bustling markets of Delhi, India offers a kaleidoscope of sights, sounds, and flavors. Explore its rich history, spirituality, and cuisine as you journey through this captivating subcontinent."
        />
      </div>
    </div>
  );
}

export default Trip;
