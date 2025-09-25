import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { FriendList } from "./components/FriendList";
import { FaCalculator } from "react-icons/fa";

function App() {
  const listTeman = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      balance: 0,
      status: "neutral",
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      balance: -25.5,
      status: "owe",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      balance: 15.75,
      status: "owes_you",
    },
  ];

  const [friendActive, setFriendActive] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <Navbar />
        <FriendList
          friendActive={friendActive}
          onFriendActive={setFriendActive}
          listTeman={listTeman}
        />
        {!friendActive ? <StaticContainer /> : <AddFriendContainer />}
      </div>
    </>
  );
}

function StaticContainer({ children }) {
  return (
    <div className="max-w-screen border-2 items-center py-20 mb-5 flex flex-col border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <FaCalculator />
      <p>Select a friend to split the bill</p>
    </div>
  );
}

function AddFriendContainer() {
  return <div>Add Friend Container</div>;
}

export default App;
