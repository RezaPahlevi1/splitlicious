import { useState } from "react";

export function AddFriendForm({ onFriendActive, onAddFriend }) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);

  function HandleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newFriend = { id: crypto.randomUUID(), name, balance };

    onAddFriend(newFriend);

    setName("");
    setBalance(0);
  }
  return (
    <div className="max-w-screen border-2 flex flex-col border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <form onSubmit={HandleSubmit}>
        <div className="ml-5 p-5">
          <div className="flex flex-row gap-2 ">
            <p>+</p>
            <h1>Add New Friend</h1>
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <label>Friend's name</label>
            <input
              type="text"
              placeholder="Input Your Friend's Name"
              className="border border-gray-400/40 p-3 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 gap-3 pt-5">
            <button
              type="submit"
              className="p-4 col-span-3 rounded-md bg-gradient-to-r from-green-600 to-emerald-600 text-white cursor-pointer"
            >
              Add Friend
            </button>

            <button
              onClick={onFriendActive}
              className="p-4 border border-gray-400/50 rounded-md cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
