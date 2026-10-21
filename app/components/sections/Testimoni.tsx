'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { BsStarFill } from 'react-icons/bs';
import ReflectiveCard from '../animations/reactbits/ReflectiveCard/ReflectiveCard';

const testimonials = [
  {
    name: 'Nadya',
    role: 'Verified Buyer',
    status: 'Verified',
    idValue: 'HC-9201 4582',
    img: '/asset/profile-user/nadya.svg',
    text: 'Teksturnya ringan dan cepat menyerap. Setelah sekitar seminggu pemakaian, kulit terasa lebih lembap dan kelihatan lebih tenang.',
  },
  {
    name: 'Mia',
    role: 'Verified Buyer',
    status: 'Verified',
    idValue: 'HC-8147 9263',
    img: '/asset/profile-user/mia.svg',
    text: 'Biasanya pakai moisturizer takut lengket, tapi yang ini nyaman banget. Kemerahan di area pipi juga tampak berkurang.',
  },
  {
    name: 'Alya',
    role: 'Verified Buyer',
    status: 'Verified',
    idValue: 'HC-7628 3451',
    img: '/asset/profile-user/alya.svg',
    text: 'Cocok untuk kulitku yang mudah berjerawat. Setelah rutin dipakai, kulit terasa lebih lembap dan jerawat aktif terlihat lebih kalem.',
  },
  {
    name: 'Luna',
    role: 'Verified Buyer',
    status: 'Verified',
    idValue: 'HC-6519 8742',
    img: '/asset/profile-user/luna.svg',
    text: 'Tekstur gel-nya ringan tapi ampuh menenangkan kulit sensitifku, membuat wajahku tampak sehat tanpa rasa lengket sama sekali.',
  },
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="nova-section bg-[#ffffff] border-t border-[#e4e7e2]">
      <div className="nova-container">
        
        {/* Header with Aurae Refined Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="aurae-eyebrow justify-center">
            Testimoni Pengguna
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161816]">
            Apa <span className="font-editorial text-[#0082de]">kata mereka?</span>
          </h2>
        </motion.div>

        {/* 4 ReflectiveCards from React Bits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {testimonials.map((t) => (
            <div key={t.name} className="w-full max-w-[280px] flex justify-center">
              <ReflectiveCard
                name={t.name}
                role={t.role}
                status={t.status}
                idValue={t.idValue}
                theme="light"
                width={270}
                height={390}
                radius={22}
              >
                <div className="flex h-full flex-col justify-between text-left p-1">
                  <div>
                    {/* User Profile Avatar & Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden border border-[#e4e7e2] bg-[#f7f7f7] shrink-0">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#161816]">
                          {t.name}
                        </h4>
                        <span className="text-[11px] text-[#0082de] font-medium">
                          {t.role}
                        </span>
                      </div>
                    </div>

                    {/* 5 Stars matching heparia */}
                    <div className="flex items-center gap-1 text-[#0082de] mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <BsStarFill key={i} size={13} />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-[#161816] leading-relaxed font-light">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                </div>
              </ReflectiveCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}