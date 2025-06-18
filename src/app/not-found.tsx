import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-4 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 mb-8">
          요청하신 장례식장 정보가 존재하지 않거나 삭제되었을 수 있습니다.
        </p>
      </div>

      <div className="space-y-4">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          메인 페이지로 돌아가기
        </Link>
      </div>
    </main>
  );
}
