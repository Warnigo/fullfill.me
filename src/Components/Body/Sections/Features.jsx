import React from 'react';
import illustration1 from '../../../Images/illustration1c.png';
import illustration2 from '../../../Images/illustration2b.png';
import illustration3 from '../../../Images/illustration3b.png';
import { BiTrophy } from 'react-icons/bi';
import { FiPackage, FiCamera } from 'react-icons/fi';

export default function Features(props) {
  return (
    <div className="relative bg-white sm:pb-8 pt-16 lg:pb-8">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-violet-500 uppercase">{props.title}</h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
          {props.header}
        </p>
        <p className="mt-5 mx-auto text-xl text-gray-500">
          {props.description}
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {props.features.map((feature, index) => (
              <div key={feature.name} className="pt-6 flex flex-col h-full">
                <div className="flex-grow bg-gray-50 rounded-lg px-6 pb-8 flex flex-col justify-between">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-violet-500 rounded-md shadow-lg">
                        {index === 0 && <BiTrophy className="h-6 w-6 text-white" aria-hidden="true" />}
                        {index === 1 && <FiPackage className="h-6 w-6 text-white" aria-hidden="true" />}
                        {index === 2 && <FiCamera className="h-6 w-6 text-white" aria-hidden="true" />}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name || 'No name provided'}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.header || 'No header provided'}
                    </p>
                  </div>
                  <div className="mt-5">
                    <img
                      src={index === 0 ? illustration1 : index === 1 ? illustration2 : illustration3}
                      alt="Feature illustration"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-sm text-gray-500">
                      {feature.description || 'No description provided'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
