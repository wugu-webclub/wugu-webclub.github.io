import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Trash2 } from "lucide-react";

export interface Note {
  id: string;
  title: string;
  content: string;
  category?: string;
}

interface NoteCardProps {
  note: Note;
  onDelete?: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  return (
    <Card className="rounded-2xl shadow-lg hover:-translate-y-1 transition-transform" data-testid={`card-note-${note.id}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground" data-testid={`text-note-title-${note.id}`}>
            {note.title}
          </h3>
        </div>
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover-elevate active-elevate-2 flex-shrink-0"
            onClick={() => onDelete(note.id)}
            data-testid={`button-delete-note-${note.id}`}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-card-foreground whitespace-pre-wrap" data-testid={`text-note-content-${note.id}`}>
          {note.content}
        </p>
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
