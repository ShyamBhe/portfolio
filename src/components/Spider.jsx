import { useEffect, useRef } from "react";

export default function SpiderCursor() {
  const svgRef = useRef(null);
  const threadRef = useRef(null);
  const spiderRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (
      !svg ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const thread = threadRef.current;
    const spider = spiderRef.current;

    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    let frameId;
    let visible = false;

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;
      svg.style.opacity = "1";
    };

    const onPointerLeave = () => {
      visible = false;
      svg.style.opacity = "0";
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;

      // Position the spider slightly below and to the right.
       const x = currentX;
    const y = currentY;

spider.setAttribute(
  "transform",
  `translate(${x}, ${y}) scale(0.65)`
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
        {/* Eight legs */}
        <g className="spider-legs">
          <path d="M 20 19 Q 8 7 4 17 L 10 23" />
          <path d="M 20 23 Q 5 17 4 31 L 12 32" />
          <path d="M 21 28 Q 7 34 10 43 L 18 38" />
          <path d="M 25 31 Q 17 42 24 46 L 28 39" />

          <path d="M 28 19 Q 40 7 44 17 L 38 23" />
          <path d="M 28 23 Q 43 17 44 31 L 36 32" />
          <path d="M 27 28 Q 41 34 38 43 L 30 38" />
          <path d="M 23 31 Q 31 42 24 46 L 20 39" />
        </g>

        {/* Body */}
        <ellipse
          className="spider-abdomen"
          cx="24"
          cy="19"
          rx="8"
          ry="10"
        />
        <circle className="spider-head" cx="24" cy="30" r="5" />

        {/* Green markings */}
        <circle className="spider-mark" cx="24" cy="16" r="2" />
        <circle className="spider-eye" cx="22" cy="29" r="1" />
        <circle className="spider-eye" cx="26" cy="29" r="1" />
      </g>
    </svg>
  );
}