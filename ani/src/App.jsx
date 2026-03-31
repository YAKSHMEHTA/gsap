import { useRef } from "react"
import { useGSAP } from "@gsap/react"  // npm install @gsap/react
import gsap from "gsap"
import "./App.css"

function App() {
  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".box1", { x: 300, duration: 1 })
    tl.to(".box2",{x:300,duration:1},"+=0.3")
    tl.to(".box3",{x:300,duration:1},"+=0.7")
  }, { scope: container })

  return (
    <div ref={container}>
      <div className="box1 h-20  w-20  bg-red-400" />
      <div className="box2 h-20  w-20  bg-red-400" />
      <div className="box3 h-20  w-20  bg-red-400" />
    </div>
  )
}

export default App