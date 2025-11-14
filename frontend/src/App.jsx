import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0f24] text-white">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
