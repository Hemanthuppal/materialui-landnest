import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Badge,
} from '@mui/material';
import { Send, ArrowBack, MoreVert, Search } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';

const ChatWindow = () => {
  const { userId, userName } = useContext(AuthContext);
  const { propertyId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [participants, setParticipants] = useState([]);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Fetch chat messages for this property
  const fetchChat = async () => {
    try {
      const res = await axios.get('https://landnest.net:81/chat-messages/');
      const filtered = res.data.filter(
        (msg) => msg.property_id == propertyId
      );
      setMessages(filtered);
      
      // Auto-scroll to bottom
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Error loading chat:', error);
    }
  };

  // Identify all participants in this property chat
  const identifyParticipants = () => {
    const uniqueUsers = new Set();
    messages.forEach(msg => {
      uniqueUsers.add(msg.user_id);
      uniqueUsers.add(msg.receiver);
    });
    setParticipants(Array.from(uniqueUsers).filter(id => id != userId));
  };

  useEffect(() => {
    fetchChat();
    const interval = setInterval(fetchChat, 5000);
    return () => clearInterval(interval);
  }, [propertyId]);

  useEffect(() => {
    identifyParticipants();
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    try {
      // Assuming you want to send to all participants
      await Promise.all(participants.map(async (receiverId) => {
        await axios.post('https://landnest.net:81/chat-messages/', {
          user_id: userId,
          receiver: receiverId,
          message: newMessage,
          property_id: propertyId
        });
      }));
      setNewMessage('');
      fetchChat();
    } catch (error) {
      console.error('Failed to send:', error);
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 800,
        mx: 'auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#e5ddd5',
        backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-light_a4be512e7195b6b733d9110b408f075d.png")',
      }}
    >
      {/* Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: '#075e54',
          color: 'white',
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <ListItemText
            primary={`Property #${propertyId}`}
            secondary={`Chat with ${participants.length} participant(s)`}
            sx={{ color: 'white' }}
            primaryTypographyProps={{ fontWeight: 'bold' }}
            secondaryTypographyProps={{ fontSize: '0.75rem' }}
          />
          <IconButton edge="end" color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Chat Messages */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
       
        }}
      >
        <List sx={{ width: '100%' }}>
          {messages.map((msg, idx) => (
            <ListItem
              key={idx}
              sx={{
                justifyContent: msg.user_id == userId ? 'flex-end' : 'flex-start',
                px: 0,
                py: 0.5,
              }}
            >
              {msg.user_id !== userId && (
                <ListItemAvatar>
                  <Avatar src={`https://i.pravatar.cc/150?u=${msg.user_id}`} />
                </ListItemAvatar>
              )}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '75%',
                }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    borderRadius:
                      msg.user_id == userId
                        ? '18px 18px 0 18px'
                        : '18px 18px 18px 0',
                    bgcolor: msg.user_id == userId ? '#dcf8c6' : 'white',
                  }}
                >
                  <Typography variant="body1">{msg.message}</Typography>
                  {msg.user_id !== userId && (
                    <Typography variant="caption" color="text.secondary">
                      {msg.user_id === userId ? 'You' : `User ${msg.user_id}`}
                    </Typography>
                  )}
                </Paper>
                <Typography
                  variant="caption"
                  sx={{
                    alignSelf: msg.user_id == userId ? 'flex-end' : 'flex-start',
                    color: 'text.secondary',
                    mt: 0.5,
                  }}
                >
                  {formatTime(msg.created_at)}
                  {msg.user_id == userId && (
                    <span style={{ marginLeft: 4 }}>
                      {msg.is_read ? '✓✓' : '✓'}
                    </span>
                  )}
                </Typography>
              </Box>
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>

      {/* Message Input */}
      <Box
        sx={{
          p: 1,
          bgcolor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
         marginBottom: '22%', // Adjust for the bottom navbar
         
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          sx={{
            bgcolor: 'white',
            borderRadius: 20,
            '& .MuiOutlinedInput-root': {
              borderRadius: 20,
              paddingRight: 1,
            },
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                color="primary"
                onClick={handleSend}
                disabled={!newMessage.trim()}
              >
                <Send />
              </IconButton>
            ),
          }}
        />
      </Box>
       <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <FormsBottomNavbar />
      </Box>
    </Box>
  );
};

export default ChatWindow;