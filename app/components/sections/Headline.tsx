'use client';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Headline() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="headline" className="relative pt-8 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-24 overflow-hidden bg-[#f7f7f7]">
      <div className="nova-container relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Copy & Actions with Aurae Editorial Elegance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Aurae Eyebrow */}
            <div className="aurae-eyebrow text-[10px] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0082de]" />
              10% Panthenol Barrier Repair Water Gel Moisturizer
            </div>

            {/* Main Headline with Aurae Editorial Serif Accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161816] leading-[1.18]">
              Ringan di wajah, <br />
              <span className="font-editorial text-[#0082de]">lembap tanpa berminyak</span>
            </h1>

            {/* Supporting description */}
            <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base text-[#757677] leading-relaxed">
              Gel ringan dengan <em>cooling sensation</em>, membantu menenangkan jerawat dan mengontrol minyak
            </p>

            {/* Exact Logos & Icons from heparia in Aurae refined pills */}
            <div className="my-6 sm:my-7 flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="flex items-center gap-2 rounded-full bg-white border border-[#e4e7e2] px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-sm">
                <img
                  src={`${base}/asset/icon/icon-natural.svg`}
                  alt="natural-ingredients"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                />
                <span className="text-[11px] sm:text-xs font-medium text-[#161816]">Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white border border-[#e4e7e2] px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-sm">
                <img
                  src={`${base}/asset/icon/icon-original-heartcalm.svg`}
                  alt="original-heartcalm"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                />
                <span className="text-[11px] sm:text-xs font-medium text-[#161816]">100% Original</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white border border-[#e4e7e2] px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-sm">
                <img
                  src={`${base}/asset/icon/icon-semua-jenis-kulit.svg`}
                  alt="for-all-skin-types"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                />
                <span className="text-[11px] sm:text-xs font-medium text-[#161816]">Semua Jenis Kulit</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://shopee.co.id/HEARTCALM_id"
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-primary capitalize"
              >
                beli sekarang
              </a>
              <a
                href="http://wa.me/62000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="nova-btn-secondary capitalize"
              >
                konsultasi admin
              </a>
            </div>

          </motion.div>

          {/* Right Column: Product Image in Aurae Curved Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <Image
                src={`${base}/asset/product.svg`}
                alt="Barrier Repair Water Gel"
                width={420}
                height={420}
                priority
                className="relative z-10 h-auto w-full max-h-[360px] object-contain drop-shadow-[0_20px_35px_rgba(0,130,222,0.16)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
