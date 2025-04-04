import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Buylist, Buypages, Home } from "./pages";
import { Footer } from "./components";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy/:id" element={<Buypages />} />
        <Route path="/store/:id" element={<Buylist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
