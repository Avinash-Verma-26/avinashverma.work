import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex font-main min-h-screen w-[60%] flex-col items-start justify-start gap-2.5 box-border pt-12.5">
      <Navigation />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
