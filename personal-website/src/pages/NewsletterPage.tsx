import React from 'react';

const NewsletterPage: React.FC = () => {
  const imageUrls = [
    'https://via.placeholder.com/800/FF0000',
    'https://via.placeholder.com/800/0000FF',
    'https://via.placeholder.com/800/FFFF00',
    // Add more image URLs
  ];

  return (
    <div style={{ overflowY: 'auto', height: '100vh' }}>
      <h1>Newsletter</h1>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Newsletter Image ${index + 1}`}
          style={{ width: '100%', display: 'block', marginBottom: '10px' }}
        />
      ))}
    </div>
  );
};

export default NewsletterPage;