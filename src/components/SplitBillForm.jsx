import { useState } from "react";
import { FaCalculator } from "react-icons/fa";

export function SplitBillForm({
  selectedFriend,
  setSelectedFriend,
  onSplitBill,
}) {
  const [bill, setBill] = useState("");
  const [expenses, setExpenses] = useState("");
  const [whoPays, setWhoPays] = useState("user");

  const calculated = bill ? bill - expenses : "";

  function HandleSubmit(e) {
    e.preventDefault();

    if (!bill || !expenses) return;
    onSplitBill(whoPays === "user" ? calculated : -expenses);
  }

  function HandleCancel(e) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedFriend(false);
  }
  return (
    <div className="max-w-screen border-2 flex flex-col border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <form onSubmit={HandleSubmit}>
        <div className="ml-5 p-5">
          <div className="flex flex-row gap-3 items-center">
            <div className="bg-gradient-to-r text-white from-purple-600 to-indigo-600 p-2 rounded-xl">
              <FaCalculator />
            </div>
            <h1 className="font-semibold text-lg">
              Split The Bill With {selectedFriend.name}
            </h1>
          </div>

          <div className="flex flex-col gap-2 pt-5">
            <label>Total Bill ($)</label>
            <input
              type="text"
              placeholder="0.00"
              className="border border-gray-400/40 p-3 rounded-md"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>Your Amount ($)</label>
            <input
              type="text"
              placeholder="0.00"
              className="border border-gray-400/40 p-3 rounded-md"
              value={expenses}
              onChange={(e) =>
                setExpenses(
                  Number(e.target.value) > bill
                    ? expenses
                    : Number(e.target.value)
                )
              }
            />

            <label>{selectedFriend.name} Amount ($)</label>
            <input
              type="text"
              placeholder={calculated}
              className="border border-gray-400/40 p-3 rounded-md"
              disabled
            />

            <label>Who pays the bill?</label>
            <select
              value={whoPays}
              onChange={(e) => setWhoPays(e.target.value)}
              className="border border-gray-400/40 p-3 rounded-md cursor-pointer"
            >
              <option value="user">You</option>
              <option value="friend">{selectedFriend.name}</option>
            </select>

            <div className="grid grid-cols-4 gap-3 pt-5">
              <button
                type="submit"
                className="font-semibold p-4 col-span-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white cursor-pointer"
              >
                Split Bill
              </button>
              <button
                type="button"
                onClick={HandleCancel}
                className="p-4 border border-gray-400/50 rounded-md cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
