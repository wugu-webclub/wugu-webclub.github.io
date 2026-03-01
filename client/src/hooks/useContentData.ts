import { useState, useEffect } from "react";
import { content, type NoteItem, type DiaryItem, type GalleryItem, type VideoItem } from "@/data/content";

export interface NoteWithSlug extends NoteItem {
  slug: string;
}

export interface DiaryWithSlug extends DiaryItem {
  slug: string;
}

export interface ArtworkItem {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
}

export interface VideoItemDisplay {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description?: string;
}

export function useNotes() {
  const [notes, setNotes] = useState<NoteWithSlug[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNotes(content.notes as NoteWithSlug[]);
    setLoading(false);
  }, []);

  return { notes, loading, error: null };
}

export function useNote(slug: string | null) {
  const [note, setNote] = useState<NoteItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setNote(null);
      setLoading(false);
      return;
    }
    const found = content.notes.find((n) => n.slug === slug);
    setNote(found ?? null);
    setError(found ? null : "找不到此筆記");
    setLoading(false);
  }, [slug]);

  return { note, loading, error };
}

export function useDiaries() {
  const [diaries, setDiaries] = useState<DiaryWithSlug[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDiaries(content.diaries as DiaryWithSlug[]);
    setLoading(false);
  }, []);

  return { diaries, loading, error: null };
}

export function useDiary(slug: string | null) {
  const [diary, setDiary] = useState<DiaryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setDiary(null);
      setLoading(false);
      return;
    }
    const found = content.diaries.find((d) => d.slug === slug);
    setDiary(found ?? null);
    setError(found ? null : "找不到此日記");
    setLoading(false);
  }, [slug]);

  return { diary, loading, error };
}

export function useGallery() {
  const [artworks, setArtworks] = useState<ArtworkItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const items = content.gallery.map((item, i) => ({
      id: String(i + 1),
      imageUrl: item.path.startsWith("http") ? item.path : `/content/gallery/${item.path.replace(/^\.\//, "")}`,
      title: item.title || `作品 ${i + 1}`,
      description: item.description,
    }));
    setArtworks(items);
    setLoading(false);
  }, []);

  return { artworks, loading, error: null };
}

export function useVideos() {
  const [videos, setVideos] = useState<VideoItemDisplay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const items = content.videos.map((item, i) => ({
      id: String(i + 1),
      title: item.title || `影片 ${i + 1}`,
      thumbnailUrl: item.thumbnailUrl || "",
      videoUrl: item.url.startsWith("http") ? item.url : `/content/videos/${item.url.replace(/^\.\//, "")}`,
      description: item.description,
    }));
    setVideos(items);
    setLoading(false);
  }, []);

  return { videos, loading, error: null };
}
