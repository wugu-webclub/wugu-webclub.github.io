import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import MarkdownContent from "@/components/MarkdownContent";

export interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: Date;
  tags?: string[];
}

interface DiaryCardProps {
  entry: DiaryEntry;
}

export default function DiaryCard({ entry }: DiaryCardProps) {
  return (
    <Card className="rounded-2xl shadow-lg hover:-translate-y-1 transition-transform cursor-pointer" data-testid={`card-diary-${entry.id}`}>
      <CardHeader className="space-y-0 pb-4">
        <h3 className="text-xl font-heading font-semibold text-foreground" data-testid={`text-diary-title-${entry.id}`}>
          {entry.title}
        </h3>
      </CardHeader>
      
      <CardContent className="border-t-2 border-border pt-4">
        <div className="text-base text-card-foreground line-clamp-4" data-testid={`text-diary-content-${entry.id}`}>
          <MarkdownContent content={entry.content} />
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-wrap items-center gap-2 pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span data-testid={`text-diary-date-${entry.id}`}>{format(entry.date, 'yyyy年MM月dd日')}</span>
        </div>
        
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap ml-auto">
            {entry.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                data-testid={`badge-tag-${tag}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
