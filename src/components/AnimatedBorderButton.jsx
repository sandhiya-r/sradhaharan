import { useRef, useEffect, useState } from "react";

export const AnimatedBorderButton = ({ children, href, download, ...props }) => {
  const btnRef = useRef(null);
  const [path, setPath] = useState("");

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const buildPath = () => {
      const { width: w, height: h } = btn.getBoundingClientRect();
      const r = Math.min(w, h) / 2;
      const s = 1;

      setPath(
        `M ${s + r},${s}
         H ${w - r - s}
         A ${r},${r} 0 0 1 ${w - s},${s + r}
         V ${h - r - s}
         A ${r},${r} 0 0 1 ${w - r - s},${h - s}
         H ${s + r}
         A ${r},${r} 0 0 1 ${s},${h - r - s}
         V ${s + r}
         A ${r},${r} 0 0 1 ${s + r},${s}
         Z`
      );
    };

    buildPath();

    const ro = new ResizeObserver(buildPath);
    ro.observe(btn);
    return () => ro.disconnect();
  }, []);

  const className =
    "relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full animated-border";

  const inner = (
    <>
      {path && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <path
            d={path}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="400 550"
            strokeDashoffset="400"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animated-border-path"
          />
        </svg>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a ref={btnRef} href={href} download={download} className={className} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button ref={btnRef} className={className} {...props}>
      {inner}
    </button>
  );
};