import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
