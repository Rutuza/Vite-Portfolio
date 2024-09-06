import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs 
      .sendForm('service_jp486xe', 'template_s5ocfi2', form.current, {
        publicKey: '/test',
      })
      .then(
        () => {
          console.log(result.text);
          console.log('Message sent');
        },
        (error) => {
          console.log(error.text);
          console.log('Unable to send message', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='grid grid-flow-row'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact