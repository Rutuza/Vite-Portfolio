import React from "react";

import waterfall from "../assets/images/waterfall.jpg";
import nikon from "../assets/images/nikon.jpg";
import cameras from "../assets/images/cam.jpg";
import butterfly from "../assets/images/butterfly.png";

import streetlight from "../assets/images/streetlight img.jpg";

function Photography() {
  const imageDetails = [
    {
      category: "Urban Landscape",
      location: "Gwalior",
      date: "January 21, 2023 (winter season)",
      device: "Realme 6i",
      subject:
        "A lone streetlight glowing against the evening sky, capturing the contrast between the artificial light and the natural darkness.",
      technique:
        "Captured with dimmed exposure in a dark background to enhance the photograph.",
      inspiration:
        "The contrast between the artificial light and the natural darkness caught my eyes.",
    },
  ];
  return (
    <>
      <div className="photoContainer p-20">
        <div className="title font-pop font-semibold text-2xl">Photography</div>
        <div className="mt-14 flex flex-row justify-between items-center ">
          <p className=" max-w-96 text-2xl">
            Photography is the art, application, and practice of creating
            durable images by recording light, either electronically by means of
            an image sensor, or chemically by means of a light-sensitive
            material such as photographic film.
          </p>
        </div>

        <section className="images mt-20">
          <div className="img1">
            <div className="text-3xl font-semibold font-pop">
              01. Illuminating the Dusk
            </div>

            <div className="mt-12 flex flex-row items-center gap-x-32">
              <img className=" w-5/12" src={streetlight} alt="" />
              <div className="list w-full">
                <ul>
                    {imageDetails.map((detail, index) => (
                    <li key={index}>
                    <p className="mb-6 text-xl"><strong>Category:</strong> {detail.category}</p>
                    <p className="mb-6 text-xl"><strong>Location:</strong> {detail.location}</p>
                    <p className="mb-6 text-xl"><strong>Date:</strong> {detail.date}</p>
                    <p className="mb-6 text-xl"><strong>Device:</strong> {detail.device}</p>
                    <p className="mb-6 text-xl"><strong>Subject:</strong> {detail.subject}</p>
                    <p className="mb-6 text-xl"><strong>Technique:</strong> {detail.technique}</p>
                    <p className="mb-6 text-xl"><strong>Inspiration:</strong> {detail.inspiration}</p>
                    </li>
      ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Photography;
