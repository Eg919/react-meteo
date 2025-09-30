import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        placeholder="Entrez une ville..."
        onChange={(e) => setCity(e.target.value)}
        className="border px-3 py-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Rechercher
      </button>
    </form>
  );
}
