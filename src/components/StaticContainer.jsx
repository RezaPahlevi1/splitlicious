import { FaCalculator } from "react-icons/fa";

export function StaticContainer() {
  return (
    <div className="max-w-screen border-2 items-center py-20 mb-5 flex flex-col border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <FaCalculator />
      <p>Select a friend to split the bill</p>
    </div>
  );
}
