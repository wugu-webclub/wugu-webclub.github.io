import SectionHeader from '../SectionHeader';
import { BookOpen } from 'lucide-react';

export default function SectionHeaderExample() {
  return (
    <div className="p-6">
      <SectionHeader 
        icon={BookOpen}
        title="我的日記"
        description="記錄每一天的精彩時刻"
        onAdd={() => console.log('Add new entry')}
        addButtonText="寫日記"
      />
    </div>
  );
}
