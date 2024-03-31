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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </div>
              </div>
            </section>

            <div className="airbnb-clone">
              <div className='p-8'>
                <div className='w-1/2'>
                  <h1 className='text-3xl'>Airbnb clone</h1>
                  <p className='text-justify mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

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
