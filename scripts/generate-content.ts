import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  diaries: Array<{ slug: string; title: string; date: string; tags?: string[]; content: string }>;
  notes: Array<{ slug: string; title: string; category?: string; content: string }>;
  gallery: Array<{ path: string; title?: string; description?: string }>;
  videos: Array<{ url: string; title?: string; thumbnailUrl?: string; description?: string }>;
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    diaries: [],
    notes: [],
    gallery: [],
    videos: [],
  };

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as Record<string, unknown>;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          data.diaries.push({ ...diary, slug } as ContentData["diaries"][0]);
        }
      }
    }
    data.diaries.sort((a, b) => {
      try {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Load notes
  try {
    const notesDir = resolve(contentPath, "notes");
    const noteFiles = await readdir(notesDir);
    for (const file of noteFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(notesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const note = yaml.load(content) as Record<string, unknown>;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          data.notes.push({ ...note, slug } as ContentData["notes"][0]);
        }
      }
    }
  } catch (error) {
    console.warn("Failed to load notes:", error);
  }

  // Load gallery
  try {
    const galleryFile = resolve(contentPath, "gallery", "index.yaml");
    const content = await readFile(galleryFile, "utf-8");
    const galleryData = yaml.load(content) as { items?: ContentData["gallery"] };
    if (galleryData?.items) {
      data.gallery = galleryData.items;
    }
  } catch (error) {
    console.warn("Failed to load gallery:", error);
  }

  // Load videos
  try {
    const videosFile = resolve(contentPath, "videos", "index.yaml");
    const content = await readFile(videosFile, "utf-8");
    const videosData = yaml.load(content) as { items?: ContentData["videos"] };
    if (videosData?.items) {
      data.videos = videosData.items;
    }
  } catch (error) {
    console.warn("Failed to load videos:", error);
  }

  // Ensure output directory exists
  const outputDir = resolve(process.cwd(), "client", "src", "data");
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
  console.log(`  - Notes: ${data.notes.length}`);
  console.log(`  - Gallery: ${data.gallery.length}`);
  console.log(`  - Videos: ${data.videos.length}`);
}

generateContent().catch(console.error);
