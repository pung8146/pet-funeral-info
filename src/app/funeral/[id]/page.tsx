import { notFound } from 'next/navigation';
import { funeralHomes } from '../../funeralData';
import Link from 'next/link';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function FuneralDetailPage({ params }: Props) {
  const { id } = await params;
  const funeralHome = funeralHomes.find((home) => home.id === parseInt(id));

  if (!funeralHome) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <main className="max-w-4xl mx-auto py-10 px-4">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            목록으로 돌아가기
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* 헤더 섹션 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
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
          <div className="p-8 border-b border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  인증 및 서비스
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span
                      className={`inline-block w-4 h-4 rounded-full mr-3 ${
                        funeralHome.isCertified ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    ></span>
                    <span className="text-gray-700">
                      합법 인증: {funeralHome.isCertified ? '인증됨' : '미인증'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`inline-block w-4 h-4 rounded-full mr-3 ${
                        funeralHome.hasPetTaxi ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                    ></span>
                    <span className="text-gray-700">
                      반려동물 택시:{' '}
                      {funeralHome.hasPetTaxi ? '지원' : '미지원'}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  운영 시간
                </h2>
                <p className="text-gray-700">
                  {funeralHome.operatingHours || '정보 없음'}
                </p>
              </div>
            </div>
          </div>

          {/* 상세 설명 */}
          {funeralHome.description && (
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">소개</h2>
              <p className="text-gray-700 leading-relaxed">
                {funeralHome.description}
              </p>
            </div>
          )}

          {/* 제공 서비스 */}
          {funeralHome.services && funeralHome.services.length > 0 && (
            <div className="p-8 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                제공 서비스
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {funeralHome.services.map((service: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 연락처 정보 */}
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              연락처 정보
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">주소</h3>
                <p className="text-gray-600 flex items-center">
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
                  {funeralHome.address}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">전화번호</h3>
                <p className="text-gray-600 flex items-center">
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
                  {funeralHome.phone}
                </p>
              </div>
            </div>
            {funeralHome.website && (
              <div className="mt-6">
                <h3 className="font-medium text-gray-700 mb-2">웹사이트</h3>
                <a
                  href={funeralHome.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  {funeralHome.website}
                </a>
              </div>
            )}
          </div>

          {/* 이미지 갤러리 */}
          {funeralHome.images && funeralHome.images.length > 0 && (
            <div className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                갤러리
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {funeralHome.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-xl h-48 flex items-center justify-center border border-gray-200"
                  >
                    <span className="text-gray-500">이미지 {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
