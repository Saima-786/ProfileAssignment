import React from 'react'
import profile from '../data'

const Reach = () => {
  return (
    <ul className="about">
    <li>
      <span>{profile.followers}</span>Following
    </li>
    <li>
      <span>{profile.following}</span>Followers
    </li>
  </ul>
  )
}

export default Reach
