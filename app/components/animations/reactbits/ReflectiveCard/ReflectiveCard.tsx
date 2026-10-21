"use client";

import { memo, useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, FingerPrintIcon } from "@hugeicons/core-free-icons";

import "./ReflectiveCard.css";

const THEMES = {
  dark: {
    "--rc-base": "#1d1c22",
    "--rc-shadow":
      "0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)",
    "--rc-ink": "#f4f4f5",
    "--rc-muted": "rgba(244, 244, 245, 0.6)",
    "--rc-tile": "linear-gradient(180deg, #3a3644 0%, #27242f 100%)",
    "--rc-tile-edge": "rgba(255, 255, 255, 0.07)",
    "--rc-tile-highlight": "rgba(255, 255, 255, 0.12)",
    "--rc-tile-shadow": "0 4px 10px -4px rgba(0, 0, 0, 0.7)",
    "--rc-rim": "rgba(255, 255, 255, 0.07)",
    "--rc-rim-highlight": "rgba(255, 255, 255, 0.1)",
  },
  light: {
    "--rc-base": "#e7e7ea",
    "--rc-shadow":
      "0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)",
    "--rc-ink": "#18181b",
    "--rc-muted": "rgba(24, 24, 27, 0.6)",
    "--rc-tile": "linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)",
    "--rc-tile-edge": "rgba(24, 24, 27, 0.08)",
    "--rc-tile-highlight": "rgba(255, 255, 255, 1)",
    "--rc-tile-shadow": "0 4px 10px -5px rgba(24, 24, 27, 0.25)",
    "--rc-rim": "rgba(24, 24, 27, 0.08)",
    "--rc-rim-highlight": "rgba(255, 255, 255, 0.8)",
  },
} as const;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const toPx = (value: number | string) => {
  if (typeof value === "number") return `${value}px`;
  return value;
};

interface ReflectiveCardProps {
  name?: string;
  role?: string;
  badge?: string;
  status?: string;
  statusColor?: string;
  idLabel?: string;
  idValue?: string;
  children?: ReactNode;
  theme?: "dark" | "light";
  videoSrc?: string;
  webcam?: boolean;
  onWebcamError?: (error: Error) => void;
  tint?: string;
  metalness?: number;
  roughness?: number;
  blurStrength?: number;
  grayscale?: number;
  warp?: number;
  warpScale?: number;
  shine?: number;
  bevel?: number;
  glare?: number;
  enableTilt?: boolean;
  tiltStrength?: number;
  intro?: boolean;
  width?: number | string;
  height?: number | string;
  radius?: number;
  className?: string;
  style?: CSSProperties;
}

const ReflectiveCard = ({
  name = "Alexander Doe",
  role = "Senior Developer",
  badge = "Verified",
  status = "Active",
  statusColor = "#22c55e",
  idLabel = "ID number",
  idValue = "8901 2345 6789",
  children,
  theme = "light",
  width = 320,
  height = 500,
  radius = 24,
  className = "",
  style,
  enableTilt = true,
  tiltStrength = 12,
}: ReflectiveCardProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const palette = theme === "light" ? "light" : "dark";
  const corner = Math.max(0, radius);
  const cardStyle = {
    ...(THEMES[palette] as Record<string, string>),
    "--rc-width": toPx(width),
    "--rc-height": toPx(height),
    "--rc-radius": `${corner}px`,
    "--rc-pad": `${Math.round(clamp(corner * 0.8, 16, 22))}px`,
    "--rc-tile-radius": `${Math.round(clamp(corner * 0.5, 8, 14))}px`,
    "--rc-status": statusColor,
  } as unknown as CSSProperties;

  useEffect(() => {
    const root = rootRef.current;
    const body = bodyRef.current;
    if (!root || !body || !enableTilt) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const update = () => {
      raf = 0;
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      root.style.setProperty("--rc-rotate-x", `${(currentY * tiltStrength).toFixed(3)}deg`);
      root.style.setProperty("--rc-rotate-y", `${(-currentX * tiltStrength).toFixed(3)}deg`);
      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        raf = requestAnimationFrame(update);
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = body.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = px;
      targetY = py;
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = requestAnimationFrame(update);
    };

    body.addEventListener("mousemove", onMove);
    body.addEventListener("mouseleave", onLeave);

    return () => {
      body.removeEventListener("mousemove", onMove);
      body.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enableTilt, tiltStrength]);

  return (
    <div
      ref={rootRef}
      className={`reflective-card ${className}`.trim()}
      style={{ ...(cardStyle as CSSProperties), ...(style || {}), "--rc-presence": "1", "--rc-lift": "0px" } as CSSProperties}
    >
      <div ref={bodyRef} className="reflective-card__body">
        <div className="reflective-card__content">
          {children ?? (
            <>
              {(badge || status) && (
                <div className="reflective-card__header">
                  {badge && (
                    <span className="reflective-card__badge">
                      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={16} strokeWidth={1.8} />
                      {badge}
                    </span>
                  )}
                  {status && (
                    <span className="reflective-card__status">
                      <span className="reflective-card__dot" />
                      {status}
                    </span>
                  )}
                </div>
              )}
              <div className="reflective-card__identity">
                {name && <h3 className="reflective-card__name">{name}</h3>}
                {role && <p className="reflective-card__role">{role}</p>}
              </div>
              {(idLabel || idValue) && (
                <div className="reflective-card__footer">
                  <div className="reflective-card__id">
                    {idLabel && <span className="reflective-card__label">{idLabel}</span>}
                    {idValue && <span className="reflective-card__value">{idValue}</span>}
                  </div>
                  <span className="reflective-card__tile">
                    <HugeiconsIcon icon={FingerPrintIcon} size={22} strokeWidth={1.6} />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
        <span className="reflective-card__rim" />
      </div>
    </div>
  );
};

export default memo(ReflectiveCard);
