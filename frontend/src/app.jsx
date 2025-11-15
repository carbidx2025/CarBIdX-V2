import Navbar from "./components/navbar";
import AppRouter from "./router/approuter.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
