import React from 'react'
import './ProfilePic.css'

export default function ProfilePic({profileImage}) {
  return (
    <div className="profile-image">
        <img src={profileImage} alt="Profile" className="avatar" />
    </div>
  )
}
