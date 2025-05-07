import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ProcessStepProps {
  title: string;
  description: string;
  icon: IconDefinition;
  buttonText: string;
  buttonLink: string;
  isReversed?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  icon,
  buttonText,
  buttonLink,
  isReversed = false
}) => {
  return (
    <div className="relative z-10 mb-12 md:mb-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side */}
        <div className={`flex-1 md:pr-10 text-center md:text-right ${isReversed ? 'order-1 md:order-1 hidden md:block' : ''}`}>
          {!isReversed && (
            <>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-2">{description}</p>
              <div className="mt-4 md:hidden">
                <Link to={buttonLink} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  {buttonText}
                </Link>
              </div>
            </>
          )}
          {isReversed && (
            <Link to={buttonLink} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              {buttonText}
            </Link>
          )}
        </div>

        {/* Center icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white md:mx-4 my-4 md:my-0 order-2 md:order-2">
          <FontAwesomeIcon icon={icon} />
        </div>

        {/* Right side */}
        <div className={`flex-1 md:pl-10 text-center md:text-left ${isReversed ? 'order-3 md:order-3' : 'hidden md:block'}`}>
          {isReversed && (
            <>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-2">{description}</p>
              <div className="mt-4 md:hidden">
                <Link to={buttonLink} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  {buttonText}
                </Link>
              </div>
            </>
          )}
          {!isReversed && (
            <Link to={buttonLink} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessStep; 