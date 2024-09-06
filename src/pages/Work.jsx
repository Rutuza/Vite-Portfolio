import React from "react";

import cameraLens from "../assets/images/camera lens.jpg";
import ezybit from "../assets/images/Ezybit.png";
import fishes from "../assets/images/fishes.jpg";
import streetlight from "../assets/images/streetlight img.jpg";

function Work() {
  const imageList = [
    { src: streetlight, alt: "Streetlight", className: "col-span-3 row-span-6" },
    { src: cameraLens, alt: "Camera Lens", className: "col-span-4 row-span-4" },
    { src: chatapp, alt: "Chat App", className: "col-span-3 row-span-4" },
    { src: butterfly, alt: "Butterfly", className: "col-span-3 row-span-3 col-start-1" },
    { src: ezybit, alt: "Ezybit", className: "col-span-3 row-span-5 col-start-4 row-start-5" },
    { src: fishes, alt: "Fishes", className: "col-span-4 row-span-5 row-start-5" },
    
  ];

  return (
    <>
      <div className="flex jusify-center flex-col items-center">
        <div className="text-4xl font-bold italic m-4">Work</div>
        <div className="mt-10">
          <ul className="flex flex-row gap-32 max-sm:gap-10 items-center justify-center font-medium">
            <li>
              <a href="#" className="hover:text-violet-500">
                All
              </a>
            </li>
            <li>
              <a href="" className="hover:text-violet-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-500">
                Logo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-500">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div className="images max-sm:mt-8 max-sm:p-1 grid grid-cols-10 p-2 grid-rows-9 w-[60rem] h-[30rem] gap-2">
          {imageList.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className={`h-full w-full rounded-md ${image.className}`}/>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default Work;
