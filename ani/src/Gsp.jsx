import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

function Gsp() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".page1 .box",{
      scale:0,
      duration:2,
      backgroundColor:"blue",
    })
    gsap.from(".page2 .box",{
      scale:0,
      duration:2,
      backgroundColor:"blue",
      delay:0.5,
      scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1.5
      }
    })
  });

  return (
    <>
      <div className="page1">
        <div className="box">

        </div>
      </div>
      <div className="page2">
        <div className="box">
          
        </div>
      </div>
      <div className="page3">
        <div className="box">
          
        </div>
      </div>
    </>
  );
}

export default Gsp;
