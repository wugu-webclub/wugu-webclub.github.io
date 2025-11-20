import VideoCard from '../VideoCard';

export default function VideoCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <VideoCard 
        video={{
          id: '1',
          title: '我最喜歡的動漫 OP',
          thumbnailUrl: 'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=600&h=400&fit=crop',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          description: '超燃的開場曲！'
        }}
      />
    </div>
  );
}
