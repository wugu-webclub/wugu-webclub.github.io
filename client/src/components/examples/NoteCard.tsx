import NoteCard from '../NoteCard';

export default function NoteCardExample() {
  return (
    <div className="p-6">
      <NoteCard 
        note={{
          id: '1',
          title: 'React Hooks 學習筆記',
          content: 'useState 和 useEffect 是最常用的 Hooks。useState 用於狀態管理，useEffect 用於副作用處理。',
          category: '程式設計'
        }}
        onDelete={(id) => console.log('Delete note:', id)}
      />
    </div>
  );
}
