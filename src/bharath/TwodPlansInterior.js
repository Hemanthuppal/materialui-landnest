import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import pic1 from './Images/2d-pic1.jpg';
import pic2 from './Images/2d-pic2.jpg';

const data = [
  {
    id: 1,
    title: '2d plans',
    image: pic1
  },
  {
    id: 2,
    title: 'content 2',
    image: pic1
  },
  {
    id: 3,
    title: 'content 3',
    image: pic2
  },
  {
    id: 4,
    title: 'content 4',
    image: pic2
  },
  {
    id: 5,
    title: 'content 5',
    image: pic1
  },
  {
    id: 6,
    title: 'content 6',
    image: pic2
  },
  {
    id: 7,
    title: 'content 7',
    image: pic1
  },
  {
    id: 8,
    title: 'content 8',
    image: pic2
  }

];

// Function to split data into chunks of 2 items each
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const TwodPlansInterior = () => {
  const rows = chunkArray(data, 2); // Split data into groups of 2

  return (
    <Box display="flex" flexDirection="column" gap={1} marginTop="10px">
      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          display="flex"
          overflow="auto"
          padding={1}
          gap={1}
        >
          {row.map((item) => (
            <Card
              key={item.id}
              sx={{ minWidth: '48%', flexShrink: 0, borderRadius: 2, boxShadow: 3 }}
            >
              <CardMedia
                component="img"
                height="100"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography variant="subtitle1" align="left" fontWeight="bold">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default TwodPlansInterior;