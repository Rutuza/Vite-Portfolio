import React from 'react';

import streetlightImg from '../assets/images/streetlight.jpg';
import deerImg from '../assets/images/deer.png';
import nighttimeNexusImg from '../assets/images/nighttimeNexus.png';
import fishesImg from '../assets/images/fishes.jpg';

function PhotographsPage() {
  return (
    <>
      <div className="container p-4">
        <div className="mainTitle text-4xl font-bold font-pop">Photography</div>
        <div className='mt-10'>
          <div className="image1Container">
            <div className="imgTitle text-2xl font-semibold font-pop max-sm:text-lg">01. Illuminating the Dusk</div>
            <div className="imgContent flex flex-row justify-between items-center mt-4 max-sm:grid max-sm:grid-flow-row">
              <img className='w-4/12 float-left max-sm:w-full' src={streetlightImg} alt="" />
              <div className='text-lg w-1/2 max-sm:w-fit max-sm:text-base'>
                <ul>
                  <li className='mb-4 max-sm:mb-2'><strong>Category: </strong> Urban Landscape</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Location: </strong>Gwalior</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Date: </strong>January 23, 2023 (Winter Season)</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Device: </strong>Realme 6i (Back camera)</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Technique: </strong>Captured with dimmed exposure in a dark background to enhance the photograph</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Subject: </strong>A lone streetlight glowing against the evening sky, capturing the contrast between the artificial light and the natural darkness.
                  </li>
                  <li><strong>Inspiration: </strong> The contrast between the artificial light and the natural darkness caught my eyes.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="image2Container mt-10 relative">
            <div className="imgTitle text-2xl font-semibold font-pop max-sm:text-lg absolute right-40">02. Island Serenity</div>
            <div className="imgContent flex flex-row justify-between items-center mt-4 max-sm:grid max-sm:grid-flow-row">
              <div className='text-lg w-1/2 max-sm:w-fit max-sm:text-base max-sm:mt-4'>
              <img className='w-1/2 max-sm:w-full absolute right-0 top-10' src={deerImg} alt="" />
                <ul>
                  <li className='mb-4 max-sm:mb-2'><strong>Category: </strong>Wildlife Photography</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Location: </strong>Ross Island, Andaman</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Date: </strong>January 04, 2024 (Winter Season)</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Device: </strong>Realme 6i (Back camera)</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Subject: </strong>A spotted deer grazes peacefully amidst the lush greenery of the Andaman and Nicobar Islands, showcasing the island's pristine natural beauty.
                  </li>
                  <li className='mb-4 max-sm:mb-2'><strong>Technique: </strong>Master patience, camouflage, and sharp focus while composing your shots to capture deer's essence.</li>
                  <li><strong>Inspiration: </strong>Find inspiration in deer's grace, their connection with nature, and the unique moments they offer. </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="image3Container mt-10">
            <div className="imgTitle text-2xl font-semibold font-pop max-sm:text-lg">03. Nighttime Nexus</div>
            <div className="imgContent flex flex-row justify-between items-center mt-4 max-sm:grid max-sm:grid-flow-row">
              <img className='w-4/12 float-left max-sm:w-full' src={nighttimeNexusImg} alt="" />
              <div className='text-lg w-1/2 max-sm:w-fit max-sm:text-base max-sm:mt-4'>
                <ul>
                  <li className='mb-4 max-sm:mb-2'><strong>Category: </strong>Architectural Photography</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Location: </strong>Amity University, Gwalior</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Date: </strong>February 24, 2023 (Winter Season)</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Device: </strong>Realme 6i (Back camera)</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Subject: </strong>The photo showcases the university's illuminated architecture at night, highlighting its modern design and vibrant colors.
                  </li>
                  <li className='mb-4 max-sm:mb-2'><strong>Technique: </strong>Night photography, Long exposure</li>
                  <li><strong>Inspiration: </strong>The interplay of light and architecture, creating a sense of grandeur and mystery.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="image3Container mt-10">
            <div className="imgTitle text-2xl font-semibold font-pop max-sm:text-lg">04. Coral Kalaiedoscope</div>
            <div className="imgContent flex flex-row justify-between items-center mt-4 max-sm:grid max-sm:grid-flow-row">
              <img className='w-4/12 float-left max-sm:w-full' src={fishesImg} alt="" />
              <div className='text-lg w-1/2 max-sm:w-fit max-sm:text-base max-sm:mt-4'>
                <ul>
                  <li className='mb-4 max-sm:mb-2'><strong>Category: </strong>Underwater Photography</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Location: </strong>Havelock Island, Andaman</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Date: </strong>January 01, 2024</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Device: </strong>Hero11 Black Mini</li>
                  <li className='mb-4 max-sm:mb-2'><strong>Subject: </strong>A vibrant underwater scene of a school of fish swimming amidst colorful coral reefs in the Andaman Islands.
                  </li>
                  <li className='mb-4 max-sm:mb-2'><strong>Technique: </strong>Underwater wide angle photography</li>
                  <li><strong>Inspiration: </strong>The vibrant colors and diverse marine life of the Andaman Islands.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>  
      </div> 
    </>
  );
}

export default PhotographsPage;
