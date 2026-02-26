BEGIN;

CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  role TEXT,
  year TEXT,
  tags TEXT,
  tools TEXT,
  highlights TEXT,
  images TEXT
);

DELETE FROM projects;

INSERT INTO projects (
  id,
  title,
  description,
  link,
  role,
  year,
  tags,
  tools,
  highlights,
  images
) VALUES
(
  1,
  'Revit Plugins + Dashboard',
  'Revit C# add-ins (WebView UI) for model management + cleanup, paired with a React dashboard and MongoDB backend with WebSockets for live metrics.',
  '#',
  'Design Technologist',
  '2024',
  '["BIM","Automation","Dashboard"]',
  '["Revit","C#","React","MongoDB","WebSockets"]',
  '["Model cleanup automation","Live metrics dashboard"]',
  '["project-images/1_1.jpg","project-images/1_2.jpg"]'
),
(
  2,
  'Rental Lease Visualizer',
  '3D leasing analytics viewer combining Rhino geometry and Excel lease data, featuring interactive unit selection, hover details, and a timeline slider for visualizing occupancy over time.',
  'https://cbtit.github.io/rental-timeline/',
  'Design Technologist',
  '2023',
  '["Visualization","Analytics","Rhino"]',
  '["Rhino","JavaScript","React","Excel"]',
  '["Interactive unit selection","Timeline-based occupancy view"]',
  '["project-images/2_1.jpg","project-images/2_2.jpg"]'
);

COMMIT;
