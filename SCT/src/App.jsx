import React, { useRef, useState } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [num, setNum] = useState(0);
  console.log();
  const container = useRef(null);
  const updateNum = (percent)=>{
    setNum(prev =>   Math.floor((2.6 * percent)))
  }
  const items = [
    "FULL STACK",
    "ENGINEER",
    "REACT",
    "NODE.JS",
    "MONGODB",
    "GSAP",
  ];
  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.to("#track1", {
        x: -600,
        ease: null,
        scrollTrigger: {
          trigger: "#s1",
          start: "top 10%",
          end: "bottom top",
          //markers:true,
          scrub: 2,
        },
      });

      gsap.to("#track2", {
        x: 300,
        ease: null,
        scrollTrigger: {
          //          markers:true,
          trigger: "#s1",
          start: "center 40%",
          end: "bottom 20%",
          scrub: 2,
        },
      });
      gsap.from(".card", {
        scrollTrigger: {
          trigger: ".cards",
          start: "top 90%",
          end: "bottom 10%",
          //          markers:true,
        },
        transformOrigin: "bottom center",
        yPercent: 50,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        opacity: 0,
      });

      gsap.to("#s3", {
        scrollTrigger: {
          trigger:"#s3",
          markers:true,
          start:"top bottom",
          end:"bottom bottom",
          scrub:2,
          onUpdate: (self) => {
            const percent = Math.round(self.progress * 100);
            updateNum(percent)
            console.log(percent + "%");
          },
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <section id="s1">
        <div className="label">01 · Scroll-driven marquee</div>
        <div className="h-track" id="track1">
          <span className="h-text">FULL STACK &nbsp;</span>
          <span className="h-text outline">ENGINEER &nbsp;</span>
          <span className="h-text">FULL STACK &nbsp;</span>
          <span className="h-text outline">ENGINEER &nbsp;</span>
          <span className="h-text">FULL STACK &nbsp;</span>
          <span className="h-text outline">ENGINEER &nbsp;</span>
        </div>
        <div className="h-track" id="track2" style={{ marginTop: "8px" }}>
          <span className="h-text outline">KRISH &nbsp;</span>
          <span className="h-text">· DEV ·&nbsp;</span>
          <span className="h-text outline">KRISH &nbsp;</span>
          <span className="h-text">· DEV ·&nbsp;</span>
          <span className="h-text outline">KRISH &nbsp;</span>
          <span className="h-text">· DEV ·&nbsp;</span>
        </div>
      </section>

      <section id="s2">
        <div className="label">02 · Stagger reveal</div>
        <div className="cards">
          <div className="card">
            <div className="card-num">01</div>
            <div className="card-title">React</div>
            <div className="card-text">
              Building fast UIs with hooks, context, and clean component
              architecture.
            </div>
            <div className="card-bar-track">
              <div className="card-bar" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="card">
            <div className="card-num">02</div>
            <div className="card-title">Node.js</div>
            <div className="card-text">
              REST APIs, auth systems, refresh token rotation, device
              management.
            </div>
            <div className="card-bar-track">
              <div className="card-bar" style={{ width: "82%" }}></div>
            </div>
          </div>
          <div className="card">
            <div className="card-num">03</div>
            <div className="card-title">DSA</div>
            <div className="card-text">
              252+ problems. DP, graphs, sliding window. Placement ready.
            </div>
            <div className="card-bar-track">
              <div className="card-bar" style={{ width: "68%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="s3">
        <div className="pin-wrap" id="pin-target">
          <div className="big-label">problems solved</div>
          <div className="big-num" id="big-counter">
            {num}
          </div>
          <div className="big-label">and counting</div>
        </div>
      </section>

      <section id="s4">
        <div className="h-scroll-outer" id="h-outer">
          <div className="h-scroll-inner" id="h-inner">
            <div className="h-panel">
              <div className="h-panel-bg">01</div>
              <div className="h-panel-num">PROJECT 01</div>
              <div className="h-panel-title">
                ZERODHA <span className="h-panel-accent">CLONE</span>
              </div>
              <div className="h-panel-sub">MERN · JWT · Yahoo Finance API</div>
            </div>
            <div className="h-panel">
              <div className="h-panel-bg">02</div>
              <div className="h-panel-num">PROJECT 02</div>
              <div className="h-panel-title">
                AIRBNB <span className="h-panel-accent">CLONE</span>
              </div>
              <div className="h-panel-sub">MERN · Auth · Maps</div>
            </div>
            <div className="h-panel">
              <div className="h-panel-bg">03</div>
              <div className="h-panel-num">PROJECT 03</div>
              <div className="h-panel-title">
                AUTH <span className="h-panel-accent">BACKEND</span>
              </div>
              <div className="h-panel-sub">Node · Security · Device Mgmt</div>
            </div>
            <div className="h-panel">
              <div className="h-panel-bg">04</div>
              <div className="h-panel-num">PROJECT 04</div>
              <div className="h-panel-title">
                PORTFOLIO <span className="h-panel-accent">SITE</span>
              </div>
              <div className="h-panel-sub">React · GSAP · ScrollTrigger</div>
            </div>
          </div>
        </div>
      </section>

      <section id="s5">
        <div className="label">05 · Line wipe</div>
        <div className="wipe-lines">
          <div className="wipe-row">
            <div className="wipe-inner">
              <span className="wipe-name">ZERODHA CLONE</span>
              <span className="wipe-year">2025</span>
              <span className="wipe-tag">FULLSTACK</span>
            </div>
          </div>
          <div className="wipe-row">
            <div className="wipe-inner">
              <span className="wipe-name">AIRBNB CLONE</span>
              <span className="wipe-year">2025</span>
              <span className="wipe-tag">MERN</span>
            </div>
          </div>
          <div className="wipe-row">
            <div className="wipe-inner">
              <span className="wipe-name">AUTH SYSTEM</span>
              <span className="wipe-year">2024</span>
              <span className="wipe-tag">BACKEND</span>
            </div>
          </div>
          <div className="wipe-row">
            <div className="wipe-inner">
              <span className="wipe-name">PORTFOLIO</span>
              <span className="wipe-year">2025</span>
              <span className="wipe-tag">GSAP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
