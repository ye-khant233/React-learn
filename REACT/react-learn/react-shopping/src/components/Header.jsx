import React from 'react'
import Container from './Container';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className='px-5'>
    <Container>
    <div className="flex justify-between px-3 py-5">
        <Link to="/" className='text-3xl font-bold'>Online shop</Link>
        <Link to="/my-cart" className='border border-black px-4 py-2 relative' >My cart
        <span className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-block text-xs bg-red-500 text-white px-3 py-1'>1</span>
        </Link>
       
      </div>
    </Container>
    </header>
  )
}

export default Header
