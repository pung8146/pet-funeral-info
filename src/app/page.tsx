import FuneralHomeList from './components/FuneralHomeList';
import { funeralHomes } from './funeralData';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">반려동물 장례식장 리스트</h1>
      <FuneralHomeList homes={funeralHomes} />
    </main>
  );
}
