import React from 'react'

function Contact() {
  return (
    <div className='p-4'>
      <div className="text-4xl font-bold text-center">Contact</div>
      {/* <div className='max-sm:text-2xl max-sm:text-center sm:text-right sm:text-4xl lg:text-6xl font-medium mt-8'>dalal.jyotika05@gmail.com</div> */}
      <div className="flex items-center justify-center min-h-screen">
        <form className="bg-transparent rounded-lg w-full max-w-lg">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border-b-2 border-black outline-none bg-transparent"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border-b-2 border-black outline-none bg-transparent"
                placeholder="youremail@gmail.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-b-2 border-black outline-none bg-transparent"
              placeholder="write subject of your message"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full mt-1 px-3 py-2 border-b-2 border-black outline-none bg-transparent"
              placeholder="message please!"
              rows="4"
            ></textarea>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-violet-400 font-semibold rounded-full w-1/2 hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact