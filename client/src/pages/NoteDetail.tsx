import { useRoute } from "wouter";
import { Link } from "wouter";
import { useNote } from "@/hooks/useContentData";
import MarkdownContent from "@/components/MarkdownContent";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

export default function NoteDetail() {
  const [, params] = useRoute("/notes/:slug");
  const slug = params?.slug ?? null;
  const { note, loading, error } = useNote(slug);

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
        <Navigation activeSection="notes" onSectionChange={scrollToSection} />
        <main className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-muted-foreground">載入中...</p>
        </main>
      </div>
    );
  }

  if (error || !note) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection="notes" onSectionChange={scrollToSection} />
        <main className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-destructive">{error || "找不到此筆記"}</p>
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="notes" onSectionChange={scrollToSection} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6 rounded-full -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回筆記列表
          </Button>
        </Link>

        <article className="space-y-6">
          <header className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {note.title}
              </h1>
              {note.category && (
                <span className="inline-block mt-2 px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
                  {note.category}
                </span>
              )}
            </div>
          </header>

          <div className="border-t-2 border-border pt-6">
            <MarkdownContent content={note.content} className="text-card-foreground" />
          </div>
        </article>
      </main>
    </div>
  );
}
