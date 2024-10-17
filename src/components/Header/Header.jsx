import { Loader } from "../Loader/Loader";

export const Header = ({ currencyData }) => {
  if (!currencyData || !currencyData.quotes) {
    return <Loader />;
  }

  const usdToUah = currencyData.quotes.USDUAH;
  const usdToEur = currencyData.quotes.USDEUR;
  const eurToUah =
    usdToUah && usdToEur ? (usdToUah / usdToEur).toFixed(2) : "N/A";
  const usdRate = usdToUah ? usdToUah.toFixed(2) : "N/A";

  return (
    <>
      <header>
        <div className="bg-header-gradient h-20 flex justify-around items-center text-white">
          <p>USD: {usdRate} UAH</p>
          <p>EUR: {eurToUah} UAH</p>
        </div>
      </header>
    </>
  );
};
