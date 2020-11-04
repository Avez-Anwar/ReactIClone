import React, { useState } from "react";
import "./Chat.css";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import { IconButton } from "@material-ui/core";

function Chat() {
  const [input, setInput] = useState("");

  const handler = (e) => {
    e.preventDefault();
    setInput(" ");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span>Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__message">
        <h3>This is a message</h3>
        <h3>This is a message</h3>
        <h3>This is a message</h3>
      </div>

      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="message"
          />
          <button onClick={handler} className="submit__button">
            Submit
          </button>
        </form>
        <IconButton>
          <KeyboardVoiceIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
