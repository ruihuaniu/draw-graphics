import React, { useRef, useEffect } from 'react'
import './Canvas.css'

function Canvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        // form 32,768 discrete colors
        const colors = []
        let subColors = []
        for (let x = 1; x <= 32; x++) {
            for (let y = 1; y <= 32; y++) {
                for (let z = 1; z <= 32; z++) {
                    subColors.push(`rgb(${x * 8},${y * 8},${z * 8})`)
                    if (y % 4 === 0 && z === 32) { // if there are 128 colors in the subColor array, then push it to the main colors array 
                        colors.push(subColors)
                        subColors = [];
                    }
                }
            }
        }

        // shuffle colors
        for (let i = colors.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [colors[i], colors[j]] = [colors[j], colors[i]];
        }

        console.log(colors[0][0]);


        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')

        for (let i = 0; i < 256; i++) {
            // console.log("i is", i, colors[i]);
            for (let j = 0; j < 128; j++) {
                ctx.fillStyle = colors[i][j];
                ctx.fillRect(i, j, 1, 1)
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
