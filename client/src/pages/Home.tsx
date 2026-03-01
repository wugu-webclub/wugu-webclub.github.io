import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import DiaryCard from "@/components/DiaryCard";
import GalleryGrid from "@/components/GalleryGrid";
import NoteCard from "@/components/NoteCard";
import VideoCard from "@/components/VideoCard";
import { BookOpen, Image, FileText, Video } from "lucide-react";
import { useNotes, useDiaries, useGallery, useVideos } from "@/hooks/useContentData";
import { parseISO } from "date-fns";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const { notes, loading: notesLoading } = useNotes();
  const { diaries, loading: diariesLoading } = useDiaries();
  const { artworks, loading: galleryLoading } = useGallery();
  const { videos, loading: videosLoading } = useVideos();

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <Hero 
        name="蘇子權老師" 
        introduction="我是一個開心的動漫宅" 
        email="example@example.com"
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        <section id="diary">
          <SectionHeader
            icon={BookOpen}
            title="我的日記"
            description="記錄每一天的精彩時刻"
          />

          <div className="max-w-3xl space-y-6">
            {diariesLoading ? (
              <p className="text-muted-foreground">載入中...</p>
            ) : (
              diaries.map((diary) => (
                <Link key={diary.slug} href={`/diary/${diary.slug}`} className="block">
                  <DiaryCard
                      entry={{
                        id: diary.slug,
                        title: diary.title,
                        content: diary.content,
                        date: diary.date ? parseISO(diary.date) : new Date(),
                        tags: diary.tags,
                      }}
                    />
                </Link>
              ))
            )}
          </div>
        </section>

        <section id="gallery">
          <SectionHeader
            icon={Image}
            title="我的圖畫"
            description="展示我的繪畫作品集"
          />

          {galleryLoading ? (
            <p className="text-muted-foreground">載入中...</p>
          ) : (
            <GalleryGrid artworks={artworks} />
          )}
        </section>

        <section id="notes">
          <SectionHeader
            icon={FileText}
            title="我的筆記"
            description="整理學習心得與重點"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notesLoading ? (
              <p className="text-muted-foreground">載入中...</p>
            ) : (
              notes.map((note) => (
                <Link key={note.slug} href={`/notes/${note.slug}`} className="block">
                  <NoteCard
                      note={{
                        id: note.slug,
                        title: note.title,
                        content: note.content,
                        category: note.category,
                      }}
                    />
                </Link>
              ))
            )}
          </div>
        </section>

        <section id="videos">
          <SectionHeader
            icon={Video}
            title="我的影片"
            description="分享喜歡的影片內容"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosLoading ? (
              <p className="text-muted-foreground">載入中...</p>
            ) : (
              videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))
            )}
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-card-border mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 蘇子權老師 的動漫部落格 | 用 ❤️ 和 React 打造
          </p>
        </div>
      </footer>
    </div>
  );
}
