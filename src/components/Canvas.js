import React, { useRef, useEffect } from 'react'
import './Canvas.css'

function Canvas() {
    const canvasRef = useRef(null)


    // form 32,768 discrete colors
    const colors = []
    for (let x = 1; x <= 32; x++) {
        for (let y = 1; y <= 32; y++) {
            for (let z = 1; z <= 32; z++) {
                colors.push(`rgb(${x * 8},${y * 8},${z * 8})`)
            }
        }
    }

    console.log(colors.length);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')

        for (let i = 1; i <= 256; i++) {
            for (let j = 1; j <= 128; j++) {
                ctx.fillStyle = colors[i * j]
                ctx.fillRect(i - 1, j - 1, 1, 1)
            }
        }

        // ctx.fillStyle = 'red'
        // ctx.fillRect(100, 100, 450, 400)
    }, [])


    return (
        <div className="container">
            <canvas
                ref={canvasRef}
            // width="256px"
            // height="128px"
            // className="canvas container"
            />
            this is canvas page
        </div>
    )
}

export default Canvas
