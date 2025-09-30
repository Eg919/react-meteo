export default function WeatherCard({ data }) {
  return (
    <div className="bg-white shadow-md p-4 rounded w-64 text-center">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p className="text-3xl">{Math.round(data.main.temp)}°C</p>
      <p>💨 {data.wind.speed} m/s</p>
      <p>🌡️ Humidité: {data.main.humidity}%</p>
    </div>
  );
}
