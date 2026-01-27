import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
