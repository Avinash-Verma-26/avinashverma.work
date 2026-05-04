import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex font-main min-h-screen w-[90%] md:w-[60%] flex-col items-start justify-start gap-2.5 box-border pt-8 md:pt-12.5">
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
