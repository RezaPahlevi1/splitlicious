import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { FaUserFriends } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <Navbar />
        <FriendList />
      </div>
    </>
  );
}

function FriendList() {
  return (
    <div className="max-w-screen border-2 border-gray-400/10 p-2 m-4 rounded-lg bg-white shadow-xs">
      <div className="flex flex-row items-center">
        <FaUserFriends className="text-xl ml-5 text-purple-800" />
        <h1 className="p-5 pl-2 font-semibold text-xl">Friends</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
}

function Friend() {
  return (
    <div className="p-5 rounded-md mx-5 bg-gray-400/5 shadow-xs border border-gray-300/30">
      Azka HartamiHartamiHartamiHartamiHartamiHartamiHartami
    </div>
  );
}

export default App;
