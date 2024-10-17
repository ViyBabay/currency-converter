import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <header>
        <div className="bg-header-gradient h-20 flex justify-around items-center text-white">
          <div>
            <ThreeDots height="50" width="50" color="#ea3807" />
          </div>
          <div>
            <ThreeDots height="50" width="50" color="#ea3807" />
          </div>
        </div>
      </header>
    </>
  );
};
