const API_KEY =import.meta.env.VITE_API_KEY; // Mets ta clé OpenWeatherMap
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export async function getWeatherByCity(city) {
  try {
    const response = await fetch(
      `${BASE_URL}weather?q=${city}&units=metric&lang=fr&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Ville introuvable");
    return await response.json();
  } catch (error) {
    throw error;
  }
}
