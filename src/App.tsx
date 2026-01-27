import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
export default App;
