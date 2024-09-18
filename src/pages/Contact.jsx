import React from "react";

function Contact() {
  return (
    <>
      <div className=" p-8">
        <div className="title text-xl font-pop font-semibold">Contact</div>
        <h1 className="text-right text-6xl">hello.jyotikadalal.com</h1>

        <div className="flex justify-center items-center mt-16">
          <form className="w-1/2 bg-red-300 relative">
            <div className="flex justify-between items-center flex-row gap-14">
              <div className="flex flex-col w-1/2">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="name" placeholder="" className="border-b-2 border-black outline-none bg-transparent" required/>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="name" placeholder="" className="border-b-2 border-black outline-none bg-transparent" required/>
              </div>
            </div>
            <div>
              <div className="flex flex-col my-4">
                <label htmlFor="">Subject</label>
                <input type="text" name="" id="" className="border-b-2 border-black outline-none bg-transparent" required/>
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="">Message</label>
                <textarea name="message" id="message" className="border-b-2 border-black outline-none bg-transparent" required></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
