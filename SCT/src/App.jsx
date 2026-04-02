import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const container = useRef(null);
  
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      const tl = gsap.timeline();
      tl.to(".parent", {
        scrollTrigger: {
          trigger: ".parent",
          start: "center 40%",
          end: "center 20%",
          scrub:2,
          pin: true,
        },
      });
      boxes.forEach((box) => {
        tl.to(box, {
          scrollTrigger: {
            markers: true,
            trigger: box,
            start: "top 40%",
            end: "center 20%",
            scrub: 2,
          },
          x: 500,
          opacity: 1,
        });
      });
    },
    { scope: container },
  );

  return (
    <>
      <div ref={container} className="h-[300vh]">
        <div className="h-[50vh] parent mt-60 p-30 flex bg-mist-700 gap-2">
          <div className="a h-40 box w-30 bg-cyan-800"> </div>
          <div className="b h-40 box w-30 bg-red-800"></div>
          <div className="c h-40 box w-30 bg-blue-800"></div>
          <div className="d h-40 box w-30 bg-green-800"></div>
        </div>
      </div>
    </>
  );
}

export default App;
