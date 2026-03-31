import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import img1 from "./assets/image1.jpeg";
import img2 from "./assets/image2.jpeg";

function Gsp() {

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from(".img1, .img2", {
      y: -400,
      duration: 1,
      ease: "power2.out",
    })
    // .to(".img1, .img2", {
    //   x:600,
    //   y: 100,
    //   duration: 1,
    //   ease: "power2.inOut",
    // })
    // .to(".img2", {
    //   x: 100,
    //   duration: 1,
    //   ease: "power2.inOut",
    // })
    .to(".img1", {
      x:-1200,
      duration: 1,
      ease: "power2.inOut",
    })

  });

  return (
    <div className="bg-blue-900 w-full h-[100vh] overflow-x-hidden">
      <img src={img1} className="img1 h-125 absolute top-60 left-330" alt="" />
      <div className="h-full w-full">
        <h1 className="h-ful">Video Calling Website</h1>
      </div>
      <img src={img2} className="img2 h-125 absolute top-60 left-330" alt="" />
    </div>
  );
}

export default Gsp;