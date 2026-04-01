import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".b", {
        scrollTrigger: {
          markers:true,
          trigger: ".b",
          start: "top 60%",
          end: "top 20%",
          scrub: 2 ,
        },
        x: 500,
        opacity: 1,
        
      });
    },
    { scope: container },
  );

  return (
    <>
      <div ref={container}>
        <div className="h-[300vh] p-30 flex flex-col gap-20">
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
