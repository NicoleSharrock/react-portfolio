import Fog from 'vanta/dist/vanta.fog.min'
import { useState, useEffect, useRef } from 'react'


const Intro = (props) => {
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
                speed: 3.80,
                zoom: 2.60
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <>
            <div id="vanta-canvas" ref={myRef}>
                <div className="container hero" id="Home">
                    <div className="row">
                        <div className="col-12 mt-4 pt-4 fs-1">
                            <div className="text-center text-light" id="hero-text">
                                <p>
                                    {/* Hello, I'm&nbsp;&nbsp; */}
                                    <span id="fancy-text-hero">Nicole Sharrock-Hayes</span>
                                    <br />
                                    Software Engineer!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;

