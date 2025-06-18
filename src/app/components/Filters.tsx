type FilterProps = {
  showCertifiedOnly: boolean;
  showPetTaxiOnly: boolean;
  selectedRegion: string;
  onCertifiedChange: (checked: boolean) => void;
  onPetTaxiChange: (checked: boolean) => void;
  onRegionChange: (region: string) => void;
};

const KOREA_REGIONS = [
  "전체",
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "세종시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주도",
];

export default function Filters({
  showCertifiedOnly,
  showPetTaxiOnly,
  selectedRegion,
  onCertifiedChange,
  onPetTaxiChange,
  onRegionChange,
}: FilterProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">필터</h2>
      <div className="space-y-6">
        {/* 지역 선택 */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">지역</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {KOREA_REGIONS.map((region) => (
              <label
                key={region}
                className="flex items-center cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="region"
                    value={region}
                    checked={selectedRegion === region}
                    onChange={(e) => onRegionChange(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 border-2 rounded-full transition-colors ${
                      selectedRegion === region
                        ? "bg-blue-600 border-blue-600"
                        : "border-gray-300 group-hover:border-blue-400"
                    }`}
                  >
                    {selectedRegion === region && (
                      <div className="w-2 h-2 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                    )}
                  </div>
                </div>
                <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                  {region}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* 기존 필터들 */}
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
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300 group-hover:border-blue-400"
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
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300 group-hover:border-blue-400"
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
    </div>
  );
}
