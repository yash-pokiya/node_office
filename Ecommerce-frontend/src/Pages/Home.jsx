import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';

const Home = () => {
  return (
    <>
        <div className='w-full h-screen items-center flex justify-center '>
            <Link to="/login">
                <button className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'>
                    Go to Login
                </button>
            </Link>
        </div>
    </>
  )
}

export default Home;