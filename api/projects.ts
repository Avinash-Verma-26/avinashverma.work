import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

export const config = {
  runtime: "nodejs",
};

const DB_PATH = path.join("/tmp", "projects.db");
const SCHEMA_SQL = `
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
`;

const parseJsonArray = (value: string | null) => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const ensureDatabase = () => {
  if (fs.existsSync(DB_PATH)) return;
  const db = new Database(DB_PATH);
  db.exec(SCHEMA_SQL);
  db.close();
};

export default function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end("Method Not Allowed");
    return;
  }

  try {
    ensureDatabase();
    const db = new Database(DB_PATH, { readonly: true, fileMustExist: true });
    const rows = db.prepare("SELECT * FROM projects ORDER BY id").all();
    db.close();

    const projects = rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      link: row.link,
      role: row.role ?? null,
      year: row.year ?? null,
      tags: parseJsonArray(row.tags ?? null),
      tools: parseJsonArray(row.tools ?? null),
      highlights: parseJsonArray(row.highlights ?? null),
      images: parseJsonArray(row.images ?? null),
    }));

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ projects }));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Failed to load projects." }));
  }
}
