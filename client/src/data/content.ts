/**
 * 此檔案由 scripts/generate-content.ts 自動產生
 * 請勿手動編輯 content.json，請在 content/ 資料夾中編輯 YAML 檔案
 */

export interface NoteItem {
  slug: string;
  title: string;
  category?: string;
  content: string;
}

export interface DiaryItem {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  content: string;
}

export interface GalleryItem {
  path: string;
  title?: string;
  description?: string;
}

export interface VideoItem {
  url: string;
  title?: string;
  thumbnailUrl?: string;
  description?: string;
}

export interface ContentData {
  diaries: DiaryItem[];
  notes: NoteItem[];
  gallery: GalleryItem[];
  videos: VideoItem[];
}

// 由 generate-content 產生的 content.json，執行 dev/build 前需先執行 content:generate
import contentData from "./content.json";

export const content = contentData as ContentData;
