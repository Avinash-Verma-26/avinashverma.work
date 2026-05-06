import { useState } from "react";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="font-main font-bold border-b border-zinc-300 pb-2 mt-2 mb-1">
    {children}
  </div>
);

type PageEntry = {
  name: string;
  description: React.ReactNode;
  bullets: string[];
  image: string | string[];
};

const pages: PageEntry[] = [
  {
    name: "Overview",
    image: "/project-images/vision_homepage.png",
    description:
      "The main landing page. Shows five summary cards (Sessions, Syncs, Active Projects, Active Users, Plugin Use) and a Sessions & Syncs Over Time area chart — all scoped to the selected date range.",
    bullets: [
      "Date range picker (Today / 7d / 30d / All Time / custom) updates every card and chart simultaneously",
      "Auto-refreshes on a configurable interval so the page stays live without a manual reload",
    ],
  },
  {
    name: "All Users",
    image: "/project-images/vision_all_users.png",
    description:
      "A directory of every registered user. Displays each user's last-seen timestamp, total session count, and the plugin version they most recently reported.",
    bullets: [
      "Sortable by name, last activity, or session count",
      "Links through to a per-user detail view with full history",
    ],
  },
  {
    name: "Active Users",
    image: "/project-images/vision_active_users.png",
    description:
      "Real-time cards for every user currently inside Revit. Derives presence from live heartbeat records that expire automatically after 180 s — no manual cleanup needed.",
    bullets: [
      "Shows active document name, current view, and machine hostname per user",
      "Sessions with no closing time are flagged as likely crashes and visually marked",
    ],
  },
  {
    name: "Active Projects",
    image: "/project-images/vision_active_projects.png",
    description:
      "Groups live Revit activity by model/project. Shows how many users are inside each file and which views they are working in at that moment.",
    bullets: [
      "Useful for spotting coordination conflicts — multiple users in the same model",
      "Refreshes on the same interval as Active Users",
    ],
  },
  {
    name: "All Models",
    image: [
      "/project-images/vision_all_models.png",
      "/project-images/vision_all_models_2.png",
    ],
    description:
      "A list of every Revit model that has ever been opened by users. Surfaces total session count, last-opened date, and file size trends per model.",
    bullets: [
      "Chart view for all model sizes to have a higher level picture of models within the firm.",
      "Links through to per-model session and sync history",
    ],
  },
  {
    name: "Plugins",
    image: "/project-images/vision_plugins.png",
    description:
      "Shows which user used which plugin in which project and when. Designed to surface plugin adoption patterns and real-world usage by project — helping the team understand which features are being picked up, by whom, and in what context.",
    bullets: [
      "Filterable by plugin type to pinpoint specific adoption patterns",
      "Helps identify the most common use cases and which projects drive the most plugin activity",
    ],
  },
  {
    name: "Cloud Data",
    image: [
      "/project-images/vision_cloud_data.png",
      "/project-images/vision_cloud_data_2.png",
      "/project-images/vision_cloud_data_3.png",
    ],
    description:
      "A recursive tree browser for Autodesk Platform Services (APS). Lazily fetches hub → project → folder → model hierarchies for both ACC and BIM 360 project types.",
    bullets: [
      "Bearer token obtained via Autodesk OAuth flow on the backend — not exposed to the client",
      "Folder contents are loaded on demand to avoid fetching the full tree upfront",
      "Shows all dtaa regarding, members, companies, admins and non-admins and Revit models for any project on the CBT cloud hub",
    ],
  },
  {
    name: "Sessions",
    image: [
      "/project-images/vision_sessions.png",
      "/project-images/vision_sessions_2.png",
      "/project-images/vision_sessions_3.png",
    ],
    description:
      "Paginated, searchable log of every Revit session in the selected date range. Each row shows user, model, open duration, workset count, and crash status.",
    bullets: [
      "Crashes (sessions without a closing time or marked as crash by a backend algorithm of identifying crashes) are highlighted for easy triage",
      "Links through to the associated syncs for that session",
    ],
  },
  {
    name: "Syncs",
    image: [
      "/project-images/vision_syncs.png",
      "/project-images/vision_syncs_2.png",
    ],
    description:
      "Per-sync breakdown showing sync duration,and the parent session. Lets the team identify slow or anomalous syncs across any date range.",
    bullets: [],
  },
  {
    name: "Warnings",
    image: [
      "/project-images/vision_warnings.png",
      "/project-images/vision_warnings_2.png",
      "/project-images/vision_warnings_3.png",
    ],
    description:
      "Charts warning frequency per model and per user. High warning counts often indicate data quality issues in a BIM file and are aggregated here for quick review.",
    bullets: [
      "Warning counts captured from the plugin payload on each session start",
      "Project-level summaries show max warning counts across all sessions for that model",
    ],
  },
];

