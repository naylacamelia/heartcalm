'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import FlipCard from '../animations/reactbits/FlipCard/FlipCard';
import BahanLainnya from '../ui/BahanLainnya';
import { BsArrowRepeat } from 'react-icons/bs';

const heroIngredientsList = [
  {
    name: "5% Panthenol",
    tag: "hero ingredients",
    desc: ["Menenangkan kulit berjerawat", "Merawat kulit kemerahan dan sensitif"],
  },
  {
    name: "5X Ceramide",
    tag: "hero ingredients",
    desc: ["Merawat skin barrier"],
  },
  {
    name: "Compound Ection",
    tag: "hero ingredients",
    desc: ["Merawat dan menghidrasi kulit"],
  },
  {
    name: "Pure Centella",
    tag: "hero ingredients",
    desc: ["Meredakan dan menenangkan jerawat meradang serta meningkatkan hidrasi pada kulit"],
  },
];

const BAHAN_LAIN =
  "Water, Panthenol, Centella Asiatica Extract, Calendula Officinalis Extract, Avena Sativa (Oat) Kernel Extract, Phaeodactylum Tricornutum Extract, Chlorella Vulgaris Extract, Pentylene Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ceramide NP, Ceramide AS, Ceramide NS, Ceramide NG, Ceramide AP, Ceramide EOP, Butylene Glycol, Glycerophosphoinositol Choline, Glycerin, Ectoin, Tocopherol, Pentasodium Pentetate, Erythritol, Propanediol, Phytic Acid, Silver Oxide, Diethoxyethyl Succinate";

export default function Bahan() {
  return (
    <section id="bahan" className="nova-section bg-[#ffffff] border-t border-[#e4e7e2]">
      <div className="nova-container">
        
        {/* Header with Aurae Refined Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="aurae-eyebrow justify-center">
            barrier repairwater gel
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#161816]">
            Bahan apa yang ada di dalam <span className="font-editorial text-[#0082de]">moisturizer ini?</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#757677] tracking-wide">
            <span className="underline decoration-[#0082de]/40 underline-offset-4">Ketuk kartu</span> untuk membalik dan melihat detail bahan.
          </p>
        </motion.div>

        {/* 4 FlipCards: Cover = Nama Bahan, Back = Penjelasan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {heroIngredientsList.map((item) => (
            <div key={item.name} className="w-full max-w-[280px]">
              <FlipCard
                axis="y"
                flipOnClick
                draggable
                tilt
                tiltMax={10}
                glare
                glareOpacity={0.16}
                hoverScale={1.03}
                perspective={1200}
                stiffness={200}
                damping={22}
                width={280}
                height={360}
                radius={22}
                background="#ffffff"
                color="#161816"
                shadow
                shadowColor="#161816"
                shadowOpacity={0.06}
                ariaLabel={`Bahan ${item.name}, klik untuk melihat penjelasan`}
                front={
                  <div className="relative h-full w-full flex flex-col justify-between overflow-hidden rounded-[22px] border border-[#e4e7e2] bg-[#ffffff] p-6 shadow-sm group cursor-pointer transition-all hover:border-[#0082de]/40 hover:shadow-md">
                    {/* Background texture */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                      <img
                        src="/asset/background/bg-bahan.svg"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Tag */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-block rounded-full bg-[#f7f7f7] border border-[#e4e7e2] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0082de]">
                        {item.tag}
                      </span>
                    </div>

                    {/* Center Name: NAMA BAHAN */}
                    <div className="relative z-10 my-auto text-center py-4">
                      <h3 className="text-2xl font-bold text-[#161816] tracking-tight group-hover:text-[#0082de] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    {/* Implicit Interaction Cue */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f7f7f7] group-hover:bg-[#0082de] group-hover:text-white px-3.5 py-1.5 text-[11px] font-medium text-[#757677] transition-all shadow-sm">
                        <BsArrowRepeat className="animate-spin-slow group-hover:rotate-180 transition-transform" />
                        Klik untuk detail
                      </span>
                    </div>
                  </div>
                }
                back={
                  <div className="relative h-full w-full flex flex-col justify-between rounded-[22px] border border-[#0082de]/40 bg-[#ffffff] p-6 shadow-md cursor-pointer">
                    <div className="border-b border-[#f3f4f2] pb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0082de]">
                        Penjelasan Bahan
                      </span>
                      <h4 className="text-xl font-bold text-[#161816] tracking-tight mt-1">
                        {item.name}
                      </h4>
                    </div>

                    {/* Back: DIBALIKNYA PENJELASAN */}
                    <div className="my-auto py-2">
                      <div className="text-xs sm:text-sm text-[#161816] leading-relaxed">
                        {item.desc.map((d, i) => (
                          <p key={i} className="mb-2 flex items-start gap-2">
                            <span className="text-[#0082de] font-bold">•</span>
                            <span>{d}</span>
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[#f3f4f2] pt-3 text-center">
                      <span className="text-[11px] text-[#757677] flex items-center justify-center gap-1">
                        <BsArrowRepeat /> Ketuk kembali untuk menutup
                      </span>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        {/* Accordion Bahan-bahan lain */}
        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto w-full">
          <BahanLainnya text={BAHAN_LAIN} />
        </div>

      </div>
    </section>
  );
}