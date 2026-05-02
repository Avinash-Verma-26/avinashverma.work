import overviewGraphic from "../../../assets/cbt-project-images/overview-graphic.jpg";

const Overview = () => {
  return (
    <div className="font-secondary flex flex-col gap-1">
      <div>
        CBT Tools is an integrated platform that connects custom{" "}
        <b>Revit Plugin, a backend data layer, and a React web dashboard</b> to
        make model activity and tool usage more visible.
      </div>
      <ol className="list-decimal pl-10">
        <li>
          The Revit plugins capture telemetry and support model-related
          workflows
        </li>
        <li>the backend stores and organizes that information</li>
        <li>
          the web UI turns it into a clear, readable view of how teams and
          models are performing
        </li>
      </ol>
      <div>
        Together, the system creates a centralized way to monitor usage,
        understand model behavior, and support better BIM decision-making.
      </div>
      <img src={overviewGraphic} alt="overview image" />
    </div>
  );
};

export default Overview;
