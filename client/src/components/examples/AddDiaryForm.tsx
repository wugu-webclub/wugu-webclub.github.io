import AddDiaryForm from '../AddDiaryForm';

export default function AddDiaryFormExample() {
  return (
    <div className="p-6 max-w-2xl">
      <AddDiaryForm 
        onAdd={(title, content, tags) => console.log('Add diary:', { title, content, tags })}
        onCancel={() => console.log('Cancel')}
      />
    </div>
  );
}
