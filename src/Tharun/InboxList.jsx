import React from 'react';
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
  BottomNavigation,
  BottomNavigationAction,
  Typography
} from '@mui/material';
import { Search, MoreVert, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PersonIcon from "@mui/icons-material/Person";


const messages = [
  { name: 'Austin', subject: 'Fwd: Beautiful Locations', date: '12 Jun', avatar: '' },
  { name: 'Me.. Paula M', subject: 'Zoho Mail Webinar', date: '7 Sep', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Lana Bryante.. Me', subject: 'Agile Process', date: '26 Apr', avatar: 'https://randomuser.me/api/portraits/women/55.jpg' },
  { name: 'Paula M.. Me', subject: 'Website design templates', date: '2 Mar', avatar: 'https://randomuser.me/api/portraits/women/66.jpg' },
  { name: 'Li Jung - Developer', subject: 'Hi Rebecca Anderson, Zylker desk...', date: '18 Jun', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Me', subject: 'Hello !', date: '10 Oct', avatar: 'https://randomuser.me/api/portraits/women/77.jpg' },
  { name: 'Patricia Boyle... Me', subject: 'Beta release for application', date: '21 Apr', avatar: 'https://randomuser.me/api/portraits/men/88.jpg' }
];

const InboxList = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 800,
        mx: 'auto',
        height: 700,
        bgcolor: '#fff',
        borderRadius: { xs: 0, sm: 3 },
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', color: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" size="small" onClick={() => navigate('/work-details')}>
            <ArrowBack />
        </IconButton>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Inbox(22)
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
          backgroundColor: '#f0f0f0'
        }}
      >
        <Search sx={{ color: 'gray', mr: 1 }} />
        <InputBase placeholder="Search" fullWidth />
      </Paper>

      {/* Scrollable List */}
      <Box sx={{ flex: 1, overflowY: 'auto', px: 1, pb: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar
                  button
                  onClick={() => navigate('/work-detail')}
                >
                  <Avatar src={msg.avatar}>{msg.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography fontWeight={500} noWrap>{msg.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {msg.date}
                      </Typography>
                    </Box>
                  }
                  secondary={<Typography variant="body2" noWrap>{msg.subject}</Typography>}
                />
              </ListItem>
              {index !== messages.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Box>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid #ccc",
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Construction & Interiors" icon={<BuildIcon />} />
          <BottomNavigationAction label="Post" icon={<PostAddIcon />} />
          <BottomNavigationAction label="Home Services" icon={<HomeRepairServiceIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
      
    </Box>
    
  );
};

export default InboxList;




