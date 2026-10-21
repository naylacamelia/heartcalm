/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";

const items = [
  "Melembapkan secara maksimal",
  "Menenangkan kulit berjerawat",
  "Merawat kemerahan dan iritasi",
];

export default function Manfaat() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="manfaat" className="nova-section relative overflow-hidden border-t border-[#e4e7e2] bg-[#ffffff]">
      <div className="nova-container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Image in Aurae Curved Frame */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e4e7e2] bg-white shadow-[0_20px_50px_-20px_rgba(22,24,22,0.06)]">
              <div className="aspect-[4/5] relative">
                <img
                  src={`${base}/asset/background/bg-manfaat.svg`}
                  alt="Kulit tenang dengan HEARTCALM"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="aurae-eyebrow">
              Manfaat Utama
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161816] leading-tight">
              Kenapa kulitmu <br />
              <span className="font-editorial text-[#0082de]">akan menyukainya?</span>
            </h2>

            <p className="mt-4 max-w-md text-sm sm:text-base text-[#757677] leading-relaxed">
              Formula ringan yang bekerja lembut untuk menenangkan, melembapkan, dan menjaga kesehatan barrier kulitmu.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {items.map((t, idx) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="group flex items-center gap-4 rounded-2xl border border-[#e4e7e2] bg-[#f7f7f7] px-5 py-4 transition-all hover:border-[#0082de]/40 hover:bg-white hover:shadow-sm"
                >
                  <div className="h-8 w-8 rounded-full bg-[#0082de]/10 flex items-center justify-center text-[#0082de] shrink-0">
                    <BsCheckCircleFill size={15} />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[#161816]">{t}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}