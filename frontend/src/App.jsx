import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0f24] text-white flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <AppRouter />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
