import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <footer className='mx-5 bg-black text-white text-center mt-auto'>
      © {date.getFullYear()} <a href="https://mms-it.com" className='underline text-gray-300 '>MMS IT</a>  .All rights reserved.
    </footer>
  )
}

export default Footer;
