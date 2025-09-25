"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble: React.FC = () => {
  const phoneNumber: string = "3772430980";

  const handleClick = (): void => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className={`fixed bottom-6 right-6 flex flex-col z-50 `}>
      <div className="relative">
        <div className="absolute top-0 left-0 w-14 h-14 rounded-full border border-white animate-ping"></div>
        <div
          className="w-14 h-14 bg-[#003300] rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:animate-pulse"
          onClick={handleClick}
        >
          <FaWhatsapp size={24} className="text-white relative" />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBubble;
