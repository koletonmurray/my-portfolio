import React from 'react';
import { Link } from 'react-router-dom';

const Hyperlink = ({ href, IconComponent, children, externalLink = false, color = 'darkBlue' }) => {
  const baseClass = 'pb-2 underline underline-offset-4';
  const hoverColorClass = `text-${color} hover:text-midBlue transition`;
  const getClassName = `${baseClass} ${hoverColorClass} line`;

  const LinkComponent = externalLink ? (
    // External Link
    <a href={href} target='_blank' rel="noopener noreferrer" className={getClassName}>
      {IconComponent && <IconComponent className='translate-x-[-25%] translate-y-[-7.5%]' />}
      {children}
    </a>
  ) : (
    // Internal Link
    <a href={href} className={getClassName}>
      {IconComponent && <IconComponent className='translate-x-[-25%] translate-y-[-7.5%]' />}
      {children}
    </a>
  );

  return LinkComponent;
};

export default Hyperlink;
