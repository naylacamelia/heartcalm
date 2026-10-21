'use client';

import { useEffect, useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    setShowModal(true);
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <input
            type="email"
            suppressHydrationWarning
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(false);
            }}
            placeholder="email_anda@mail.com"
            aria-invalid={error}
            required
            className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-xs text-[#161816] placeholder:text-[#757677] focus:outline-none focus:ring-2 ${
              error ? 'border-red-400 focus:ring-red-400' : 'border-white/20 focus:ring-white'
            }`}
          />
          {error && (
            <p className="mt-1 text-[11px] text-white font-medium bg-red-600/90 px-2.5 py-1 rounded shadow-sm">
              Format email tidak valid (contoh: nama@email.com)
            </p>
          )}
        </div>
        <button
          type="submit"
          suppressHydrationWarning
          className="rounded-lg bg-white text-[#0082de] px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-colors shrink-0 cursor-pointer"
        >
          Subscribe
        </button>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-[#e4e7e2] text-left text-[#161816] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e4e7e2] pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#161816]">
                Berhasil Berlangganan
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-2xl leading-none text-[#757677] hover:text-[#161816] cursor-pointer"
              >
                &times;
              </button>
            </div>

            <p className="text-sm text-[#161816] leading-relaxed mb-3">
              Terima kasih telah mendaftarkan email Anda untuk menerima informasi dan penawaran terbaru dari HEARTCALM.
            </p>

        

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="nova-btn-primary !py-2 !px-6 !text-xs font-bold uppercase tracking-wider"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}