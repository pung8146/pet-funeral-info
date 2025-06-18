import ClientHomePage from './components/ClientHomePage';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🐾 반려동물 장례식장 정보
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              반려동물의 마지막 순간을 함께할 수 있는 장례식장을 쉽게 찾아보세요
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ClientHomePage />
      </main>
    </div>
  );
}
