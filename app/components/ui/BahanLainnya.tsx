// BahanLainnya.tsx
"use client";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function BahanLainnya({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#e4e7e2] bg-white">
      <button
        type="button"
        suppressHydrationWarning
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-[#0082de] px-5 py-4 text-left text-white hover:bg-[#006bb8] transition-colors cursor-pointer"
      >
        Bahan-bahan lain
        <BsChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="p-5 text-xs sm:text-sm text-[#757677] leading-relaxed break-words">
          {text}
        </p>
      )}
    </div>
  );
}