'use client';

/* eslint-disable @next/next/no-img-element */
import {
  BsBagFill,
  BsChatLeftDotsFill,
  BsEnvelopeAtFill,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from 'react-icons/bs';
import NewsletterForm from '../ui/NewsletterForm';

const socials = [
  { icon: BsTiktok, href: '#', label: 'TikTok' },
  { icon: BsInstagram, href: '#', label: 'Instagram' },
  { icon: BsFacebook, href: '#', label: 'Facebook' },
  { icon: BsYoutube, href: '#', label: 'YouTube' },
  { icon: BsTwitterX, href: '#', label: 'Twitter-X' },
];

export default function Footer() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="border-t border-[#e4e7e2] bg-[#0082de] text-white">
      <div className="nova-container py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Brand Logo */}
          <div className="lg:col-span-3 flex justify-center sm:justify-start">
            <img
              src={`${base}/asset/logo-heartcalm-2.png`}
              alt="HEARTCALM"
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
            />
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Kontak */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h5 className="font-bold text-sm tracking-wider uppercase mb-3 text-white">
              Kontak
            </h5>
            <ul className="space-y-2 text-xs text-white/90">
              <li>
                <a
                  href="http://wa.me/62000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline transition-all"
                >
                  <BsChatLeftDotsFill />
                  <span>000000000000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cs@HEARTCALM.com"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline transition-all"
                >
                  <BsEnvelopeAtFill />
                  <span>cs@HEARTCALM.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Shop Link */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <h5 className="font-bold text-sm tracking-wider uppercase mb-3 text-white">
              Official Shop Link
            </h5>
            <ul className="space-y-2 text-xs text-white/90">
              <li>
                <a
                  href="https://shopee.co.id/HEARTCALM_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline transition-all"
                >
                  <BsBagFill />
                  <span>Shopee Indonesia</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@HEARTCALM_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline transition-all"
                >
                  <BsTiktok />
                  <span>Tiktok Shop Indonesia</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 text-center sm:text-left">
            <h5 className="font-bold text-sm tracking-wider uppercase mb-3 text-white">
              Newsletter
            </h5>
            <NewsletterForm />
          </div>

        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="bg-[#0072c4] border-t border-white/10 py-5">
        <div className="nova-container flex flex-col items-center justify-between gap-3 text-xs text-white/90 sm:flex-row">
          <div className="flex items-center gap-4 text-lg">
            {socials.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  <IconComp size={16} />
                </a>
              );
            })}
          </div>
          <p className="m-0 text-center text-xs">
            &copy; 2025 HEARTCALM Indonesia. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}