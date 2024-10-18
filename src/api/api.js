import axios from "axios";

const API_URL =
  "http://apilayer.net/api/live?access_key=0e3d306c6677179864a3746314d233e7&currencies=EUR,UAH,GBP,CAD,PLN&source=USD&format=1";

export const fetchCurrencyRates = async () => {
  const lastRequestTime = localStorage.getItem("lastRequestTime");
  const currentTime = Date.now();

  if (lastRequestTime && currentTime - lastRequestTime < 3600000) {
    const dataFromStorage = localStorage.getItem("currencyData");
    if (dataFromStorage) {
      console.log("LocalStorage:", JSON.parse(dataFromStorage));
      return JSON.parse(dataFromStorage);
    }
  }

  try {
    const response = await axios.get(API_URL);

    if (response.status === 200) {
      const data = response.data;

      console.log("API:", data);

      if (data && data.quotes) {
        const jsonData = JSON.stringify(data);
        localStorage.setItem("currencyData", jsonData);
        localStorage.setItem("lastRequestTime", currentTime.toString());
        return data;
      } else {
        return null;
      }
    } else {
      console.error("API:", response.status);
      return null;
    }
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
};
