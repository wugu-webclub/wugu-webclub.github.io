import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import DiaryCard, { DiaryEntry } from "@/components/DiaryCard";
import GalleryGrid, { ArtworkItem } from "@/components/GalleryGrid";
import NoteCard, { Note } from "@/components/NoteCard";
import VideoCard, { VideoItem } from "@/components/VideoCard";
import AddDiaryForm from "@/components/AddDiaryForm";
import { Button } from "@/components/ui/button";
import { BookOpen, Image, FileText, Video, Plus } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showDiaryForm, setShowDiaryForm] = useState(false);
  const [diaries, setDiaries] = useState<DiaryEntry[]>([
    {
      id: '1',
      title: '今天看了超棒的動漫',
      content: '今天終於看完了期待已久的動漫系列，故事情節真的太精彩了！角色發展也很棒，每個人都有自己的成長軌跡。特別是主角的成長過程，從一開始的青澀到後來的成熟，這個轉變讓我很感動。',
      date: new Date('2024-01-15'),
      tags: ['動漫', '心得']
    },
    {
      id: '2',
      title: '開始學習新的繪畫技巧',
      content: '今天在網路上找到了一個很棒的繪畫教學，學到了很多關於人物比例和陰影的技巧。打算這週末就來練習看看！',
      date: new Date('2024-01-10'),
      tags: ['繪畫', '學習']
    }
  ]);

  const [artworks] = useState<ArtworkItem[]>([
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop',
      title: '角色設計稿',
      description: '我最喜歡的角色設計練習'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=400&fit=crop',
      title: '場景插畫',
      description: '夢幻的動漫場景繪製'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
      title: '色彩練習',
      description: '嘗試不同的配色方案'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop',
      title: '動態姿勢',
      description: '動作場景的繪製練習'
    }
  ]);

  const [notes] = useState<Note[]>([
    {
      id: '1',
      title: 'React Hooks 學習筆記',
      content: 'useState 和 useEffect 是最常用的 Hooks。useState 用於狀態管理，useEffect 用於副作用處理。記得 useEffect 的依賴陣列要正確設置！',
      category: '程式設計'
    },
    {
      id: '2',
      title: '日文學習重點',
      content: '今天學習了「は」和「が」的差別。「は」用於主題標記，「が」用於主語標記。在疑問句中通常使用「が」。',
      category: '語言學習'
    },
    {
      id: '3',
      title: '畫圖技巧整理',
      content: '人物比例：頭部約為全身的 1/7。眼睛位置在頭部中央偏上。注意光影的方向性，保持一致。',
      category: '繪畫'
    },
    {
      id: '4',
      title: '待看動漫清單',
      content: '1. 進擊的巨人最終季\n2. 鬼滅之刃新篇章\n3. 咒術迴戰第二季\n4. SPY×FAMILY',
      category: '動漫'
    }
  ]);

  const [videos] = useState<VideoItem[]>([
    {
      id: '1',
      title: '我最喜歡的動漫 OP',
      thumbnailUrl: 'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: '超燃的開場曲合集！'
    },
    {
      id: '2',
      title: '繪畫教學：眼睛畫法',
      thumbnailUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: '動漫風格眼睛的繪製技巧'
    },
    {
      id: '3',
      title: '我的作畫過程分享',
      thumbnailUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: '從草稿到完成的全過程'
    }
  ]);

  const handleAddDiary = (title: string, content: string, tags: string[]) => {
    const newDiary: DiaryEntry = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date(),
      tags
    };
    setDiaries([newDiary, ...diaries]);
    setShowDiaryForm(false);
  };

  const handleDeleteDiary = (id: string) => {
    setDiaries(diaries.filter(d => d.id !== id));
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <Hero 
        name="小明" 
        introduction="我是一個開心的動漫宅" 
        email="example@example.com"
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        <section id="diary">
          <SectionHeader 
            icon={BookOpen}
            title="我的日記"
            description="記錄每一天的精彩時刻"
            onAdd={() => setShowDiaryForm(true)}
            addButtonText="寫日記"
          />
          
          {showDiaryForm && (
            <div className="mb-8">
              <AddDiaryForm 
                onAdd={handleAddDiary}
                onCancel={() => setShowDiaryForm(false)}
              />
            </div>
          )}
          
          <div className="max-w-3xl space-y-6">
            {diaries.map(diary => (
              <DiaryCard 
                key={diary.id} 
                entry={diary}
                onDelete={handleDeleteDiary}
              />
            ))}
          </div>
        </section>

        <section id="gallery">
          <SectionHeader 
            icon={Image}
            title="我的圖畫"
            description="展示我的繪畫作品集"
          />
          
          <GalleryGrid artworks={artworks} />
        </section>

        <section id="notes">
          <SectionHeader 
            icon={FileText}
            title="我的筆記"
            description="整理學習心得與重點"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </section>

        <section id="videos">
          <SectionHeader 
            icon={Video}
            title="我的影片"
            description="分享喜歡的影片內容"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-card-border mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 小明的動漫部落格 | 用 ❤️ 和 React 打造
          </p>
        </div>
      </footer>
    </div>
  );
}
