import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button
} from '@mui/material';
import { ArrowBackIosNew, MoreVert, Send } from '@mui/icons-material';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const propertyId = location.state?.property;
  const propertyTitle = location.state?.title || 'Property Chat';

  const { userId, userName } = useContext(AuthContext);
  const [receiverId, setReceiverId] = useState(null);
  const [receiverName, setReceiverName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [propertyNotFound, setPropertyNotFound] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    if (!propertyId) return;

    // Fetch property details to get receiver info
    axios.get('https://landnest.net:81/property/')
      .then(res => {
        const matchedProperty = res.data.find(p => p.property_id == propertyId);
        if (matchedProperty) {
          setReceiverId(matchedProperty.user_id);
          setReceiverName(matchedProperty.user_name || 'Property Owner');
          // Fetch chat history
          fetchChatHistory();
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

  const fetchChatHistory = () => {
    axios.get(`https://landnest.net:81/chat-messages/?property_id=${propertyId}`)
      .then(res => {
        // Filter messages to only include:
        // 1. Messages sent by current user (user_id == userId)
        // OR
        // 2. Messages received by current user (receiver == userId)
        const filteredMessages = res.data.filter(msg => 
          (msg.user_id == userId) || (msg.receiver == userId)
        );
        
        // Process messages to determine sender/receiver
        const processedMessages = filteredMessages.map(msg => ({
          ...msg,
          isSender: msg.user_id == userId, // true if current user sent this message
          displayName: msg.user_id == userId ? 'You' : receiverName,
          time: formatTime(msg.created_at)
        }));
        
        // Sort messages by timestamp
        processedMessages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        
        setChatMessages(processedMessages);
      })
      .catch(err => {
        console.error('Error fetching chat history:', err);
      });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = async () => {
    if (!receiverId || !message.trim()) return;

    try {
      const newMessage = {
        property_id: propertyId,
        user_id: userId,
        receiver: receiverId,
        message: message.trim(),
        created_at: new Date().toISOString(),
        isSender: true,
        displayName: 'You',
        time: formatTime(new Date())
      };

      // Optimistically update UI
      setChatMessages(prev => [...prev, newMessage]);
      setMessage('');

      await axios.post('https://landnest.net:81/chat-messages/', {
        property_id: propertyId,
        user_id: userId,
        receiver: receiverId,
        message: message.trim()
      });
      
      // Refresh messages to get the actual data from server
      fetchChatHistory();
    } catch (error) {
      console.error('❌ Message send failed:', error);
      // Revert optimistic update if failed
      setChatMessages(prev => prev.slice(0, -1));
      alert('Failed to send message');
    }
  };

  // Render functions for different message types
  const renderSenderMessage = (msg) => (
    <ListItem sx={styles.senderMessage}>
      <Box sx={styles.senderBubble}>
        <Typography variant="body1">{msg.message}</Typography>
        <Box sx={styles.messageMeta}>
          <Typography variant="caption">{msg.time}</Typography>
          <Box component="span" sx={styles.statusIcon}>
            {msg.is_read ? '✓✓' : '✓'}
          </Box>
        </Box>
      </Box>
    </ListItem>
  );

  const renderReceiverMessage = (msg) => (
    <ListItem sx={styles.receiverMessage}>
      <ListItemAvatar>
        <Avatar src="" alt={receiverName} />
      </ListItemAvatar>
      <Box sx={styles.receiverBubble}>
        <Typography variant="body1">{msg.message}</Typography>
        <Typography variant="caption" sx={styles.receiverTime}>
          {msg.time}
        </Typography>
      </Box>
    </ListItem>
  );

  if (!propertyId) {
    return (
      <Box sx={styles.errorContainer}>
        <Typography variant="h6" gutterBottom>No property selected</Typography>
        <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={styles.loadingContainer}>
        <Typography>Loading property details...</Typography>
      </Box>
    );
  }

  if (propertyNotFound) {
    return (
      <Box sx={styles.errorContainer}>
        <Typography variant="h6" gutterBottom>Property not found</Typography>
        <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    );
  }

  return (
    <Box sx={styles.chatContainer}>
      {/* Header */}
      <AppBar position="sticky" elevation={0} sx={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIosNew />
          </IconButton>
          <ListItemAvatar sx={styles.avatar}>
            <Avatar src="" alt={receiverName} />
          </ListItemAvatar>
          <ListItemText
            primary={`${receiverName} - ${propertyTitle}`}
            secondary="Online"
            sx={styles.receiverInfo}
            primaryTypographyProps={{ fontWeight: 'bold' }}
            secondaryTypographyProps={{ fontSize: '0.75rem' }}
          />
          <IconButton edge="end" color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Chat Messages */}
      <Box sx={styles.messagesContainer}>
        <List sx={{ width: '100%' }}>
          {chatMessages.length > 0 ? (
            chatMessages.map((msg, index) => (
              <React.Fragment key={index}>
                {msg.isSender ? renderSenderMessage(msg) : renderReceiverMessage(msg)}
              </React.Fragment>
            ))
          ) : (
            <Typography sx={{ textAlign: 'center', mt: 2 }}>
              No messages yet. Start the conversation!
            </Typography>
          )}
        </List>
      </Box>

      {/* Message Input */}
      <Box sx={styles.inputContainer}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key == 'Enter' && handleSendMessage()}
          sx={styles.textField}
          InputProps={{
            endAdornment: (
              <IconButton 
                color="primary" 
                onClick={handleSendMessage}
                disabled={!message.trim()}
                sx={styles.sendButton}
              >
                <Send />
              </IconButton>
            )
          }}
        />
      </Box>

      {/* Bottom Navigation */}
      <Box sx={styles.bottomNav}>
        <FormsBottomNavbar />
      </Box>
    </Box>
  );
};

// Styles (same as before)
const styles = {
  chatContainer: {
    width: '100%',
    maxWidth: 800,
    mx: 'auto',
    minHeight: '100vh',
    bgcolor: 'rgb(239, 231, 221)',
    borderRadius: { xs: 0, sm: 3 },
    boxShadow: 3,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    pb: 7
  },
  appBar: {
    bgcolor: '#075E54',
    color: '#fff'
  },
  avatar: {
    minWidth: '40px',
    mr: 1
  },
  receiverInfo: {
    ml: 1
  },
  messagesContainer: {
    flexGrow: 1,
    overflowY: 'auto',
    p: 2,
    backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-light_a4be512e7195b6b733d9110b408f075d.png")',
    backgroundRepeat: 'repeat',
    backgroundSize: '412.5px 749.25px'
  },
  senderMessage: {
    justifyContent: 'flex-end',
    px: 0,
    py: 0.5
  },
  receiverMessage: {
    justifyContent: 'flex-start',
    px: 0,
    py: 0.5
  },
  senderBubble: {
    bgcolor: '#DCF8C6',
    p: 1.5,
    borderRadius: '18px 18px 0 18px',
    maxWidth: '70%',
    display: 'inline-block',
    textAlign: 'left'
  },
  receiverBubble: {
    bgcolor: '#fff',
    p: 1.5,
    borderRadius: '18px 18px 18px 0',
    maxWidth: '70%',
    display: 'inline-block',
    textAlign: 'left'
  },
  messageMeta: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    mt: 0.5
  },
  receiverTime: {
    display: 'block',
    textAlign: 'right',
    mt: 0.5,
    color: 'text.secondary'
  },
  statusIcon: {
    ml: 1,
    fontSize: '0.75rem',
    color: 'text.secondary'
  },
  inputContainer: {
    p: 1,
    bgcolor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    bottom: 56,
    borderTop: '1px solid #ddd'
  },
  textField: {
    bgcolor: '#fff',
    borderRadius: 20,
    '& .MuiOutlinedInput-root': {
      borderRadius: 20,
      paddingRight: 1
    }
  },
  sendButton: {
    ml: 1
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0
  },
  errorContainer: {
    width: '100%',
    maxWidth: 800,
    mx: 'auto',
    minHeight: '100vh',
    bgcolor: 'rgb(239, 231, 221)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    p: 3
  },
  loadingContainer: {
    width: '100%',
    maxWidth: 800,
    mx: 'auto',
    minHeight: '100vh',
    bgcolor: 'rgb(239, 231, 221)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Chat;