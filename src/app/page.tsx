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
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🐾 반려동물 장례식장 정보
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Filters
            showCertifiedOnly={showCertifiedOnly}
            showPetTaxiOnly={showPetTaxiOnly}
            onCertifiedChange={setShowCertifiedOnly}
            onPetTaxiChange={setShowPetTaxiOnly}
          />
          <SortOptions sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        <div className="md:col-span-2">
          <div className="mb-4">
            <p className="text-gray-600">
              총 {filteredAndSortedHomes.length}개의 장례식장이 있습니다.
            </p>
          </div>
          <FuneralHomeList homes={filteredAndSortedHomes} />
        </div>
      </div>
    </main>
  );
}
