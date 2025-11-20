import GalleryGrid from '../GalleryGrid';

export default function GalleryGridExample() {
  const mockArtworks = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop',
      title: '角色設計稿',
      description: '我最喜歡的角色設計'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=400&fit=crop',
      title: '場景插畫',
      description: '夢幻的動漫場景'
    },
  ];

  return (
    <div className="p-6">
      <GalleryGrid artworks={mockArtworks} />
    </div>
  );
}
