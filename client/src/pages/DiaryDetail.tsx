import { useRoute } from "wouter";
import { Link } from "wouter";
import { useDiary } from "@/hooks/useContentData";
import MarkdownContent from "@/components/MarkdownContent";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import { zhTW } from "date-fns/locale";

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:slug");
  const slug = params?.slug ?? null;
  const { diary, loading, error } = useDiary(slug);

  const scrollToSection = (section: string) => {
    if (section === "home") {
      window.location.href = "/";
    } else {
      window.location.href = `/#${section}`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection="diary" onSectionChange={scrollToSection} />
        <main className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-muted-foreground">載入中...</p>
        </main>
      </div>
    );
  }

  if (error || !diary) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection="diary" onSectionChange={scrollToSection} />
        <main className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-destructive">{error || "找不到此日記"}</p>
          <Link href="/">
            <Button variant="outline" className="mt-4 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首頁
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  const dateStr = diary.date
    ? format(parseISO(diary.date), "yyyy年MM月dd日", { locale: zhTW })
    : "";

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="diary" onSectionChange={scrollToSection} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6 rounded-full -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回日記列表
          </Button>
        </Link>

        <article className="space-y-6">
          <header>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              {diary.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{dateStr}</span>
              </div>
              {diary.tags && diary.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {diary.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="border-t-2 border-border pt-6">
            <MarkdownContent content={diary.content} className="text-card-foreground" />
          </div>
        </article>
      </main>
    </div>
  );
}
