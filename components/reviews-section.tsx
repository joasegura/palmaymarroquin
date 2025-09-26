"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/translation-context";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export function ReviewsSection() {
  const { t } = useTranslation();
  const items = t.reviews.items;

  const [slidesPerView, setSlidesPerView] = useState(1);
  const pausedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Continuous auto-scroll using scrollLeft
  useEffect(() => {
    let rafId: number;
    const step = () => {
      if (!pausedRef.current && trackRef.current) {
        const el = trackRef.current;
        const half = el.scrollWidth / 2;
        el.scrollLeft += 0.6; // speed in px per frame
        if (el.scrollLeft >= half) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="reseñas" className="relative py-16 sm:py-24 pattern-lines">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-beige-secondary/70 via-white/90 to-white/90" />
        <div className="absolute inset-0 pattern-lines opacity-20 pointer-events-none" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-4">
            {t.reviews.title}
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            {t.reviews.subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full mx-auto" ref={containerRef}>
          {/* Controls */}
          {/* <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              aria-label="Anterior"
              onClick={() => {
                if (trackRef.current) {
                  const card = trackRef.current.querySelector<HTMLDivElement>("[data-card]");
                  const cardWidth = card ? card.clientWidth + 24 : 300; // 24 ~ gap
                  trackRef.current.scrollLeft -= cardWidth;
                }
              }}
              className="p-2 rounded-full bg-white/80 hover:bg-brand-green-primary text-brand-green-primary hover:text-white border border-brand-green-primary/20 hover:border-brand-green-primary shadow-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              aria-label="Siguiente"
              onClick={() => {
                if (trackRef.current) {
                  const card = trackRef.current.querySelector<HTMLDivElement>("[data-card]");
                  const cardWidth = card ? card.clientWidth + 24 : 300;
                  trackRef.current.scrollLeft += cardWidth;
                }
              }}
              className="p-2 rounded-full bg-white/80 hover:bg-brand-green-primary text-brand-green-primary hover:text-white border border-brand-green-primary/20 hover:border-brand-green-primary shadow-md transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div> */}

          {/* Continuous track */}
          <div className="overflow-hidden py-2">
            <div
              ref={trackRef}
              className="flex gap-6 overflow-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              {[...items, ...items].map((review, idx) => (
                <div
                  key={`${review.name}-${idx}`}
                  data-card
                  className="basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                >
                  <Card className="h-full rounded-2xl border border-brand-green-primary/20 bg-white/90 backdrop-blur-sm shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="font-semibold text-brand-green-dark">
                            {review.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {review.location}
                          </div>
                        </div>
                        <div className="p-2 rounded-lg bg-brand-green-primary/10 text-brand-green-primary">
                          <Quote className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <motion.span
                            key={i}
                            initial={{
                              color: "rgba(0,0,0,0.25)",
                              opacity: 0.6,
                              scale: 0.9,
                            }}
                            whileInView={{
                              color: "var(--brand-yellow-accent)",
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.12 + i * 0.12,
                              duration: 0.35,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <Star
                              className="w-4 h-4"
                              style={{ fill: "currentColor" }}
                            />
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-muted-foreground font-medium leading-relaxed">
                        {review.comment}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots (static indicator of total) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, idx) => (
              <span
                key={idx}
                className="h-2 w-2 rounded-full bg-brand-green-primary/40"
              />
            ))}
          </div>

          {/* <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.open("https://wa.me/3772430983?text=Quiero%20dejar%20mi%20reseña", "_blank")}
              className="px-5 py-2.5 rounded-xl bg-brand-green-primary text-white hover:bg-brand-green-dark transition-colors shadow-md"
            >
              Dejá tu reseña
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
