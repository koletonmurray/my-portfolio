import React from 'react';

const colorClasses = {
  darkGray: 'text-darkGray',
  mediumGray: 'text-mediumGray',
  lightGray: 'text-lightGray',
  black: 'text-black',
  yellow: 'text-yellow',
  lightYellow: 'text-lightYellow',
  lightBlue: 'text-lightBlue',
  darkBlue: 'text-darkBlue',
  midBlue: 'text-midBlue'
};

export default function Logo ({styling, color, size, weight}) {

    const textColorClass = color ? colorClasses[color] : '';
    const textSizeClass = size ? `text-${size}` : '';
    const textWeightClass = weight ? `font-${weight}` : '';

    return (
        <span className={`${styling} ${textColorClass} ${textSizeClass} ${textWeightClass}`}>
            <span className="logoMain">Koleton Murray</span>
        </span>
    );
};