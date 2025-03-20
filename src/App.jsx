import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <div style={{backgroundColor: "#212121"}} className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
