export type FuneralHome = {
  id: number;
  name: string;
  region: string;
  price: number;
  isCertified: boolean;
  hasPetTaxi: boolean;
  address: string;
  phone: string;
};

export const funeralHomes: FuneralHome[] = [
  {
    id: 1,
    name: '해피펫 장례식장',
    region: '서울',
    price: 300000,
    isCertified: true,
    hasPetTaxi: true,
    address: '서울특별시 강남구 123-45',
    phone: '02-123-4567',
  },
  {
    id: 2,
    name: '러브펫 메모리얼',
    region: '경기',
    price: 250000,
    isCertified: false,
    hasPetTaxi: false,
    address: '경기도 성남시 분당구 678-90',
    phone: '031-987-6543',
  },
  {
    id: 3,
    name: '펫파라다이스',
    region: '부산',
    price: 350000,
    isCertified: true,
    hasPetTaxi: false,
    address: '부산광역시 해운대구 111-22',
    phone: '051-222-3333',
  },
];
