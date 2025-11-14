import { BrowserRouter } from "react-router-dom";
import Router from "./router.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
