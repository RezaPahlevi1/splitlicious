import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { FaUserFriends } from "react-icons/fa";
import { AddFriendForm } from "./components/AddFriendForm";
import { FriendList } from "./components/FriendList";
import { StaticContainer } from "./components/StaticContainer";
import { SplitBillForm } from "./components/SplitBillForm";

function App() {
  const [friendActive, setFriendActive] = useState(false);
  const [friend, setFriend] = useState([]);
  const [splitBillActive, setSplitBillActive] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function HandleDeletefriend(id) {
    setFriend((friends) => friends.filter((friend) => friend.id !== id));
  }

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

  function HandleSplitBill(value) {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <Navbar />
        <FriendList
          onDeleteFriend={HandleDeletefriend}
          friend={friend}
          onSplitBillActive={HandleSplitBillActive}
          onFriendActive={handleFriendActive}
          onSelection={setSelectedFriend}
        />
        {friendActive ? (
          <AddFriendForm
            onAddFriend={handleAddFriend}
            onFriendActive={handleFriendActive}
          />
        ) : selectedFriend ? (
          <SplitBillForm
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            onSplitBill={HandleSplitBill}
          />
        ) : (
          <StaticContainer />
        )}
      </div>
    </>
  );
}

export default App;
