import React from 'react'

const Contact = () => {
  return (
    <section className='p-8'>
      <div className="text-5xl font-bold text-center font-mate">Contact</div>
      {/* <div className='max-sm:text-2xl max-sm:text-center sm:text-right sm:text-4xl lg:text-6xl font-medium mt-8'>dalal.jyotika05@gmail.com</div> */}
      <div className="flex items-center justify-center min-h-screen">
        <form className="bg-transparent rounded-lg w-full max-w-3xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 font-pop font-semibold">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border-b-2 border-black outline-none bg-transparent"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border-b-2 border-black outline-none bg-transparent"
                placeholder=""
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-b-2 border-black outline-none bg-transparent"
              placeholder=""
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full mt-1 px-3 py-2 border-b-2 border-black outline-none bg-transparent"
              placeholder=""
              rows="4"
            ></textarea>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-violet-400 font-semibold rounded-full w-1/2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact