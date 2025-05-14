import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';

const InboxList = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://landnest.net:81/chat-messages/');
        const data = response.data;

        // Filter only messages relevant to this user
        const userMessages = data.filter(
          (msg) => msg.user_id == userId || msg.receiver == userId
        );

        // Group messages by unique conversation partner (latest message per partner)
        const latestMessagesMap = new Map();

        userMessages.reverse().forEach((msg) => {
          const otherUser = msg.user_id == userId ? msg.receiver : msg.user_id;
          if (!latestMessagesMap.has(otherUser)) {
            latestMessagesMap.set(otherUser, msg);
          }
        });

        const latestMessages = Array.from(latestMessagesMap.values());

        setMessages(latestMessages);
        setFilteredMessages(latestMessages);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, [userId]);

  useEffect(() => {
    const lowerSearch = searchText.toLowerCase();
    const filtered = messages.filter((msg) =>
      msg.message.toLowerCase().includes(lowerSearch)
    );
    setFilteredMessages(filtered);
  }, [searchText, messages]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 800,
        mx: 'auto',
        minHeight: '100vh',
        bgcolor: 'rgb(239, 231, 221)',
        borderRadius: { xs: 0, sm: 3 },
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'rgb(239, 231, 221)', color: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" size="small" onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Inbox ({filteredMessages.length})
          </Typography>
          <IconButton edge="end" size="small">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Search */}
      <Paper
        sx={{
          m: 2,
          px: 2,
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: '#f0f0f0',
          border: '1px solid black',
        }}
      >
        <Search sx={{ color: 'gray', mr: 1 }} />
        <InputBase
          placeholder="Search"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Paper>

      {/* Scrollable List */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          px: 1,
          pb: 7,
        }}
      >
        <List>
          {filteredMessages.map((msg, index) => {
            const isMe = msg.user_id == userId;
            const otherUser = isMe ? msg.receiver : msg.user_id;

            return (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start"  button
  onClick={() => navigate(`/chat/${otherUser}`)}>
                  <ListItemAvatar>
                    <Avatar>{`User ${otherUser}`[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontWeight={500} noWrap>
                          {`User ${otherUser}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(msg.created_at).toLocaleDateString()}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" noWrap>
                        {msg.message}
                      </Typography>
                    }
                  />
                </ListItem>
                {index !== filteredMessages.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            );
          })}
        </List>
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <FormsBottomNavbar />
      </Box>
    </Box>
  );
};

export default InboxList;
