import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#212121" }} className="flex h-screen">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
