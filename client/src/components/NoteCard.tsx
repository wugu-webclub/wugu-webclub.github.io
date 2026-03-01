import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FileText } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";

export interface Note {
  id: string;
  title: string;
  content: string;
  category?: string;
}

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Card className="rounded-2xl shadow-lg hover:-translate-y-1 transition-transform cursor-pointer" data-testid={`card-note-${note.id}`}>
      <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground" data-testid={`text-note-title-${note.id}`}>
          {note.title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <div className="text-sm text-card-foreground line-clamp-3" data-testid={`text-note-content-${note.id}`}>
          <MarkdownContent content={note.content} />
        </div>
      </CardContent>
      
      {note.category && (
        <CardFooter>
          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
            {note.category}
          </span>
        </CardFooter>
      )}
    </Card>
  );
}
