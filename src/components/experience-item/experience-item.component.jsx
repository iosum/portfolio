import React from 'react';

import './experience-item.styles.scss';

const ExperienceItem = ({ name, company, title, city, province, country, dateFrom, dateTo, responsibility, tech }) => {


  return (
    <div className='flex pt-6 experience'>
      <div className='m-auto shadow-xl'>
        <div className='max-w-xl rounded overflow-hidden shadow-lg'>
          <img src={require('../../images/jtable.png')} alt="" className='w-full' />
        </div>
        <div className='font-bold text-blue-800 text-xl text-center mt-3'>
          {name}
        </div>
        <div className="text-blue-800 font-semibold text-md text-center mt-3">
          {company}
        </div>
        <div className="text-black text-lg text-center mt-3 font-semibold">
          {title}
        </div>
        <div className="text-black text-sm text-center mt-3 places">
          <span>{city}, {province}, {country} </span>
          <br />
          <span>{dateFrom} - {dateTo}</span>
        </div>
        <hr />
        <div className="text-black text-sm text-center mt-3 hover-content">
          <ul>
            {
              responsibility.map(r =>
                (<li key={r.id} className='hover-list'>- {r.responsibilityList}</li>)
              )
            }
          </ul>
        </div>

        <div className="px-6 py-4">
          {
            tech.map(t => (
              <span
                key={t.id}
                className='inline-block bg-gray-200 hover:bg-gray-400 
                  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #{t.language}
              </span>
            ))
          }

        </div>
      </div>

    </div>
  );
};

export default ExperienceItem;