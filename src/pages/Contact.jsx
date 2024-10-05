import React, { useState } from 'react';
import { send } from 'emailjs-com'; // Make sure you import send from the correct library

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await send('service_n06ze9n', 'template_nwmo0tk', formData, 'O4JZgaFNyLobecx0l');
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form after sending
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg">
     <div>
        <div className="text-center font-mate font-semibold text-5xl ">Contact Me</div>
        <div className="text-center font-mate text-yellow-400 italic">"reach out to me"</div>
      </div>
      
      
      <form onSubmit={handleSubmit} className='font-pop my-10'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full py-2 px-3 text-gray-700 bg-transparent border-b-2 border-black outline-none" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full py-2 px-3 text-gray-700 bg-transparent border-b-2 border-black outline-none"  
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea 
            name="message" 
            placeholder="" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="w-full py-2 px-3 text-gray-700 bg-transparent border-b-2 border-black outline-none"  
          />
        </div>
        <div className='flex justify-center items-center'>
          <button 
            type="submit" 
            className="bg-black text-violet-400 font-bold py-2 mt-8 px-4 rounded-full w-36"
          >
            Send
          </button>

        </div>
      </form>
    </div>
  );
};

export default Contact;
