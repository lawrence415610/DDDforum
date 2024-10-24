import { TailSpin } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div className="spinner__backdrop">
      <TailSpin color="#444" />
    </div>
  );
};
