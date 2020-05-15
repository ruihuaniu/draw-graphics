import React, { useRef, useEffect } from 'react'
import './Canvas.css'

function Canvas() {
    const canvasRef = useRef(null)

    useEffect(() => {

        // generate 32,768 discrete colors
        function generateColors(steps, canvasHeight) {
            const colors = []
            let subColors = []
            for (let x = 1; x <= steps; x++) {
                for (let y = 1; y <= steps; y++) {
                    for (let z = 1; z <= steps; z++) {
                        subColors.push(`rgb(${x * 256 / steps},${y * 256 / steps},${z * 256 / steps})`)
                        if (y % (canvasHeight / steps) === 0 && z === steps) { // check if there are 128 colors in the subColor array, if so, push it to the main colors array 
                            colors.push(subColors)
                            subColors = [];
                        }
                    }
                }
            }

            return colors

        }

        // shuffle colors 
        function shuffleColors(colors) {

            for (let i = 1; i < colors.length; i++) {
                for (let x = 1; x < colors[i].length; x++) {  //shuffle subColors
                    const y = Math.floor(Math.random() * (x + 1));
                    [colors[i][x], colors[i][y]] = [colors[i][y], colors[i][x]];
                }
                const j = Math.floor(Math.random() * (i + 1));
                [colors[i], colors[j]] = [colors[j], colors[i]];
            }

            console.log(colors);
            return colors;
        }

        // draw canvas
        function drawCanvas(colors, canvasWidth, canvasHeight) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')

            for (let i = 0; i < canvasWidth; i++) {
                for (let j = 0; j < canvasHeight; j++) {
                    ctx.fillStyle = colors[i][j];
                    ctx.fillRect(i, j, 1, 1)
                }
            }
        }

        drawCanvas(shuffleColors(generateColors(32, 128)), 256, 128) // colors with 32 steps. canvas width is 256px, height is 128px

    }, [])


    return (
        <div className="container">

            <canvas
                ref={canvasRef}
            />

        </div>
    )
}

export default Canvas
