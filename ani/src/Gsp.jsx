import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Gsp() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from('box',{
      x:500,
      duration:5
    })
    
  }, [])

  return (
    <div className='box'>
      {/* x: 550,
       delay:0.5, 
       repeat:-1,
       yoyoEase:'true',
       duration:2,
  
       rotation:180, */}
    </div>
  )
}

export default Gsp