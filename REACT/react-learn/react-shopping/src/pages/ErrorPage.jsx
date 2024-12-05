import React from 'react'
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
   <>
   <section className='w-full h-screen flex justify-center items-center'>
    <div className="text-center">
        <h1 className='text-5xl font-bold mb-3'>404 not found</h1>
        <p className='w-96 mb-5 text-gray-400'> Animi illum explicabo sapiente, dolorum perspiciatis laboriosam, consequuntur deleniti nesciunt alias numquam quod doloribus provident aliquid officia non ipsa asperiores. Porro, placeat.</p>
            <Link to={"/"} className='border border-black px-4 py-1'> Return Home</Link>
    </div>
   </section>
   
   
   </>
  )
}

export default ErrorPage
