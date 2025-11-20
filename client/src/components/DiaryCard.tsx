import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Trash2 } from "lucide-react";
import { format } from "date-fns";

export interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: Date;
  tags?: string[];
}

interface DiaryCardProps {
  entry: DiaryEntry;
  onDelete?: (id: string) => void;
}

export default function DiaryCard({ entry, onDelete }: DiaryCardProps) {
  return (
    <Card className="rounded-2xl shadow-lg hover:-translate-y-1 transition-transform" data-testid={`card-diary-${entry.id}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <h3 className="text-xl font-heading font-semibold text-foreground" data-testid={`text-diary-title-${entry.id}`}>
          {entry.title}
        </h3>
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover-elevate active-elevate-2 flex-shrink-0"
            onClick={() => onDelete(entry.id)}
            data-testid={`button-delete-diary-${entry.id}`}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>
      
      <CardContent className="border-t-2 border-border pt-4">
        <p className="text-base text-card-foreground whitespace-pre-wrap" data-testid={`text-diary-content-${entry.id}`}>
          {entry.content}
        </p>
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
