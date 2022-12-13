import React from 'react'

const contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-500 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 '>Submit the Form blow to get in touch with me </p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/40038f32-f44b-442b-8e0d-7f1a8bd31797" method='POST' className='flex flex-col w-full md:1/2'>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Enter Your Name' 
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Enter Your email' 
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <textarea 
                        name='message' 
                        rows='10' 
                        placeholder='Enter Your Message' 
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' >

                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300'>
                        let's talk
                    </button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default contact