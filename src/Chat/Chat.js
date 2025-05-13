import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext'; // Make sure the path is correct

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const propertyId = location.state?.property;

  const { userId } = useContext(AuthContext); // Assuming AuthContext provides userId
  const [receiverId, setReceiverId] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [propertyNotFound, setPropertyNotFound] = useState(false);

  useEffect(() => {
    if (!propertyId) return;

    axios.get('https://landnest.net:81/property/')
      .then(res => {
        const matchedProperty = res.data.find(p => p.property_id === propertyId);
        if (matchedProperty) {
          setReceiverId(matchedProperty.user_id);
        } else {
          setPropertyNotFound(true);
        }
      })
      .catch(err => {
        console.error('Error fetching property:', err);
        setPropertyNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [propertyId]);

  const handleSendMessage = async () => {
    if (!receiverId || !message.trim()) return;

    try {
      await axios.post('https://landnest.net:81/chat-messages/', {
        property_id: propertyId,
        user_id: userId,
        receiver: receiverId,
        message: message.trim()
      });
        console.log('✅ Message sent successfully', message, receiverId, userId);

      alert('✅ Message sent!');
      setMessage('');
    } catch (error) {
      console.error('❌ Message send failed:', error);
      alert('Failed to send message');
    }
  };

  // UI rendering
  if (!propertyId) {
    return (
      <div>
        <h2>No property selected</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  if (loading) return <p>Loading property details...</p>;

  if (propertyNotFound) {
    return (
      <div>
        <h2>Property not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chat Page</h2>
      <p><strong>Property ID:</strong> {propertyId}</p>
      <p><strong>Receiver ID:</strong> {receiverId}</p>
      <p><strong>Your User ID:</strong> {userId}</p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        rows={4}
        cols={50}
        style={{ marginTop: '10px', display: 'block' }}
      />

      <button
        onClick={handleSendMessage}
        disabled={!message.trim()}
        style={{ marginTop: '10px' }}
      >
        Send Message
      </button>
    </div>
  );
};

export default Chat;
