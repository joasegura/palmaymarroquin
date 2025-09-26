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
      <div className="inset-0 flex items-center justify-center w-full mt-64">
        <div className="relative flex items-center justify-center w-full px-4">
          {ordered.map((service, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + ordered.length) % ordered.length;
            const isNext = index === (currentIndex + 1) % ordered.length;

            let className = "absolute transition-all duration-500 ease-in-out ";

            if (isActive) {
              className +=
                "w-11/12 max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] z-20 opacity-100 transform translate-x-0";
            } else if (isPrev) {
              className +=
                "w-10/12 max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] z-10 opacity-70 transform -translate-x-2/3";
            } else if (isNext) {
              className +=
                "w-10/12 max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] z-10 opacity-70 transform translate-x-2/3";
            } else {
              className +=
                "w-9/12 max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] z-0 opacity-30 transform scale-75";
            }

            return (
              <div
                key={`${service.title}-${index}`}
                className={`${className} cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="w-full h-full bg-white backdrop-blur-sm rounded-lg shadow-lg border border-brand-green-primary/20 flex flex-col overflow-hidden">
                  {/* Icon / Header */}
                  <div className="p-4 sm:p-6 flex items-center justify-center bg-brand-green-primary/5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-green-primary/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 sm:px-6 pt-4 pb-5 flex-1 flex flex-col">
                    <h3 className="font-serif text-lg sm:text-xl text-brand-green-dark mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-muted-foreground text-center mb-3">
                      {service.description}
                    </p>
                    {isActive &&
                    service.features &&
                    service.features.length > 0 ? (
                      <ul className="mt-1 space-y-2 text-sm text-muted-foreground">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-green-primary" />
                            <span className="font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
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
