import { Button } from "@/components/ui/button";
import { LucideIcon, Plus } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onAdd?: () => void;
  addButtonText?: string;
}

export default function SectionHeader({ 
  icon: Icon, 
  title, 
  description, 
  onAdd,
  addButtonText = "新增"
}: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      
      {onAdd && (
        <Button
          onClick={onAdd}
          size="lg"
          className="rounded-full shadow-md hover-elevate active-elevate-2"
          data-testid="button-add-content"
        >
          <Plus className="w-5 h-5 mr-2" />
          {addButtonText}
        </Button>
      )}
    </div>
  );
}
