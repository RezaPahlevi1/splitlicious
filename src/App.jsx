import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { FaUserFriends } from "react-icons/fa";
import { AddFriendForm } from "./components/AddFriendForm";
import { FriendList } from "./components/FriendList";
import { StaticContainer } from "./components/StaticContainer";
import { SplitBillForm } from "./components/SplitBillForm";

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
  const [splitBillActive, setSplitBillActive] = useState(false);

  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
    setFriendActive(false);
  }

  function handleFriendActive() {
    setSplitBillActive(false);
    setFriendActive(!friendActive);
  }

  function HandleSplitBillActive() {
    setFriendActive(false);
    setSplitBillActive(!splitBillActive);
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <Navbar />
        <FriendList
          friend={friend}
          onSplitBillActive={HandleSplitBillActive}
          onFriendActive={handleFriendActive}
        />
        {friendActive ? (
          <AddFriendForm
            onAddFriend={handleAddFriend}
            onFriendActive={handleFriendActive}
          />
        ) : splitBillActive ? (
          <SplitBillForm />
        ) : (
          <StaticContainer />
        )}
      </div>
    </>
  );
}

export default App;
