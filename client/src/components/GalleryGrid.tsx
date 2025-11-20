import { Card } from "@/components/ui/card";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ArtworkItem {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
}

interface GalleryGridProps {
  artworks: ArtworkItem[];
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {artworks.map((artwork) => (
          <Card
            key={artwork.id}
            className="rounded-xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform cursor-pointer group"
            onClick={() => setSelectedArtwork(artwork)}
            data-testid={`card-artwork-${artwork.id}`}
          >
            <div className="relative aspect-square">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center px-4">
                  <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-semibold" data-testid={`text-artwork-title-${artwork.id}`}>
                    {artwork.title}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedArtwork && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
          data-testid="modal-artwork-viewer"
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 rounded-full"
              onClick={() => setSelectedArtwork(null)}
              data-testid="button-close-artwork"
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedArtwork.imageUrl}
              alt={selectedArtwork.title}
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {selectedArtwork.title}
              </h3>
              {selectedArtwork.description && (
                <p className="text-white/80">{selectedArtwork.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
