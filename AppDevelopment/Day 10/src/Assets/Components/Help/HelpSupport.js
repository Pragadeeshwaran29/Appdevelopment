import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HelpSupport.css"; 
import Navbar from "../Navbar/Navbar";
import { gethelp, posthelp } from "../../api";

const HelpSupport = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [dataList, setDataList] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {

    if (message.trim() === "") {
      setFeedback("Please enter a message.");
      return;
    }

    setIsLoading(true);

    const data = {
      message: message,
    };

    posthelp(data) 
      .then((response) => {
        
        console.log("Message sent successfully:", response.data);
        setFeedback("Message sent successfully!");
        setMessage("");
      
        fetchDataList();
      })
      .catch((error) => {
  
        console.error("Error sending message:", error);
        setFeedback("Error sending message. Please try again later.");
      })
      .finally(() => {
      
        setIsLoading(false);
      });
  };

  const fetchDataList = () => {
    gethelp()
      .then((response) => {
        
        setDataList(response.data);
      })
      .catch((error) => {
      
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    
    fetchDataList();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="help-support-container">
        <div className="message-box">
          <h3>Send us a message:</h3>
          <textarea
            className="message-input"
            rows={1}
            value={message}
            onChange={handleInputChange}
            placeholder="Type your message here..."
          />
          <div className="feedback">
            {feedback && <p className="feedback-text">{feedback}</p>}
            {isLoading && <p>Loading...</p>}
          </div>
          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </div>
        <div className="data-list">
          <h3>Received Messages:</h3>
          <ul>
            {dataList.map((item) => (
              <li key={item.id} className="received-message">
                {item.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
