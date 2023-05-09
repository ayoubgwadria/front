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

  const submitMessage = async (e) => {
    e.preventDefault();
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
        const room = data._id;
        socket.emit("send_message", { room });
        getMessageRoom(data?._id);
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    socket.on("recievce_message", async (res) => {
      console.log("enter messssagse", res);
      getMessageRoom(res);
    });
  }, [socket]);
  console.log("data", data);
  return (
    <Helmet title="Cart">
      <br />
      <br />
      <br />
      <br />
      <h1>Chat</h1>
      <div class="chat-container">
        <div class="chat-header">
          <h3>{data?.postId?.titre}</h3>
          {/*  <button>Close</button> */}
        </div>
        <div class="chat-body">
          {messageData.map((message) => {
            if (message?.sender === userID)
              return (
                <SenderMessage
                  key={message?._id}
                  message={message?.contenu}
                  user={
                    data?.clientId?._id === userID
                      ? data?.clientId
                      : data?.technicienId
                  }
                />
              );
            else
              return (
                <ReceiverMessage
                  key={message?._id}
                  message={message?.contenu}
                  user={
                    data?.clientId?._id === userID
                      ? data?.technicienId
                      : data?.clientId
                  }
                />
              );
          })}
        </div>
        <form onSubmit={submitMessage}>
          <div class="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </Helmet>
  );
}

export default Chatroom;
function SenderMessage(props) {
  return (
    <div className="chat-message-sender sender">
      <small>{props?.user?.nom + " " + props?.user?.prenom} </small>
      <div className="message-text">
        <p>{props.message}</p>
      </div>
    </div>
  );
}

function ReceiverMessage(props) {
  return (
    <div className="chat-message-reciever receiver">
      <small>{props?.user?.nom + " " + props?.user?.prenom} </small>
      <div className="message-text">
        <p>{props.message}</p>
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
        joinRoom(response.data._id);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);
  const joinRoom = (idRoom) => {
    if (idRoom !== "") {
      socket.emit("join_room", idRoom);
    }
  };
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
