import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const { data } = await axios.get(`/api/scrape?term=${search}`);
    setResult(data);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">MarketSpy</h1>
      <input
        className="border px-4 py-2 w-full"
        placeholder="Digite o nome do produto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2"
        onClick={handleSearch}
      >
        Buscar
      </button>
      <pre className="mt-4 bg-gray-100 p-4">
        {result ? JSON.stringify(result, null, 2) : 'Nenhum resultado ainda'}
      </pre>
    </div>
  );
}