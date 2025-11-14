import { Link } from "react-router-dom";
import "./../styles/layout.css";

function Home() {
  return (
    <div className="page home-page">
      <h1>CarBidX V2</h1>
      <p>The dealer-vs-dealer auction built for real buyers.</p>

      <div className="home-actions">
        <Link className="btn" to="/buyer/request">
          Start a Vehicle Request
        </Link>

        <Link className="btn secondary" to="/dealer/login">
          Dealer Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
