import "./Overview.css";
import overviewGraphic from "../../assets/cbt-project-images/overview-graphic.jpg";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="summary">
        CBT Tools is an integrated platform that connects custom{" "}
        <b>Revit Plugin, a backend data layer, and a React web dashboard</b> to
        make model activity and tool usage more visible. The Revit plugins
        capture telemetry and support model-related workflows, the backend
        stores and organizes that information, and the web UI turns it into a
        clear, readable view of how teams and models are performing. Together,
        the system creates a centralized way to monitor usage, understand model
        behavior, and support better BIM decision-making.
      </div>
      <img className="infographic" src={overviewGraphic} alt="overview image" />
    </div>
  );
};

export default Overview;
