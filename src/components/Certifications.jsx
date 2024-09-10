import React from 'react';

function Certifications() {
    const educationalData = [
        {
          month: '2018 - 2020',
          certificateName: 'HackerRank CSS SKills Test',
          org: 'HackerRank',
        },
        {
          month: '2020 - 2024',
          certificateName: 'Mongo DB for SQL Experts',
          org: 'MongoDB University',
        },
        {
            month: '2012 - 2018',
            certificateName: 'JavaScript - For Begginers',
            org: 'Udemy',
          },
      ];

  return (
    <>
    <div className='my-8'>
        <div className='flex justify-center items-center gap-2'>
            <h4 className='text-xl font-medium'>Certifications</h4>
            <div className='w-full border-t-2 border-dotted border-gray-400 my-4'></div>
        </div>
        {/* dotted line */}
        <span className='text-base font-cvt text-violet-500 absolute right-1 top-4'>the journey where it all started</span>

        <div className="mt-6 font-pop">
        {educationalData.map((data, index) => (
            <div key={index} className="flex justify-between mb-2">
            <h6 className="text-gray-700 text-sm">{data.month}</h6>
            <div className="flex flex-col">
                <p className="font-semibold text-sm">{data.certificateName}</p>
                <p className="text-gray-500 text-right text-xs">{data.org}</p>
            </div>
            </div>
        ))}
        </div>

    </div>
    </>
  );
}

export default Certifications;
