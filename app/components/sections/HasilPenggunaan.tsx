'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

const results = [
  { value: '92%', label: 'Jerawat tampak berkurang' },
  { value: '95%', label: 'Kemerahan berkurang' },
  { value: '92%', label: 'Kadar kelembabapan lebih tinggi' },
];

export default function HasilPenggunaan() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="hasil-penggunaan" className="nova-section bg-[#f7f7f7] border-t border-[#e4e7e2]">
      <div className="nova-container">
        
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Stats & Notes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="aurae-eyebrow">
              Hasil Penggunaan
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#161816] leading-snug">
              Berdasarkan hasil self-assessment dari 30 responden usia 18 - 30 tahun setelah <span className="font-editorial text-[#0082de]">1 minggu pemakaian.*</span>
            </h3>

            <p className="mt-3 text-xs italic text-[#757677]">
              *fitur ini hanya simulasi untuk keperluan tugas dan tidak mewakili asesmen kulit yang sebenarnya
            </p>

            {/* 3 Metric Cards with Aurae Refined Borders */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {results.map((r, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[1.5rem] bg-white border border-[#e4e7e2] shadow-sm flex flex-col justify-between transition-all hover:border-[#0082de]/40"
                >
                  <div className="text-4xl font-normal text-[#0082de] tracking-tight font-editorial">
                    {r.value}
                  </div>
                  <div className="mt-3 text-xs sm:text-sm font-medium text-[#161816]">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Visual in Aurae Curved Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              <img
                src={`${base}/asset/background/bg-hasil-penggunaan-2.svg`}
                alt="HEARTCALM Hasil Penggunaan"
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}