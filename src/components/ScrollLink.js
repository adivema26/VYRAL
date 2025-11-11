// src/components/ScrollLink.js

import React from 'react';

const ScrollLink = ({ href, children }) => {
  const handleClick = (e) => {
    // 1. Prevent the default browser jump and router interference
    e.preventDefault();

    // 2. Get the element's ID from the href
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    // 3. If the element exists, scroll to it smoothly
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;