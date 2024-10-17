import { useEffect, useState } from "react";

import { fetchCurrencyRates } from "./api/api";
import { Converter } from "./components/Converter/Converter";
import { Header } from "./components/Header/Header";

function App() {
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    const getCurrencyData = async () => {
      const data = await fetchCurrencyRates();
      console.log("Data from API:", data);
      if (data) {
        setCurrencyData(data);
      }
    };
    getCurrencyData();
  }, []);

  return (
    <>
      <Header currencyData={currencyData} />
      <Converter currencyData={currencyData} />
    </>
  );
}

export default App;
