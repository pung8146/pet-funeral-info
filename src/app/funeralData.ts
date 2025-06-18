export type FuneralHome = {
  id: number;
  name: string;
  region: string;
  price: number;
  isCertified: boolean;
  hasPetTaxi: boolean;
  address: string;
  phone: string;
  description?: string;
  services?: string[];
  operatingHours?: string;
  website?: string;
  images?: string[];
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
    description:
      '반려동물의 마지막 순간을 따뜻하게 보내드리는 전문 장례식장입니다. 24시간 상담 가능하며, 개별 맞춤 서비스를 제공합니다.',
    services: ['화장 서비스', '개별 장례식', '추모품 제작', '24시간 상담'],
    operatingHours: '24시간 운영',
    website: 'https://happypet-funeral.com',
    images: ['/images/happypet-1.jpg', '/images/happypet-2.jpg'],
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
    description:
      '경기도 지역에서 오랜 전통을 가진 반려동물 장례식장입니다. 합리적인 가격으로 양질의 서비스를 제공합니다.',
    services: ['화장 서비스', '공동 장례식', '기본 추모품'],
    operatingHours: '평일 09:00-18:00, 주말 10:00-17:00',
    website: 'https://lovepet-memorial.com',
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
    description:
      '부산 최고급 반려동물 장례식장으로, 프리미엄 서비스와 최신 시설을 제공합니다.',
    services: ['프리미엄 화장', '개별 장례식', '고급 추모품', '전문 사진 촬영'],
    operatingHours: '평일 08:00-20:00, 주말 09:00-18:00',
    website: 'https://petparadise-busan.com',
    images: ['/images/petparadise-1.jpg'],
  },
  {
    id: 4,
    name: '동물천국',
    region: '인천',
    price: 200000,
    isCertified: true,
    hasPetTaxi: true,
    address: '인천광역시 연수구 333-44',
    phone: '032-555-6666',
    description:
      '인천 지역에서 가장 합리적인 가격으로 반려동물 장례 서비스를 제공합니다. 반려동물 택시 서비스도 함께 이용 가능합니다.',
    services: ['화장 서비스', '반려동물 택시', '기본 추모품', '상담 서비스'],
    operatingHours: '24시간 운영',
    website: 'https://animalheaven.co.kr',
  },
  {
    id: 5,
    name: '펫메모리',
    region: '대구',
    price: 280000,
    isCertified: false,
    hasPetTaxi: true,
    address: '대구광역시 수성구 555-66',
    phone: '053-777-8888',
    description:
      '대구 지역의 반려동물 장례 전문 업체입니다. 반려동물 택시 서비스로 편리한 이용이 가능합니다.',
    services: ['화장 서비스', '반려동물 택시', '추모품 제작', '상담 서비스'],
    operatingHours: '평일 09:00-19:00, 주말 10:00-18:00',
    website: 'https://petmemory-daegu.com',
  },
  {
    id: 6,
    name: '반려동물의 집',
    region: '서울',
    price: 400000,
    isCertified: true,
    hasPetTaxi: true,
    address: '서울특별시 서초구 777-88',
    phone: '02-999-0000',
    description:
      '서울 최고급 반려동물 장례식장으로, 모든 서비스가 포함된 올인원 패키지를 제공합니다.',
    services: [
      '프리미엄 화장',
      '개별 장례식',
      '고급 추모품',
      '반려동물 택시',
      '전문 사진 촬영',
      '추모 영상 제작',
    ],
    operatingHours: '24시간 운영',
    website: 'https://pethome-seoul.com',
    images: [
      '/images/pethome-1.jpg',
      '/images/pethome-2.jpg',
      '/images/pethome-3.jpg',
    ],
  },
];
