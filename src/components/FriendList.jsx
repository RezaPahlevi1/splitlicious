import { FaUserFriends } from "react-icons/fa";
import { Friend } from "./Friend";

export function FriendList({ listTeman, friendActive, onFriendActive }) {
  function handleFriendActive() {
    onFriendActive(!friendActive);
  }
  return (
    <div className="max-w-screen border-2 flex flex-col border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <div className="flex flex-row items-center">
        <FaUserFriends className="text-xl ml-5 text-purple-800" />
        <h1 className="p-5 pl-2 font-semibold text-xl">Friends</h1>
      </div>
      <div className="flex flex-col gap-3">
        {listTeman.map((list) => (
          <Friend list={list} key={list.id} />
        ))}
      </div>
      <div className="justify-center items-center flex flex-row text-center">
        <button
          onClick={handleFriendActive}
          className="w-full cursor-pointer mt-6 mx-5 p-4 border-2 border-dashed border-purple-300 rounded-md text-purple-600 hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <p>Add Friend</p>
        </button>
      </div>
    </div>
  );
}
