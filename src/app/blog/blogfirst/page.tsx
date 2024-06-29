import React from 'react'


export default function BlogFirst() {
  return (
    <>
    <div className='border border-blue-900 rounded shadow-'>
        <div className='p-4 border-b'>
            <button className='font-semibold text-base'>Accordtion title</button>
            <div className='p-4'>
                <p>Accordtion Content</p>
            </div>
        </div>
    </div>

    <h2>Alert</h2>
    <div className='bg-red-500 text-white p-4 rounded'>
        This is an alert!
    </div>
    </>
  )
}
