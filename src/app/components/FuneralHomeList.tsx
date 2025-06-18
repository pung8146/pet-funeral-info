import { FuneralHome } from '../funeralData';
import Link from 'next/link';

type Props = {
  homes: FuneralHome[];
};

export default function FuneralHomeList({ homes }: Props) {
  if (homes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p className="text-gray-500 text-lg">
          조건에 맞는 장례식장이 없습니다.
        </p>
        <p className="text-gray-400 text-sm mt-2">필터 조건을 변경해보세요.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {homes.map((home) => (
        <div
          key={home.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:border-gray-300"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <Link href={`/funeral/${home.id}`} className="hover:underline">
                <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {home.name}
                </h2>
              </Link>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {home.price.toLocaleString()}원
              </div>
              <div className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                {home.region}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <span
                className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  home.isCertified ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></span>
              <span className="text-sm text-gray-700">
                합법 인증: {home.isCertified ? 'O' : 'X'}
              </span>
            </div>
            <div className="flex items-center">
              <span
                className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  home.hasPetTaxi ? 'bg-green-500' : 'bg-gray-400'
                }`}
              ></span>
              <span className="text-sm text-gray-700">
                반려동물 택시: {home.hasPetTaxi ? '지원' : '미지원'}
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-1 mb-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {home.address}
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {home.phone}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <Link
              href={`/funeral/${home.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
            >
              상세 정보 보기
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
