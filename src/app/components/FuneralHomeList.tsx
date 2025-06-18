import { FuneralHome } from '../funeralData';

type Props = {
  homes: FuneralHome[];
};

export default function FuneralHomeList({ homes }: Props) {
  return (
    <div className="grid gap-4">
      {homes.map((home) => (
        <div key={home.id} className="border rounded-lg p-4 shadow">
          <h2 className="text-lg font-bold">{home.name}</h2>
          <div>지역: {home.region}</div>
          <div>가격: {home.price.toLocaleString()}원</div>
          <div>합법 인증: {home.isCertified ? 'O' : 'X'}</div>
          <div>반려동물 택시: {home.hasPetTaxi ? '지원' : '미지원'}</div>
          <div>주소: {home.address}</div>
          <div>전화번호: {home.phone}</div>
        </div>
      ))}
    </div>
  );
}
