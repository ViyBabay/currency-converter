export const CurrencyInput = ({
  amount,
  onAmountChange,
  onCurrencyChange,
  currency,
  currencies,
}) => {
  return (
    <div className="bg-[#1A1F36] w-80 mx-auto mb-5 flex flex-row gap-2 p-6 rounded-lg shadow-lg">
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        className="bg-[#2E3A59] border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white rounded-md px-2 py-1 text-lg shadow-md transition-all duration-300 w-full"
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="bg-[#2E3A59] border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white rounded-md px-2 py-1 text-lg shadow-md transition-all duration-300 w-20"
      >
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};