const ImageSlider = ({ images, name }: { images: string[]; name: string }) => {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative rounded-lg overflow-hidden ring-1 ring-zinc-200 shadow-sm">
      <img
        src={images[idx]}
        alt={`${name} screenshot ${idx + 1}`}
        className="w-full block"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setIdx((i) => (i - 1 + images.length) % images.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-zinc-200 rounded-full w-7 h-7 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-zinc-600"
            >
              <path d="M10 4L6 8l4 4" />
            </svg>
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-zinc-200 rounded-full w-7 h-7 flex items-center justify-center shadow-sm transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-zinc-600"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${i === idx ? "bg-brand" : "bg-zinc-300 hover:bg-zinc-400"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-3.5 h-3.5 shrink-0 transition-all duration-250 ${
      open ? "text-brand rotate-180" : "text-zinc-300 group-hover:text-zinc-500"
    }`}
  >
    <path d="M4 6l4 4 4-4" />
  </svg>
);

const PageAccordion = ({ page, index }: { page: PageEntry; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group w-full flex items-center gap-3 py-2.5 px-2 text-left rounded hover:bg-zinc-100 transition-colors duration-150 cursor-pointer"
      >
        <span className="font-main text-xs text-zinc-400 w-5 shrink-0 tabular-nums group-hover:text-zinc-600 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`font-main font-semibold text-sm flex-1 transition-colors duration-150 ${
            open ? "text-brand" : "text-zinc-800 group-hover:text-brand"
          }`}
        >
          {page.name}
        </span>
        <Chevron open={open} />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "900px" : "0px" }}
      >
        <div className="pl-10 pr-2 pt-1 pb-5 flex flex-col gap-3">
          <ImageSlider
            images={Array.isArray(page.image) ? page.image : [page.image]}
            name={page.name}
          />
          <p className="text-zinc-600 text-sm leading-relaxed">
            {page.description}
          </p>
          <ul className="flex flex-col gap-1.5">
            {page.bullets.map((b) => (
              <li
                key={b}
                className="flex gap-2 text-zinc-400 text-xs leading-relaxed"
              >
                <span className="text-brand shrink-0 mt-px">—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type FeatureEntry = {
  name: string;
  description: string;
};

const features: FeatureEntry[] = [
  {
    name: "Live Presence",
    description:
      "See who is in Revit right now, which file they have open, and which view they're working in. Cards refresh automatically — no need to ask around or manually check in.",
  },
  {
    name: "Session & Sync History",
    description:
      "Browse the full log of who opened what, when, and for how long. One date range filter updates sessions, syncs, and summaries all at once across every history page.",
  },
  {
    name: "User Summaries",
    description:
      "A quick snapshot per team member — session count, sync frequency, and current plugin version. Handy for spotting who might need a follow-up or hasn't updated yet.",
  },
  {
    name: "Plugin Adoption",
    description:
      "Shows which plugin version each user is running at a glance. Useful for confirming the whole team is on the same release before rolling out an update.",
  },
  {
    name: "Warning Trends",
    description:
      "Tracks how often Revit warnings appear per model and per user over time. A spike usually signals a data quality issue — this page makes it easy to identify which file is the source.",
  },
  {
    name: "Cloud Data Browser",
    description:
      "Browse Autodesk cloud projects directly inside Vision, navigating from hub down to individual model files without leaving the dashboard.",
  },
  {
    name: "Secure Access",
    description:
      "Login is protected by a token stored in a secure, tamper-resistant cookie — not browser storage. Sessions last 14 days and every protected route rejects requests without a valid token.",
  },
];

const VisionUI = () => {
  return (
    <div className="font-secondary flex flex-col gap-4">
      <div>
        Vision is a full-stack internal analytics dashboard built for CBT
        Digital Practice to monitor the Revit usage and metrics across the firm.
        It provides real-time visibility into who is actively in Revit, surfaces
        historical session and sync performance data, and exposes a browser for
        Autodesk cloud project hierarchies — all behind a secure JWT-based
        login.
      </div>

      <SectionHeader>Pages</SectionHeader>

      <div className="flex flex-col">
        {pages.map((page, i) => (
          <PageAccordion key={page.name} page={page} index={i} />
        ))}
      </div>

      <SectionHeader>Features</SectionHeader>

      <div className="grid grid-cols-2 gap-3">
        {features.map((f) => (
          <div
            key={f.name}
            className="flex flex-col gap-2 p-4 rounded-lg bg-white border-2 border-brand/40 shadow-sm"
          >
            <div className="font-main font-bold text-base text-brand">
              {f.name}
            </div>
            <div className="text-zinc-600 text-sm leading-relaxed">
              {f.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionUI;
