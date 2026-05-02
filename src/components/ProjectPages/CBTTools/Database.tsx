import CodeBlock from "../../CodeBlock";

const schemas = {
  revit_sessions: `{
  _id: ObjectId,
  dateTime: Date,

  openingStartTime: Date,
  openingEndTime: Date,
  openingReadyTime: Date,

  openingDuration: Number,
  openingGap: Number,
  totalOpeningDuration: Number,

  closingTime: Date | "",
  sessionDuration: Number | "",

  revitVersion: String,
  autodeskUserName: String,
  deviceUserName: String,
  deviceName: String,

  networkConnectionType: String,
  localIPAddress: String,

  cbtAssemblyVersion: String,

  cloudPlatform: String,
  cloudProjectName: String,

  fileName: String,
  filePath: String,
  modelId: String,
  projectId: String,

  crashStatus: Boolean,

  fileSize: Number,
  deviceFreeSpace: Number,
  warningCount: Number,

  openWorksetCount: Number,
  openWorksetNames: [String],
  missingReferences: [String],

  syncDatabaseIds: [ObjectId]
}`,
  revit_sync_events: `{
  _id: ObjectId,
  dateTime: Date,

  syncStartTime: Date,
  syncEndTime: Date,
  syncReadyTime: Date,

  duration: Number,
  gap: Number,
  totalDuration: Number,

  fileName: String,
  cloudProjectName: String,

  autodeskUserName: String,

  revitSessionId: ObjectId,

  modelId: String,
  projectId: String
}`,
  revit_heartbeat: `{
  _id: ObjectId,

  autodeskUserName: String,
  machine: String,
  revitVersion: String,

  openDocs: [
    {
      sessionId: String,
      modelName: String
    }
  ],

  activeDocId: String,
  activeDocName: String,

  activeViewId: String,
  activeViewName: String,

  activeProjectName: String,

  dateTime: Date
}`,
  plugin_use: `{
  _id: ObjectId,

  dateTime: Date,

  autodeskUserName: String,

  pluginName: String,

  fileName: String,
  cloudProjectName: String,

  modelId: String,
  projectId: String,

  notes: String
}`,
  user_mappings: `{
  _id: ObjectId,

  autodeskUserName: String,
  fullName: String,
  email: String
}`,
  view_bookmarks: `{
  _id: ObjectId,

  autodeskUserName: String,

  files: {
    "<model-or-file-guid>": {
      fileName: String,
      bookmarks: [
        {
          viewId: Number,
          viewName: String,
          dateAdded: Date
        }
      ]
    }
  }
}`,
};

type CollectionEntry = {
  name: string;
  description: React.ReactNode;
  schema: string;
  questions?: string[];
};

const collections: CollectionEntry[] = [
  {
    name: "revit_sessions",
    description: (
      <>
        Stores information about a user's Revit document session — from the
        moment a model starts opening until the document is closed. Captures
        open performance, crash status, warning counts, worksets, and device
        context.
      </>
    ),
    schema: schemas.revit_sessions,
    questions: [
      "Which Revit models are slow to open?",
      "Which users experienced long opening gaps?",
      "Which models have high warning counts?",
      "Did a previous model session crash?",
      "Which sync events belong to this session?",
    ],
  },
  {
    name: "revit_sync_events",
    description: (
      <>
        Records each sync-to-central event with timing, duration, gap, and the
        parent session reference. When a sync is inserted, its{" "}
        <span className="text-brand">_id</span> is written back into{" "}
        <span className="text-brand">revit_sessions.syncDatabaseIds</span>,
        creating a logical parent-child relationship.
      </>
    ),
    schema: schemas.revit_sync_events,
  },
  {
    name: "revit_heartbeat",
    description: (
      <>
        Stores live activity snapshots from Revit. Instead of appending new
        records, the backend uses an upsert on the unique{" "}
        <span className="text-brand">user + machine + revitVersion</span>{" "}
        combination — so each entry always reflects the latest known state.
      </>
    ),
    schema: schemas.revit_heartbeat,
    questions: [
      "Who is currently active in Revit?",
      "Which models are currently open?",
      "Which document and view is a user in right now?",
      "Which users are active in a specific model?",
    ],
  },
  {
    name: "plugin_use",
    description: (
      <>
        Tracks when a user runs a CBT Tools command inside Revit. Used to
        measure internal tool adoption and guide future plugin development.
      </>
    ),
    schema: schemas.plugin_use,
    questions: [
      "Which CBT Tools are used most often?",
      "Which projects are using custom tools?",
      "Which users are actively using automation features?",
    ],
  },
  {
    name: "user_mappings",
    description: (
      <>
        Maps Autodesk usernames to readable full names and emails. Allows the
        dashboard to display human-friendly identities instead of raw Autodesk
        account names.
      </>
    ),
    schema: schemas.user_mappings,
  },
  {
    name: "view_bookmarks",
    description: (
      <>
        Stores user-specific saved Revit views, keyed by model GUID. Each file
        entry holds the file name and an array of bookmarked views with their
        IDs and timestamps. Supports personalized workflows where users can
        return to important views across sessions.
      </>
    ),
    schema: schemas.view_bookmarks,
  },
];

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="font-main font-bold border-b border-zinc-300 pb-1 mt-2">
    {children}
  </div>
);

const Database = () => {
  return (
    <div className="font-secondary flex flex-col gap-4">
      <div>
        The MongoDB database is organized around activity-based collections.
        Instead of storing everything in one large table, each workflow has its
        own schema. This makes the data easier to query, extend, and visualize.
      </div>

      <CodeBlock>{`MongoClient
→ Database: CBT_Tools
→ Collections: revit_sessions | revit_sync_events | revit_heartbeat | plugin_use | user_mappings | view_bookmarks`}</CodeBlock>

      <SectionHeader>Collections</SectionHeader>

      <div className="flex flex-col gap-5">
        {collections.map((col) => (
          <div key={col.name} className="flex flex-col gap-2 border-l-2 border-brand pl-3">
            <div className="font-main font-bold text-brand">{col.name}</div>
            <div className="text-zinc-700">{col.description}</div>
            <CodeBlock collapsible previewLines={3}>
              {col.schema}
            </CodeBlock>
            {col.questions && (
              <div className="flex flex-col gap-1">
                <div className="text-zinc-500 text-xs font-main uppercase tracking-wide">
                  Answers questions like
                </div>
                <ul className="flex flex-col gap-0.5 pl-1">
                  {col.questions.map((q) => (
                    <li key={q} className="flex gap-2 text-zinc-600">
                      <span className="text-brand shrink-0">—</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <SectionHeader>Logical Relationships</SectionHeader>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="text-zinc-500 text-xs font-main uppercase tracking-wide">
            User identity — shared across all collections
          </div>
          <CodeBlock>{`user_mappings.autodeskUserName
  → revit_sessions.autodeskUserName
  → revit_sync_events.autodeskUserName
  → revit_heartbeat.autodeskUserName
  → plugin_use.autodeskUserName
  → view_bookmarks.autodeskUserName`}</CodeBlock>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-zinc-500 text-xs font-main uppercase tracking-wide">
            Session → sync parent-child link
          </div>
          <CodeBlock>{`revit_sessions._id
  → revit_sync_events.revitSessionId`}</CodeBlock>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-zinc-500 text-xs font-main uppercase tracking-wide">
            Model identity — shared across activity types
          </div>
          <CodeBlock>{`modelId + projectId
  → shared across sessions, syncs, plugin usage, and activity tracking`}</CodeBlock>
        </div>
      </div>
    </div>
  );
};

export default Database;
