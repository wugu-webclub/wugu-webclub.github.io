import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface AddDiaryFormProps {
  onAdd: (title: string, content: string, tags: string[]) => void;
  onCancel: () => void;
}

export default function AddDiaryForm({ onAdd, onCancel }: AddDiaryFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAdd(title, content, tags);
      setTitle('');
      setContent('');
      setTags([]);
      setTagInput('');
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <h3 className="text-xl font-heading font-semibold">新增日記</h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="標題"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-lg"
              data-testid="input-diary-title"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="今天發生了什麼事呢？"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="rounded-lg resize-none"
              data-testid="input-diary-content"
            />
          </div>
          
          <div>
            <div className="flex gap-2">
              <Input
                placeholder="新增標籤"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="rounded-lg"
                data-testid="input-diary-tag"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={addTag}
                className="rounded-full hover-elevate active-elevate-2 flex-shrink-0"
                data-testid="button-add-tag"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full flex items-center gap-2"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:opacity-70"
                      data-testid={`button-remove-tag-${tag}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex gap-3 justify-end pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={onCancel}
              className="rounded-full hover-elevate active-elevate-2"
              data-testid="button-cancel-diary"
            >
              取消
            </Button>
            <Button
              type="submit"
              className="rounded-full hover-elevate active-elevate-2"
              data-testid="button-submit-diary"
            >
              發布
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
