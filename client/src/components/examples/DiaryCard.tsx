import DiaryCard from '../DiaryCard';

export default function DiaryCardExample() {
  return (
    <div className="p-6">
      <DiaryCard 
        entry={{
          id: '1',
          title: '今天看了超棒的動漫',
          content: '今天終於看完了期待已久的動漫系列，故事情節真的太精彩了！角色發展也很棒，每個人都有自己的成長軌跡。',
          date: new Date(),
          tags: ['動漫', '心得']
        }}
        onDelete={(id) => console.log('Delete diary:', id)}
      />
    </div>
  );
}
