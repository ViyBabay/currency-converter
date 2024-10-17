import { useState, useEffect } from "react";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";

export const Converter = ({ currencyData }) => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    if (currencyData && currencyData.quotes) {
      const availableCurrencies = [
        "USD",
        ...Object.keys(currencyData.quotes).map((key) => key.slice(3)),
      ];
      setCurrencies(availableCurrencies);

      handleAmount1Change(1);
    }
  }, [currency1, currency2, currencyData]);

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (!currencyData || !currencyData.quotes) return 0;
    const rates = currencyData.quotes;

    const rateFrom = fromCurrency === "USD" ? 1 : rates[`USD${fromCurrency}`];
    const rateTo = toCurrency === "USD" ? 1 : rates[`USD${toCurrency}`];

    if (!rateFrom || !rateTo) return 0;
    return (amount / rateFrom) * rateTo;
  };

  const handleAmount1Change = (amount) => {
    const value = convertCurrency(amount, currency1, currency2).toFixed(2);
    setAmount2(value);
    setAmount1(amount);
  };

  const handleCurrency1Change = (currency) => {
    setAmount2(convertCurrency(amount1, currency, currency2).toFixed(2));
    setCurrency1(currency);
  };

  const handleAmount2Change = (amount) => {
    const value = convertCurrency(amount, currency2, currency1).toFixed(2);
    setAmount1(value);
    setAmount2(amount);
  };

  const handleCurrency2Change = (currency) => {
    setAmount1(convertCurrency(amount2, currency1, currency).toFixed(2));
    setCurrency2(currency);
  };

  return (
    <div className="bg-converter-gradient w-full max-h-full">
      <CurrencyInput
        amount={amount1}
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currency={currency1}
        currencies={currencies}
      />
      <CurrencyInput
        amount={amount2}
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currency={currency2}
        currencies={currencies}
      />
    </div>
  );
};
