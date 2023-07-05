import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className='h-50 bg-green-800 flex flex-col justify-center items-center py-5'>
      <SocialMediaIcons/>
     <p className='mt-5'> Copyright © Nelson Asino 2023. All Rights Reserved</p>

    </footer>
  )
}

export default Footer