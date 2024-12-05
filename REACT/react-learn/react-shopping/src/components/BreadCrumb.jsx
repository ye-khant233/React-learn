import React from 'react'
import { Link } from 'react-router';

const BreadCrumb = ({CurrentPageTitle}) => {
  return (

    <>
      <div className="w-full flex gap-3 mb-5">
        <Link to="/" className='text-gray-500'>Home</Link>
        <span className='text-gray-500'>/</span>
        <p>{CurrentPageTitle}</p>
      </div>
    </>
  )
}

export default BreadCrumb
