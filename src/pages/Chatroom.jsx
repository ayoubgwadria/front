import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "../styles/chat.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
function Chatroom() {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const { data, messageData, getMessageRoom } = UseFetch(id);
  const userID = useSelector((state) => state?.login?.id);

  const submitMessage = async () => {
    const obj = {
      contenu: message,
      room: data?._id,
      sender: userID,
      reciever:
        data?.technicienId === userID ? data?.clientId : data?.technicienId,
    };
    axios
      .post("http://localhost:3001/api/chatroom/message", obj)
      .then(async (res) => {
        socket.emit("send_message");
        getMessageRoom(data?._id);
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    socket.on("recievce_message", async (res) => {
      console.log("enter message");
      getMessageRoom(data?._id);
    });
  }, [socket]);
  console.log("data", data, messageData);
  return (
    <Helmet title="Cart">
      <br />
      <br />
      <br />
      <br />
      <h1>Chat</h1>
      <div class="chat-container">
        <div class="chat-header">
          <h3>Chat Title</h3>
          <button>Close</button>
        </div>
        <div class="chat-body">
          {messageData.map((message) => {
            if (message?.sender === userID)
              return (
                <SenderMessage key={message?._id} message={message?.contenu} />
              );
            else
              return (
                <ReceiverMessage
                  key={message?._id}
                  message={message?.contenu}
                />
              );
          })}
        </div>
        <div class="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={submitMessage}>Send</button>
        </div>
      </div>
    </Helmet>
  );
}

export default Chatroom;
function SenderMessage(props) {
  return (
    <div className="chat-message sender">
      <div className="message-text">
        <p>{props.message}</p>
        <small>{props?.time}</small>
      </div>
    </div>
  );
}

function ReceiverMessage(props) {
  return (
    <div className="chat-message receiver">
      <div className="message-text">
        <p>{props.message}</p>
        <small>{props?.time}</small>
      </div>
    </div>
  );
}
const UseFetch = (id) => {
  const [data, setData] = useState([]);
  const [messageData, setMessageData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/chatroom/getroom/${id}`
        );
        setData(response.data);
        getMessageRoom(response.data._id);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);
  const getMessageRoom = async (idroom) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/chatroom/room/${idroom}/message`
      );
      setMessageData(response.data);
    } catch (error) {
      setError(error);
    }
  };
  return { data, error, messageData, getMessageRoom };
};
