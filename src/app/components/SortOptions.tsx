type SortOption = 'name' | 'price' | 'region';

type SortOptionsProps = {
  sortBy: SortOption;
  onSortChange: (sortBy: SortOption) => void;
};

export default function SortOptions({
  sortBy,
  onSortChange,
}: SortOptionsProps) {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">정렬</h2>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="w-full p-2 border rounded"
      >
        <option value="name">이름순</option>
        <option value="price">가격순</option>
        <option value="region">지역순</option>
      </select>
    </div>
  );
}
