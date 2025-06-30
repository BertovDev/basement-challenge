import { useEffect } from "react";
import gsap from "gsap";

export function useTextSwapHover(
  ref: React.RefObject<HTMLButtonElement | HTMLDivElement | null>,
  duration: number
) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const topText = el.querySelector(".top-text");
    const bottomText = el.querySelector(".bottom-text");

    if (!topText || !bottomText) return;

    // Set initial state
    gsap.set(bottomText, { yPercent: 100 });

    const tl = gsap.timeline({ paused: true });
    tl.to(
      topText,
      {
        yPercent: -100,
        duration: duration,
        ease: "power2.out",
      },
      0
    ).to(
      bottomText,
      {
        yPercent: 0,
        duration: duration,
        ease: "power2.out",
      },
      0
    );

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}
