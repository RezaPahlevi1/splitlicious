import { FaCalculator } from "react-icons/fa";

export function SplitBillForm() {
  return (
    <div className="max-w-screen border-2 flex flex-col border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <form>
        <div className="ml-5 p-5">
          <div className="flex flex-row gap-3 items-center">
            <div className="bg-gradient-to-r text-white from-purple-600 to-indigo-600 p-2 rounded-xl">
              <FaCalculator />
            </div>
            <h1 className="font-semibold text-lg">Split The Bill With X</h1>
          </div>

          <div className="flex flex-col gap-2 pt-5">
            <label>Total Bill ($)</label>
            <input
              type="text"
              placeholder="0.00"
              className="border border-gray-400/40 p-3 rounded-md"
            />

            <label>Your Amount ($)</label>
            <input
              type="text"
              placeholder="0.00"
              className="border border-gray-400/40 p-3 rounded-md"
            />

            <label>X Amount ($)</label>
            <input
              type="text"
              placeholder="0.00"
              className="border border-gray-400/40 p-3 rounded-md"
              disabled
            />

            <label>Who pays the bill?</label>
            <select className="border border-gray-400/40 p-3 rounded-md cursor-pointer">
              <option>You</option>
              <option>X</option>
            </select>

            <div className="grid grid-cols-4 gap-3 pt-5">
              <button
                type="submit"
                className="font-semibold p-4 col-span-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white cursor-pointer"
              >
                Split Bill
              </button>

              <button className="p-4 border border-gray-400/50 rounded-md cursor-pointer">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
