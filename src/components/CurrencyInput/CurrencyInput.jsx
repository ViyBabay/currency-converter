export const CurrencyInput = ({
  amount,
  onAmountChange,
  onCurrencyChange,
  currency,
  currencies,
}) => {
  return (
    <div className="bg-[#335] w-44 mx-auto mb-5 grid grid-cols-[100px_80px] rounded-lg">
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        className="bg-none border-0 text-black pl-2"
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="bg-none border-0 text-black p-4"
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
