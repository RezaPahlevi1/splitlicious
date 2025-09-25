import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { FaCalculator, FaUserFriends } from "react-icons/fa";
import { AddFriendForm } from "./components/AddFriendForm";
import { Friend } from "./components/Friend";
import { FriendList } from "./components/FriendList";

function App() {
  const listTeman = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      balance: 0,
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      balance: -25.5,
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      balance: 15.75,
    },
  ];

  const [friendActive, setFriendActive] = useState(false);
  const [friend, setFriend] = useState([]);

  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
    setFriendActive(false);
  }

  function handleFriendActive() {
    setFriendActive(!friendActive);
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <Navbar />
        <FriendList friend={friend} onFriendActive={handleFriendActive} />
        {!friendActive ? (
          <StaticContainer />
        ) : (
          <AddFriendForm
            onAddFriend={handleAddFriend}
            onFriendActive={handleFriendActive}
          />
        )}
      </div>
    </>
  );
}

function SplitBillContainer() {}

function StaticContainer() {
  return (
    <div className="max-w-screen border-2 items-center py-20 mb-5 flex flex-col border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <FaCalculator />
      <p>Select a friend to split the bill</p>
    </div>
  );
}

export default App;
