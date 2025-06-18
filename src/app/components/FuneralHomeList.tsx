import { FuneralHome } from '../funeralData';
import Link from 'next/link';

type Props = {
  homes: FuneralHome[];
};

export default function FuneralHomeList({ homes }: Props) {
  if (homes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        조건에 맞는 장례식장이 없습니다.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {homes.map((home) => (
        <div
          key={home.id}
          className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <Link href={`/funeral/${home.id}`} className="hover:underline">
                <h2 className="text-xl font-bold text-gray-800">{home.name}</h2>
              </Link>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {home.price.toLocaleString()}원
              </div>
              <div className="text-sm text-gray-500">{home.region}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <span
                className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  home.isCertified ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></span>
              <span className="text-sm">
                합법 인증: {home.isCertified ? 'O' : 'X'}
              </span>
            </div>
            <div className="flex items-center">
              <span
                className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  home.hasPetTaxi ? 'bg-green-500' : 'bg-gray-400'
                }`}
              ></span>
              <span className="text-sm">
                반려동물 택시: {home.hasPetTaxi ? '지원' : '미지원'}
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-1 mb-4">
            <div>📍 {home.address}</div>
            <div>📞 {home.phone}</div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              href={`/funeral/${home.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              상세 정보 보기 →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
