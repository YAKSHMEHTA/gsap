import { use, useRef } from "react";
import { useGSAP } from "@gsap/react"; 
import gsap from "gsap";
import "./App.css";

function App() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from("#con .uptext", {
        y: -20,
        opacity: 0,
        duration: 0.6,
      });
      tl.from("#con h1", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      });
      tl.from(
        "#con .line",
        {
          scaleX: 0,
          duration: 0.8,
        },
        "-=0.4",
      );
      tl.from(
        "#con2 p ",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.4,
        },
        "-=0.5",
      );
      tl.from(
        "#con button ",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        },
        "-=0.2",
      );
    },
    { scope: container },
  );

  return (
    <>
      <div id="con" ref={container} className="w-full h-screen bg-black p-25 ">
        <div className="uptext mt-20">
          <p className="text-neutral-400 mb-10">
            Software Engineer · Open to Work
          </p>
        </div>
        <div className="main flex gap-4">
          <h1 className="leading-none text-[160px] left text-white ">KRISH</h1>
          <b>
            <h1 className="text-yellow-300 leading-none text-[160px]  ">
              DEV
            </h1>{" "}
          </b>
        </div>
        <div className="h-[0.2px] line w-full bg-white mt-14"></div>
        <div id="con2">
          <div className="bottom-text flex flex-col gap-2 mt-14 mb-10 ">
            <p className="text-neutral-400 btext-1">
              Building fast, clean, full-stack web apps.
            </p>
            <p className="text-neutral-400 btext-2">
              Building fast, clean, full-stack web apps.
            </p>
          </div>
          <div className="buttons flex gap-5 ">
            <button className="text-balck bg-yellow-300 h-12 w-50  rounded-[3px] ">
              View Projects
            </button>
            <button className="text-neutral-400 border-1 border-b-neutral-300 rounded-[3px]  h-12 w-50">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
