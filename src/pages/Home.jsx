import { useState } from "react";
import { getWeatherByCity } from "../api/meteoService";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold">🌤️ Application Météo</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
