import React from 'react';

import weatherImg from '../assets/svg/weather_img.svg';

function Work() {
  return (
    <>
     <div className='font-pop bg-cream'>
     <center className="max-sm:text-2xl text-4xl font-bold italic m-4">Work</center>

        <div className='mt-8'>
          <div>
              <div className='w-1/2'>
                  <h1 className='text-4xl font-semibold'>The power of design thinking</h1>
                  <p className='text-justify mt-4'>The strength of design thinking is found in its capacity to foster creativity, human-centered solutions, and efficient problem-solving in a variety of contexts. It's a way of thinking that prioritizes collaboration, empathy, and experimentation, which makes it a useful strategy in the complicated and quickly changing world of today.</p>
              </div>
              <div></div>
          </div>

          <div className="container mt-16 flex flex-wrap justify-center items-center gap-8">
            <div>
              <div className='w-56 h-96 bg-gray-300 rounded-md'>
                <img className='h-96' src={weatherImg} alt="" />
              </div>
              <div className='mt-4'>1. Weather Forecasting App</div>
            </div>
            <div>
              <div className='w-56 h-96 bg-gray-300 rounded-md'></div>
              <div className='mt-4'>1. Anymator</div>
            </div>
            <div>
              <div className='w-56 h-96 bg-gray-300 rounded-md'></div>
              <div className='mt-4'>1. Personal Portfolio</div>
            </div>
            <div>
              <div className='w-56 h-96 bg-gray-300 rounded-md'></div>
              <div className='mt-4'>1. Ezybit Software</div>
            </div>
          </div>

          <hr className='border-black mt-8'/>

          <div className="projects-container">
            <div className="weather-app p-8">
              <div>
                <h1 className='text-3xl font-pop font-semibold'>Weather Forecasting App</h1>
                <p className='w-1/2 mt-4 text-justify'>
                Our weather forecasting application provides users with up-to-date weather information in a visually appealing and user-friendly interface. Utilizing HTML for structure, CSS and Sass for styling, and JavaScript for interactivity, our application delivers accurate weather forecasts based on location data. Users can input their location or allow the application to access their current location automatically. The application dynamically updates weather data, displaying current conditions, hourly forecasts, and multi-day outlooks. With intuitive design and real-time updates, our weather app ensures users are prepared for whatever the forecast brings.
                <br />
                <br />
                In summary, our weather forecasting application offers a seamless blend of HTML, CSS, Sass, and JavaScript to deliver a feature-rich and visually appealing user experience. Whether users are planning their day or preparing for a trip, our application provides the essential weather information they need to stay informed and make informed decisions
                </p>
              </div>
              <div className="anonymous-img"></div>
            </div>

            <section className='bg-grayscale w-full mt-8'>
              <div className="anymator text-white p-8">
                <div className='w-1/2 font-pop'>
                  <h1 className='text-3xl'>Anymator - React Component Library</h1>
                  <p className='mt-4 text-justify'>
                  Anymator is an innovative React component library that revolutionizes the way developers incorporate animations into their projects. Built using React JS, TypeScript, and Sass, Anymator offers a comprehensive collection of animations, making it a one-stop destination for developers seeking to enhance user experience with captivating motion effects. With Anymator, developers have access to a vast array of animation options, ranging from simple transitions to complex effects, all conveniently packaged within a single library. Whether you're looking for subtle hover animations, attention-grabbing entrance effects, or seamless page transitions, Anymator has you covered.
                  <br />
                  <br />
                  In summary, Anymator empowers developers to create stunning and immersive user experiences by providing a comprehensive collection of animations in one convenient library. Whether you're a seasoned developer or just starting out, Anymator simplifies the process of adding dynamic motion effects to your React applications, helping you deliver engaging and visually appealing interfaces to your users.
                  </p>
                </div>
              </div>
            </section>

            <div className="airbnb-clone">
              <div className='p-8'>
                <div className='w-1/2'>
                  <h1 className='text-3xl'>Airbnb clone</h1>
                  <p className='text-justify mt-4'>The Airbnb clone project built with the MERN stack is a web application that mimics the core functionalities of the popular accommodation booking platform Airbnb. Using MongoDB for the database, Express.js for the backend framework, React.js for the frontend, and Node.js for server-side scripting, this project allows users to browse, search, and book accommodations such as homes, apartments, or vacation rentals. Users can sign up, list their properties, search for accommodations based on various filters like location, price, and amenities, view property details, make bookings, and manage their reservations. The MERN stack provides a robust foundation for building scalable and responsive web applications, making it an ideal choice for replicating the Airbnb platform. 
                  
                  <br />
                  <br />
                  In addition to core functionalities, the Airbnb clone may incorporate additional features such as reviews and ratings, integrated payment gateways for secure transactions, social authentication for streamlined user registration, and geolocation services for enhanced search capabilities.
                  <br />
                  <br />
                  Overall, the MERN stack Airbnb clone project showcases the power of modern web development technologies in creating robust, feature-rich platforms that emulate the success of industry-leading services like Airbnb.
                  </p>


                </div>
              </div>
            </div>

            <section className='bg-grayscale w-full mt-8'>
              <div className="anymator text-white p-8">
                <div className='w-1/2 font-pop'>
                  <h1 className='text-3xl'>Ezybit Software</h1>
                  <p className='mt-4 text-justify'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </section>
          </div>

        </div>
     </div> 
    </>
  );
}

export default Work;
