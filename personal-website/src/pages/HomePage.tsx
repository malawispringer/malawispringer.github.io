import React from 'react';
import profileImage from '../../public/assets/my_profile.jpg'
import Navbar from '../components/NavBar';

const HomePage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div style={{ padding: '50px' }}>
      <h1>Malawi Springer</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '200px', marginRight: '20px' }}>
          {/* Replace with your actual image */}
          <img
            src={profileImage}
            alt="profile picture"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }}
          />
        </div>
        <div>
          <p className='w-30'>Hiii!! My name is Malawi, and I'm an upcoming senior @ University of Michigan. I'm studying computer science with a focus on ethical AI and machine learning.
          </p>
          <p>A little about me beyond academics. I am a what I like to call a logical creative. I love making new things and expeieemnting. 
            Some of my crafty skills include baking, photography, travel, and lots of other things, many of which are featured
            on this website somewhere. My greastest joy in life is sharing knowldege of any kind, so not only am I a bit of a fact fiend but I love chatting with people who know wayy more stuff than me.

          </p>
          <div>
            <button onClick={() => window.open('YOUR_GITHUB_LINK', '_blank')}>GitHub</button>
            <button onClick={() => window.open('www.linkedin.com/in/malawi-springer', 'test')}>LinkedIn</button>
            <button onClick={() => window.location.href = 'mailto:malawis@umich.edu'}>Email Me</button>
          </div>
        </div>
      </div>
      {/* Add more content or styling as needed */}
    </div>
    </>
  );
};

export default HomePage;