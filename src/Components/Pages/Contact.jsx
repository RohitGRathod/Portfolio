import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_8948u28', 'template_pqcv5me', form.current, 'tpprEcsFZVc2A6ZcG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        form.current.reset(); // Reset the form after successful submission
      }, (error) => {
        console.log('FAILED...', error);
        alert("Failed to send message. Please try again later.");
      });
  };
  return (
  <div className='flex justify-center w-11/12 min-h-screen rounded-2xl bg-black/30 m-10 '>
      <form ref={form}   onSubmit={handleSubmit} className='w-full p-8 rounded-lg shadow-lg'>
        
        <div className='flex flex-col items-center justify-center min-h-screen bg-black/30 text-gray-500'>
          <h1 className='text-3xl font-bold mb-6 text-gray-300'>Contact Me</h1>
          <input
            type='text'
            name = 'userName'
            placeholder='Your Name'
            className='mb-4 p-2 border border-gray-300 rounded w-1/2 text-gray-300 bg-gray-900'
            
          />
          <input
            type='email'
            name = 'email'
            placeholder='Your Email'
            className='mb-4 p-2 border border-gray-300 rounded w-1/2 text-gray-300 bg-gray-900'
           
          />
          <textarea
            className='mb-4 p-2 border border-gray-300 rounded w-1/2 h-32 text-gray-300 bg-gray-900'
            placeholder='Your Message'
            name='message'
           
          ></textarea>
          <button
            type='submit'
            className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200'
          >
            Send Message
          </button>
        </div>
      </form>
      </div>
      
    
  )
}

export default Contact
