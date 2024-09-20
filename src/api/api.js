import axios from "axios";

export const fetchCurrencyRates = async () => {
  const lastRequestTime = localStorage.getItem("lastRequestTime");
  const currentTime = Date.now();

  if (lastRequestTime && currentTime - lastRequestTime < 3600000) {
    const dataFromStorage = localStorage.getItem("currencyData");
    if (dataFromStorage) {
      return JSON.parse(dataFromStorage);
    }
  }

  try {
    const response = await axios.get("https://api.monobank.ua/bank/currency");
    const data = response.data;

    localStorage.setItem("currencyData", JSON.stringify(data));
    localStorage.setItem("lastRequestTime", currentTime);

    return data;
  } catch (error) {
    return null;
  }
};
