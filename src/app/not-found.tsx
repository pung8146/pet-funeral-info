import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
      <main className="max-w-md mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="mb-8">
            <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              페이지를 찾을 수 없습니다
            </h2>
            <p className="text-gray-600 mb-8">
              요청하신 장례식장 정보가 존재하지 않거나 삭제되었을 수 있습니다.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            메인 페이지로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
