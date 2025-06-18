type FilterProps = {
  showCertifiedOnly: boolean;
  showPetTaxiOnly: boolean;
  onCertifiedChange: (checked: boolean) => void;
  onPetTaxiChange: (checked: boolean) => void;
};

export default function Filters({
  showCertifiedOnly,
  showPetTaxiOnly,
  onCertifiedChange,
  onPetTaxiChange,
}: FilterProps) {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">필터</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showCertifiedOnly}
            onChange={(e) => onCertifiedChange(e.target.checked)}
            className="mr-2"
          />
          합법 인증된 장례식장만 보기
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showPetTaxiOnly}
            onChange={(e) => onPetTaxiChange(e.target.checked)}
            className="mr-2"
          />
          반려동물 택시 지원 장례식장만 보기
        </label>
      </div>
    </div>
  );
}
