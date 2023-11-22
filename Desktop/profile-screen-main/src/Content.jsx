import React from 'react';
import Social from './Components/Social';
import profile from './data';

const Content = () => {
  return (
    <div className="content">
    <p>
      {profile.about}
    </p>
    <Social/>
  </div>
  )
}

export default Content
