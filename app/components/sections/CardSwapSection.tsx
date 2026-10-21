'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CardSwapComp, { type CardSwapRef } from '../animations/reactbits/CardSwap/CardSwapComp';
import Card from '../animations/reactbits/CardSwap/CardSwapComp/Card';
import { slides } from '@/app/data/data';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function CardSwapSection() {
  const cardSwapRef = useRef<CardSwapRef>(null);
  const [dimensions, setDimensions] = useState({ width: 620, height: 380, cardDistance: 32, verticalDistance: 40 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setDimensions({
          width: Math.max(260, Math.min(360, w - 36)),
          height: w < 380 ? 290 : 320,
          cardDistance: 16,
          verticalDistance: 24,
        });
      } else if (w < 768) {
        setDimensions({
          width: Math.min(460, w - 64),
          height: 340,
          cardDistance: 24,
          verticalDistance: 32,
        });
      } else {
        setDimensions({
          width: 640,
          height: 380,
          cardDistance: 32,
          verticalDistance: 40,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section id="permasalahan" className="nova-section bg-[#f7f7f7] border-t border-[#e4e7e2] overflow-hidden">
      <div className="nova-container">
        
        {/* Header with Aurae Refined Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="aurae-eyebrow justify-center">
            Permasalahan Kulit
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#161816] leading-tight">
            Panggilan untuk <span className="font-editorial text-[#0082de]">pejuang acne-prone skin!</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#757677] leading-relaxed">
            Berbagai keluhan umum pada barrier kulit yang rusak dapat ditenangkan dan dirawat secara intensif dengan HEARTCALM.
          </p>
        </motion.div>

        {/* Dynamic CardSwap React Bits Component */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center min-h-[460px] md:min-h-[520px]"
          >
            <CardSwapComp
              ref={cardSwapRef}
              width={dimensions.width}
              height={dimensions.height}
              cardDistance={dimensions.cardDistance}
              verticalDistance={dimensions.verticalDistance}
              depth={70}
              skewAmount={3}
              visibleCards={5}
              delay={3800}
              autoplay
              pauseOnHover
              draggable
              speed={1.1}
              bounce={0.25}
              theme="light"
            >
              {slides.map((s) => (
                <Card key={s.id}>
                  <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-[#ffffff] border border-[#e4e7e2] shadow-sm">
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img
                        src={s.img}
                        alt={s.label ?? 'Permasalahan kulit'}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    {/* Soft gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161816]/75 via-[#161816]/20 to-transparent" />

                    {/* Card Content */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      {s.card ? (
                        <div className="flex flex-col items-center rounded-2xl bg-[#ffffff]/95 border border-[#e4e7e2] px-7 py-6 shadow-md backdrop-blur-md max-w-sm">
                          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#0082de]">
                            {s.card.kicker}
                          </p>
                          <h3 className={`${s.card.cls} text-xl sm:text-2xl font-normal tracking-tight text-[#161816]`}>
                            {s.card.lines.map((ln, k) => (
                              <span key={k}>
                                {ln}
                                {k < s.card.lines.length - 1 && <br />}
                              </span>
                            ))}
                          </h3>
                        </div>
                      ) : (
                        <div className="text-center">
                          <span className="inline-block px-3.5 py-1 rounded-full bg-[#0082de]/90 text-white text-[10px] font-semibold uppercase tracking-[0.18em] mb-2 shadow-sm">
                            Keluhan Kulit
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight drop-shadow-md">
                            {s.label}
                          </h3>
                          {s.desc && (
                            <p className="mt-2 text-xs sm:text-sm text-white/90 max-w-xs drop-shadow font-light">
                              {s.desc}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                  </div>
                </Card>
              ))}
            </CardSwapComp>
          </motion.div>
        )}

        {/* Carousel Slider Controls */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => cardSwapRef.current?.prev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e7e2] bg-white text-[#161816] shadow-sm hover:border-[#0082de] hover:text-[#0082de] transition-all active:scale-95 cursor-pointer"
            aria-label="Slide sebelumnya"
          >
            <BsChevronLeft size={16} />
          </button>
          <span className="text-[11px] font-semibold text-[#757677] tracking-wider uppercase px-2">
            Klik Panah / Geser Kartu
          </span>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => cardSwapRef.current?.next()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e7e2] bg-white text-[#161816] shadow-sm hover:border-[#0082de] hover:text-[#0082de] transition-all active:scale-95 cursor-pointer"
            aria-label="Slide berikutnya"
          >
            <BsChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
