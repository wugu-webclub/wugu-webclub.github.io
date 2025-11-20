import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description?: string;
}

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform" data-testid={`card-video-${video.id}`}>
      <CardContent className="p-0">
        <div className="relative aspect-video bg-muted">
          {!isPlaying ? (
            <>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
                onClick={() => {
                  setIsPlaying(true);
                  console.log('Play video:', video.videoUrl);
                }}
                data-testid={`button-play-video-${video.id}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              src={video.videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            />
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex-col items-start gap-2 p-4">
        <h3 className="font-heading font-semibold text-base" data-testid={`text-video-title-${video.id}`}>
          {video.title}
        </h3>
        {video.description && (
          <p className="text-sm text-muted-foreground" data-testid={`text-video-description-${video.id}`}>
            {video.description}
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
