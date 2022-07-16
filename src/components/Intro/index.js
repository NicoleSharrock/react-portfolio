// import './into.css'
import Fog from 'vanta/dist/vanta.fog.min'
import { useState, useEffect, useRef } from 'react'


const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Fog({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xd4b46d,
                midtoneColor: 0xa78c4a,
                lowlightColor: 0x78540f,
                baseColor: 0x895326,
                speed: 1.50,
                zoom: 2.60
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div id="vanta-canvas" ref={myRef}>
        Foreground content goes here
    </div>
}

export default MyComponent;

