import React from 'react';
import { FaWhatsapp,  } from 'react-icons/fa';

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <a href="https://wa.me/message/PNFMEUWPJCTNA1" target="_blank" rel="noopener noreferrer" className="mr-4 ">
        <FaWhatsapp className="bg-green-500 text-white rounded-lg  text-6xl" />
      </a>
      {/* <a href="https://www.facebook.com/YOUR_FACEBOOK_PAGE" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-500 text-6xl" />
      </a> */}
    </div>
  );
};

export default FloatingIcons;
