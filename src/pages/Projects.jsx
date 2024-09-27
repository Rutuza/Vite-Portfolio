import React from 'react';

import weatherImg from '../assets/images/umbrella.jpg';
import ezybitImg from '../assets/images/Ezybit.png';
import anymatorImg from '../assets/images/anymator.jpg';
import portfolioImg from '../assets/images/portfolio.png';

function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Weather Application',
      type: 'Frontend Development',
      image: weatherImg,
      brief: 'The Weather App project aims to provide users with real-time weather information for their current location or any specified location. The app will include features such as temperature, humidity, wind speed, and weather conditions (e.g., sunny, rainy, cloudy) with forecasts for the coming days.',

      about: 'The Weather App provides users with a range of essential features to keep them informed about real-time weather conditions. It offers up-to-date information on current temperature, humidity, wind speed, and atmospheric pressure, all displayed in an intuitive user interface. The app also includes a 5-day forecast, allowing users to view weather trends over the next several days. With a built-in search functionality, users can quickly find weather data for any location globally, while a GPS-based feature automatically detects the users location to provide local weather details. Additionally, visually engaging weather icons and background changes make the app more interactive and visually appealing.'
    },

    {
      id: '02',
      title: 'Ezybit Software',
      type: 'Software Developement',
      image: ezybitImg,
      brief: 'EzyBit is a software solution developed using Python, designed to streamline the installation and management of multiple programming languages. Similar to Anaconda, EzyBit allows users to install various programming languages in one go, simplifying the process by eliminating the need for manual, individual installations.',

      about: 'EzyBit is an innovative software designed to simplify the installation and management of multiple programming languages. Unlike traditional methods that require users to install languages one by one, EzyBit automates the process, allowing users to download and install a range of programming languages in a single step. The software supports popular languages like Python, Java, and more, providing a streamlined experience for developers. EzyBit also offers cross-platform support, ensuring compatibility across Windows, macOS, and Linux. Its user-friendly interface makes it easy for users to manage programming environments, while the built-in automation saves time and reduces complexity. Additionally, EzyBit ensures that all necessary dependencies and libraries are installed correctly, minimizing errors and improving efficiency.'
    },

    {
      id: '03',
      title: 'Anymator React Library',
      type: 'Frontend Development',
      image: anymatorImg,
      brief: 'Anymator is a React component library designed to simplify the integration of sophisticated animations into web applications. It provides an easy-to-use interface for developers to add animations without writing complex code, making animation implementation more accessible.',

      about: 'Anymator is a powerful React component library designed to simplify the integration of complex animations into web applications. It comes equipped with a variety of pre-built animation components, allowing developers to quickly add effects like fading, sliding, and rotating without writing extensive code. The library offers extensive customization, enabling users to adjust animation parameters such as duration, easing, and delays to suit their specific design needs. Anymator’s simple and intuitive API ensures seamless integration into existing React projects, while also providing flexibility for developers to create and customize their own animations. Its lightweight nature ensures minimal impact on performance, making it an ideal choice for building visually dynamic and responsive applications.'
    },

    {
      id: '04',
      title: 'Portfolio website',
      type: 'Design & Development',
      image: portfolioImg,
      brief: 'The Personal Portfolio project aims to showcase your skills, experience, and projects in a visually appealing and professional manner. It serves as a digital resume and a platform to highlight your work to potential employers, clients, or collaborators.',

      about: 'The Personal Portfolio website is a professional platform designed to showcase skills, experience, and projects in a visually appealing and structured manner. It features a clean, user-friendly design that highlights key sections such as "About Me," "Skills," and "Projects." The project section includes detailed descriptions of completed work, along with technologies used, challenges faced, and solutions implemented, offering a comprehensive view of the developer’s capabilities. The website is fully responsive, ensuring seamless viewing across devices like mobile phones, tablets, and desktops. It also includes a contact form for potential employers or clients to reach out directly, along with links to social profiles such as LinkedIn and GitHub. The portfolio emphasizes both professionalism and creativity, presenting the user as a skilled and versatile developer.'
    }
  ]

  return (
    <>
     <div className="container">
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover mb-4" />
            
            {/* Project Title & Type */}
            <h2 className="text-4xl font-bold mb-2 text-[#ABA7A7]">{String(project.id).padStart(2, '0')}</h2>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className="text-violet-500 mb-2 text-sm">{project.type}</p>
            
            {/* Project Brief */}
            <div className="my-10">
              <h3 className="text-lg font-semibold text-yellow-500">Project brief</h3>
              <p className="text-base max-sm:text-sm text-gray-700 mb-4 text-left max-sm:text-justify max-lg:text-justify">{project.brief}</p>
            </div>
            
            {/* About Project */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">About project</h3>
              <p className="text-base max-sm:text-sm text-gray-700 mb-4 text-left max-sm:text-justify max-lg:text-justify">{project.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;
