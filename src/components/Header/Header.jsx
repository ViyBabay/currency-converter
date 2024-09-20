export const Header = ({ currencyData }) => {
  if (!currencyData) {
    return <div>Loading...</div>;
  }

  const usdRate = currencyData.find(
    (currency) =>
      currency.currencyCodeA === 840 && currency.currencyCodeB === 980
  );
  const eurRate = currencyData.find(
    (currency) =>
      currency.currencyCodeA === 978 && currency.currencyCodeB === 980
  );

  return (
    <>
      <header>
        <div className="bg-header-gradient h-20 flex justify-around items-center text-white">
          <p>
            USD: {usdRate.rateBuy.toFixed(2)} / {usdRate.rateSell.toFixed(2)}
          </p>
          <p>
            EUR: {eurRate.rateBuy.toFixed(2)} / {eurRate.rateSell.toFixed(2)}
          </p>
        </div>
      </header>
    </>
  );
};
