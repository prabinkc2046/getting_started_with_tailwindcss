import React from 'react'

export default function About() {
  return (
    <div>
        <h2 className='text-blue-900'>About page</h2>
        <button className='hover:text-red-900'>Click to know about us</button>
        <br />
        <input className='focus:text-red-900' type='text' placeholder='type'/>
        <h2 className='text-purple-700 text-opacity-75'>Opacity test</h2>
        <p className='text-purple-700 md:text-yellow-700'>more about us.</p>
    </div>
  )
}
