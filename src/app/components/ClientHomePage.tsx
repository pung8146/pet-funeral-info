"use client";

import { useState, useMemo } from "react";
import FuneralHomeList from "./FuneralHomeList";
import Filters from "./Filters";
import SortOptions from "./SortOptions";
import { funeralHomes } from "../funeralData";

type SortOption = "name" | "price" | "region";

export default function ClientHomePage() {
  const [showCertifiedOnly, setShowCertifiedOnly] = useState(false);
  const [showPetTaxiOnly, setShowPetTaxiOnly] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("전체");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const filteredAndSortedHomes = useMemo(() => {
    let filtered = funeralHomes;

    // 지역 필터
    if (selectedRegion !== "전체") {
      filtered = filtered.filter((home) => home.region === selectedRegion);
    }

    if (showCertifiedOnly) {
      filtered = filtered.filter((home) => home.isCertified);
    }

    if (showPetTaxiOnly) {
      filtered = filtered.filter((home) => home.hasPetTaxi);
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return a.price - b.price;
        case "region":
          return a.region.localeCompare(b.region);
        default:
          return 0;
      }
    });
  }, [showCertifiedOnly, showPetTaxiOnly, selectedRegion, sortBy]);

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          <Filters
            showCertifiedOnly={showCertifiedOnly}
            showPetTaxiOnly={showPetTaxiOnly}
            selectedRegion={selectedRegion}
            onCertifiedChange={setShowCertifiedOnly}
            onPetTaxiChange={setShowPetTaxiOnly}
            onRegionChange={setSelectedRegion}
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
  );
}
