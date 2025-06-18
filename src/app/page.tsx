'use client';

import { useState, useMemo } from 'react';
import FuneralHomeList from './components/FuneralHomeList';
import Filters from './components/Filters';
import SortOptions from './components/SortOptions';
import { funeralHomes, FuneralHome } from './funeralData';

type SortOption = 'name' | 'price' | 'region';

export default function Home() {
  const [showCertifiedOnly, setShowCertifiedOnly] = useState(false);
  const [showPetTaxiOnly, setShowPetTaxiOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('name');

  const filteredAndSortedHomes = useMemo(() => {
    let filtered = funeralHomes;

    if (showCertifiedOnly) {
      filtered = filtered.filter((home) => home.isCertified);
    }

    if (showPetTaxiOnly) {
      filtered = filtered.filter((home) => home.hasPetTaxi);
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'region':
          return a.region.localeCompare(b.region);
        default:
          return 0;
      }
    });
  }, [showCertifiedOnly, showPetTaxiOnly, sortBy]);

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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Filters
                showCertifiedOnly={showCertifiedOnly}
                showPetTaxiOnly={showPetTaxiOnly}
                onCertifiedChange={setShowCertifiedOnly}
                onPetTaxiChange={setShowPetTaxiOnly}
              />
              <SortOptions sortBy={sortBy} onSortChange={setSortBy} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  장례식장 목록
                </h2>
                <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  총 {filteredAndSortedHomes.length}개
                </div>
              </div>
              <FuneralHomeList homes={filteredAndSortedHomes} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
