import React from 'react';

interface ImageSet {
  title: string;
  date: string;
  images: string[]; // Array of image URLs
}

const GalleryPage: React.FC = () => {
  const galleryData: ImageSet[] = [
    {
      title: 'Nature Escapes',
      date: '2024-08-15',
      images: [
        'https://via.placeholder.com/300/008000',
        'https://via.placeholder.com/300/00FF00',
        'https://via.placeholder.com/300/ADFF2F',
      ],
    },
    {
      title: 'City Adventures',
      date: '2024-07-20',
      images: [
        'https://via.placeholder.com/300/808080',
        'https://via.placeholder.com/300/A9A9A9',
      ],
    },
    // Add more image sets
  ];

  return (
    <div>
      <h1>Gallery</h1>
      {galleryData.map((set, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>{set.title}</h3>
          <p>Date: {set.date}</p>
          {/* Basic Image Grid - You can implement a carousel library here */}
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
            {set.images.map((img, i) => (
              <img key={i} src={img} alt={set.title} style={{ width: '200px', height: 'auto', borderRadius: '5px' }} />
            ))}
          </div>
          {/* You can add a more sophisticated carousel component here */}
          {/* Example of a simple set of pictures */}
          <div style={{ marginTop: '15px' }}>
            {set.images.map((img, i) => (
              <img key={`set-${index}-img-${i}`} src={img} alt={`${set.title} - ${i}`} style={{ width: '100px', height: 'auto', marginRight: '5px', borderRadius: '3px' }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;