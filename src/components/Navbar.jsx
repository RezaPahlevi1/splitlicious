import { FaCalculator } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r text-white from-purple-600 to-indigo-600 p-2 rounded-xl">
            <FaCalculator />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            SplitLicious
          </h1>
        </div>
      </div>
    </header>
  );
}
