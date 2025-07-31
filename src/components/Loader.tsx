import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Loader() {
  useEffect(() => {
    const tl = gsap.timeline();

    const splitLogo = SplitText.create(".basement-logo-2", {
      type: "chars",
    });

    const split2 = SplitText.create(".title", {
      type: "chars",
    });

    gsap.set(".basement-logo", {
      opacity: 1,
    });

    gsap.set([splitLogo.chars], {
      opacity: 0,
    });

    tl.to(".basement-logo", {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1.3,
    });

    tl.to(splitLogo.chars, {
      opacity: 1,
      xPercent: 0,
      x: 0,
      duration: 0.2,
      ease: "power3.out",
      stagger: {
        each: 0.07,
        from: "start",
      },
    });

    tl.to(
      split2.chars,
      {
        opacity: 1,
        xPercent: 0,
        textShadow: "-2px 0px white, 0 2px white, 2px 0px white, 0 -2px white",
        color: "black",
        x: 0,
        duration: 0.2,
        ease: "power3.out",
        stagger: {
          each: 0.07,
          from: "start",
        },
      },
      "-=0.2"
    );

    tl.to(
      ".basement-logo-3",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.1"
    );

    // tl.to(".basement-logo-3", {
    //   opacity: 0,
    //   duration: 0.5,
    //   ease: "power3.out",
    // });

    // tl.to(splitLogo.chars, {
    //   opacity: 0,
    //   duration: 0.5,
    //   yPercent: -100,
    //   ease: "power3.out",
    //   stagger: {
    //     each: 0.07,
    //     from: "start",
    //   },
    // });

    // tl.to(
    //   split2.chars,
    //   {
    //     opacity: 0,
    //     yPercent: -100,
    //     duration: 0.5,
    //     ease: "power3.out",
    //     stagger: {
    //       each: 0.07,
    //       from: "start",
    //     },
    //   },
    //   "<"
    // );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen loader ">
      <div className="flex justify-center items-center">
        <span className="absolute text-white opacity-100 flex items-center justify-start top-text text-4xl basement-logo">
          b.
        </span>
        <div className="flex flex-col items-center justify-center text-center">
          <span className=" text-white  tracking-normal top-text text-4xl basement-logo-2">
            joined
          </span>
          <span className="text-white  tracking-normal top-text text-4xl basement-logo-2 title">
            basement.
          </span>
        </div>
        <div className="text-white  opacity-0 flex items-center justify-start top-text text-4xl basement-logo-3">
          :)
        </div>
      </div>
    </div>
  );
}
