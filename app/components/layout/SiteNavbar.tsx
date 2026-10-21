'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/app/data/data';
import { HiMenu, HiX } from 'react-icons/hi';

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('bahan');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navLinks
        .map(link => {
          const el = document.getElementById(link.id);
          if (!el) return null;
          return { id: link.id, top: el.offsetTop - 120, height: el.offsetHeight };
        })
        .filter(Boolean) as { id: string; top: number; height: number }[];

      const currentPosition = window.scrollY;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const sec = sectionElements[i];
        if (currentPosition >= sec.top - 60) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const base = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === "production" ? "/heartcalm" : "");

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#ffffff]/90 backdrop-blur-md border-b border-[#e4e7e2] shadow-[0_4px_20px_-4px_rgba(22,24,22,0.04)]'
          : 'bg-[#f7f7f7]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="nova-container flex h-16 sm:h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src={`${base}/asset/logo-heartcalm-2.png`}
            alt="HEARTCALM"
            width={140}
            height={36}
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation in Aurae Minimal Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#ffffff] border border-[#e4e7e2] p-1.5 rounded-full shadow-[0_1px_2px_rgba(22,24,22,0.03)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 tracking-wide ${
                  isActive
                    ? 'bg-[#0082de] text-white shadow-sm'
                    : 'text-[#757677] hover:text-[#161816] hover:bg-[#f7f7f7]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://shopee.co.id/HEARTCALM_id"
            target="_blank"
            rel="noopener noreferrer"
            className="nova-btn-primary !py-2.5 !px-5 !text-xs uppercase tracking-wider"
          >
            Beli Sekarang
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-[#e4e7e2] bg-[#ffffff] text-[#161816]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-[#e4e7e2] px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#0082de]/10 text-[#0082de] font-semibold'
                    : 'text-[#757677] hover:text-[#161816] hover:bg-[#f7f7f7]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#e4e7e2]">
              <a
                href="https://shopee.co.id/HEARTCALM_id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="nova-btn-primary w-full text-center !py-2.5 !text-xs uppercase tracking-wider"
              >
                Beli Sekarang (Shopee)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
