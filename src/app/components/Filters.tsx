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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">필터</h2>
      <div className="space-y-4">
        <label className="flex items-center cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={showCertifiedOnly}
              onChange={(e) => onCertifiedChange(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 border-2 rounded transition-colors ${
                showCertifiedOnly
                  ? 'bg-blue-600 border-blue-600'
                  : 'border-gray-300 group-hover:border-blue-400'
              }`}
            >
              {showCertifiedOnly && (
                <svg
                  className="w-3 h-3 text-white absolute top-0.5 left-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
          <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
            합법 인증된 장례식장만
          </span>
        </label>

        <label className="flex items-center cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={showPetTaxiOnly}
              onChange={(e) => onPetTaxiChange(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 border-2 rounded transition-colors ${
                showPetTaxiOnly
                  ? 'bg-blue-600 border-blue-600'
                  : 'border-gray-300 group-hover:border-blue-400'
              }`}
            >
              {showPetTaxiOnly && (
                <svg
                  className="w-3 h-3 text-white absolute top-0.5 left-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
          <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
            반려동물 택시 지원
          </span>
        </label>
      </div>
    </div>
  );
}
