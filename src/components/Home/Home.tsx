import "./Home.css";
import headshot from "../../assets/headshot.jpeg";
const Home = () => {
  return (
    <div className="home-section">
      <img className="headshot" src={headshot} alt="Profile picture" />
    </div>
  );
};

export default Home;
