import { useState, useEffect } from "react";
import logoImg from "@assets/LOGO_1773945583721.png";

interface SplashIntroProps {
  onComplete: () => void;
}

export default function SplashIntro({ onComplete }: SplashIntroProps) {
  const [fillDone, setFillDone] = useState(false);
  const [flying, setFlying] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFillDone(true), 2000);
    const t2 = setTimeout(() => setFlying(true), 2500);
    const t3 = setTimeout(() => {
      setGone(true);
      onComplete();
    }, 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        transition: "opacity 0.9s ease",
        opacity: flying ? 0 : 1,
        pointerEvents: flying ? "none" : "auto",
      }}
      className="dark:bg-background"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: flying
            ? "translate(-44vw, -44vh) scale(0.18)"
            : "translate(0, 0) scale(1)",
        }}
      >
        {/* Logo with water-fill animation */}
        <div
          style={{
            position: "relative",
            width: "220px",
            height: "240px",
          }}
        >
          {/* Gray skeleton logo underneath */}
          <img
            src={logoImg}
            alt="SwiftTech Logo"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "grayscale(100%) opacity(18%)",
            }}
          />

          {/* Color logo revealed bottom-to-top like water filling */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={logoImg}
              alt=""
              aria-hidden
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                animation: "water-fill-logo 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
              }}
            />
          </div>

          {/* Blue water shimmer overlay while filling */}
          {!fillDone && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(59,130,246,0.15) 0%, transparent 60%)",
                animation: "shimmer-fill 2s ease-in-out forwards",
                pointerEvents: "none",
              }}
            />
          )}
        </div>

        {/* Company name fades in after fill */}
        <div
          style={{
            textAlign: "center",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            opacity: fillDone ? 1 : 0,
            transform: fillDone ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: "#1e3a8a",
            }}
          >
            SWIFTTECH
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#64748b",
              marginTop: "2px",
              letterSpacing: "0.05em",
            }}
          >
            Engineers (India) Pvt. Ltd.
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              marginTop: "4px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            The Water Specialist
          </div>
        </div>
      </div>
    </div>
  );
}
