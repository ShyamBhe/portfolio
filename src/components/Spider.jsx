import { useEffect, useRef } from "react";

export default function SpiderCursor() {
  const svgRef = useRef(null);
  const spiderRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!finePointer.matches || reducedMotion.matches) return;

    const svg = svgRef.current;
    const spider = spiderRef.current;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let frameId;
    let visible = false;

    const interactiveSelector = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "label",
      "summary",
      "[role='button']",
      "[role='tab']",
      "[contenteditable='true']",
      "[tabindex]:not([tabindex='-1'])",
      "iframe",
      "video",
      "audio",
      ".btn",
      ".site-controls",
    ].join(",");

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;

      const element =
        event.target instanceof Element ? event.target : null;

      const interactive = element?.closest(interactiveSelector);
      const selection = window.getSelection()?.toString();

      document.documentElement.classList.toggle(
        "spider-interactive",
        Boolean(interactive)
      );

      document.documentElement.classList.toggle(
        "spider-text-selecting",
        Boolean(selection)
      );

      svg.style.opacity =
        interactive || selection ? "0" : "1";
    };

    const onPointerLeave = () => {
      visible = false;
      svg.style.opacity = "0";

      document.documentElement.classList.remove(
        "spider-interactive",
        "spider-text-selecting"
      );
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.35;
      currentY += (targetY - currentY) * 0.35;

      spider.setAttribute(
        "transform",
        `translate(${currentX - 12}, ${currentY - 12}) scale(0.5)`
      );

      if (!visible) {
        targetX = currentX;
        targetY = currentY;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "pointerleave",
      onPointerLeave
    );

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);

      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave
      );

      cancelAnimationFrame(frameId);

      document.documentElement.classList.remove(
        "spider-interactive",
        "spider-text-selecting"
      );
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="spider-cursor"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <g ref={spiderRef} className="spider-body">
        <g className="spider-legs">
          <path d="M20 19 Q8 7 4 17 L10 23" />
          <path d="M20 23 Q5 17 4 31 L12 32" />
          <path d="M21 28 Q7 34 10 43 L18 38" />
          <path d="M25 31 Q17 42 24 46 L28 39" />
          <path d="M28 19 Q40 7 44 17 L38 23" />
          <path d="M28 23 Q43 17 44 31 L36 32" />
          <path d="M27 28 Q41 34 38 43 L30 38" />
          <path d="M23 31 Q31 42 24 46 L20 39" />
        </g>

        <ellipse
          className="spider-abdomen"
          cx="24"
          cy="19"
          rx="8"
          ry="10"
        />

        <circle
          className="spider-head"
          cx="24"
          cy="30"
          r="5"
        />

        <circle
          className="spider-mark"
          cx="24"
          cy="16"
          r="2"
        />

        <circle className="spider-eye" cx="22" cy="29" r="1" />
        <circle className="spider-eye" cx="26" cy="29" r="1" />
      </g>
    </svg>
  );
}