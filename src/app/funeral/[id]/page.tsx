import { notFound } from 'next/navigation';
import { funeralHomes } from '../../funeralData';

type Props = {
  params: {
    id: string;
  };
};

export default function FuneralDetailPage({ params }: Props) {
  const funeralHome = funeralHomes.find(
    (home) => home.id === parseInt(params.id)
  );

  if (!funeralHome) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-6">
        <a href="/" className="text-blue-600 hover:underline">
          ← 목록으로 돌아가기
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{funeralHome.name}</h1>
              <p className="text-xl opacity-90">{funeralHome.region}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">
                {funeralHome.price.toLocaleString()}원
              </div>
              <div className="text-sm opacity-90">기본 가격</div>
            </div>
          </div>
        </div>

        {/* 인증 및 서비스 정보 */}
        <div className="p-8 border-b">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">인증 및 서비스</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span
                    className={`inline-block w-4 h-4 rounded-full mr-3 ${
                      funeralHome.isCertified ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                  <span>
                    합법 인증: {funeralHome.isCertified ? '인증됨' : '미인증'}
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-block w-4 h-4 rounded-full mr-3 ${
                      funeralHome.hasPetTaxi ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  ></span>
                  <span>
                    반려동물 택시: {funeralHome.hasPetTaxi ? '지원' : '미지원'}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">운영 시간</h2>
              <p className="text-gray-700">
                {funeralHome.operatingHours || '정보 없음'}
              </p>
            </div>
          </div>
        </div>

        {/* 상세 설명 */}
        {funeralHome.description && (
          <div className="p-8 border-b">
            <h2 className="text-xl font-semibold mb-4">소개</h2>
            <p className="text-gray-700 leading-relaxed">
              {funeralHome.description}
            </p>
          </div>
        )}

        {/* 제공 서비스 */}
        {funeralHome.services && funeralHome.services.length > 0 && (
          <div className="p-8 border-b">
            <h2 className="text-xl font-semibold mb-4">제공 서비스</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {funeralHome.services.map((service: string, index: number) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 연락처 정보 */}
        <div className="p-8 border-b">
          <h2 className="text-xl font-semibold mb-4">연락처 정보</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">주소</h3>
              <p className="text-gray-600">📍 {funeralHome.address}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">전화번호</h3>
              <p className="text-gray-600">📞 {funeralHome.phone}</p>
            </div>
          </div>
          {funeralHome.website && (
            <div className="mt-4">
              <h3 className="font-medium text-gray-700 mb-2">웹사이트</h3>
              <a
                href={funeralHome.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                🌐 {funeralHome.website}
              </a>
            </div>
          )}
        </div>

        {/* 이미지 갤러리 */}
        {funeralHome.images && funeralHome.images.length > 0 && (
          <div className="p-8">
            <h2 className="text-xl font-semibold mb-4">갤러리</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {funeralHome.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg h-48 flex items-center justify-center"
                >
                  <span className="text-gray-500">이미지 {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
