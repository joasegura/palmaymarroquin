"use client";

import React, { useEffect, useMemo, useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
  features?: string[];
  // Optional: a rendered icon element or any JSX
  icon?: React.ReactNode;
};

interface ServiceCardsCarouselProps {
  services: ServiceItem[];
  intervalMs?: number;
}

/**
 * ServiceCardsCarousel
 * - Auto-rotates through service cards
 * - Centers the active card, with prev/next cards flanking it
 * - Click any card to activate it
 * - Responsive sizing similar to the provided PhotoCarousel example
 */
export default function ServiceCardsCarousel({
  services,
  intervalMs = 5000,
}: ServiceCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const baseCdn = "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin";
  const bgImages = [
    `${baseCdn}/card1.jpg`,
    `${baseCdn}/card2.jpg`,
    `${baseCdn}/card3.jpg`,
  ];

  useEffect(() => {
    if (services.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [services.length, intervalMs]);

  const ordered = useMemo(() => services, [services]);

  return (
    <div className="h-full flex items-center justify-center snap-start relative w-full">
      <div className="inset-0 flex items-center justify-center w-full mt-44 md:mt-64">
        <div className="relative flex items-center justify-center w-full px-4">
          {ordered.map((service, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + ordered.length) % ordered.length;
            const isNext = index === (currentIndex + 1) % ordered.length;
            const isLightCard = index % 3 !== 0; // card 2 and 3 => white text
            const titleColorClass = isLightCard
              ? "text-white  font-semibold"
              : "text-black font-semibold";
            const descColorClass = isLightCard
              ? "bg-white/70"
              : "text-gray-800";
            const bulletColorClass = isLightCard
              ? "bg-white"
              : "bg-brand-green-primary";

            let className =
              "absolute transition-all duration-500 ease-in-out ";

            if (isActive) {
              className +=
                "w-full max-w-xs sm:max-w-sm md:max-w-md z-20 opacity-100 transform translate-x-0 h-auto";
            } else if (isPrev) {
              className +=
                "w-10/12 max-w-xs sm:max-w-sm md:max-w-xs z-10 opacity-90 transform md:-translate-x-2/2 -translate-x-0 h-auto";
            } else if (isNext) {
              className +=
                "w-10/12 max-w-xs sm:max-w-sm md:max-w-xs z-10 opacity-90 transform md:translate-x-2/2 translate-x-0 h-auto";
            } else {
              className +=
                "w-9/12 max-w-xs sm:max-w-sm md:max-w-md z-0 opacity-30 transform scale-75 h-auto";
            }

            return (
              <div
                key={`${service.title}-${index}`}
                className={`${className} cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              >
                <div
                  className="w-full rounded-lg shadow-lg border flex flex-col overflow-hidden bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${
                      bgImages[index % bgImages.length]
                    })`,
                  }}
                >
                  <div className={`w-full bg-white/70`}>
                    <div className="p-4 sm:p-6 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-green-primary/10 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-4 sm:px-6 pt-4 pb-5 flex-1 flex flex-col">
                      <h3
                        className={`font-serif text-2xl sm:text-xl mb-2 text-center font-bold`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`font-sans font-semibold text-sm sm:text-base text-center mb-3`}
                      >
                        {service.description}
                      </p>
                      {isActive &&
                      service.features &&
                      service.features.length > 0 ? (
                        <ul
                          className={`mt-1 space-y-auto md:space-y-4 text-sm`}
                        >
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span
                                className={`mt-1 inline-block h-2 w-2 rounded-full bg-green-300`}
                              />
                              <span className="font-semibold">{f}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}