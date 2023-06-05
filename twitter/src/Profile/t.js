import React, { useState } from 'react';

const ProfilePage = () => {
  const [headerImage, setHeaderImage] = useState(
    'https://pbs.twimg.com/profile_banners/1134318664818102272/1625643519/600x200'
  );
  const [profileImage, setProfileImage] = useState(
    'https://pbs.twimg.com/profile_images/1446890071563571210/tnbsrg5R_200x200.jpg'
  );
  const [username, setUsername] = useState('Hammad Saeedi');
  const [handle, setHandle] = useState('@hammadsaedi');
  const [bio, setBio] = useState('Hello, I am a Twitter user! #Bitcoin');

  return (
    <div>
      <div className="header">
        <img src={headerImage} alt="Header" className="header-image" />
      </div>


      <div className="profile">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" className="avatar" />
        </div>
        <div className="profile-info">
          <h1>{username}</h1>
          <h2>{handle}</h2>
          <p>{bio}</p>
        </div>
      </div>


      
      <div className="edit-profile">
        <a href="/settings/profile" className="edit-profile-button">
          Edit Profile
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
