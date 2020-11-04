import React from "react";
import Sidebar from "./Sidebar";
import SidebarChat from "./SidebarChat";
import "./App.css";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
