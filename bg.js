const canvas = document.getElementById('bgCanvas')
const ctx = canvas.getContext("2d")
//Initial canvas set to view height and width
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', bgResize)

function bgResize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

//Background Drawing

function drawBackground() {
    let starX = Math.floor(Math.random(0) * (window.innerWidth))
    let starY = Math.floor(Math.random(0) * (window.innerHeight))
    let starSize = 3;
    let flash = 0.1;
    

    setInterval(function stars() {
        for (let i = 0; i < 1; i++) {
            starX = Math.floor(Math.random(0) * (window.innerWidth))
            starY = Math.floor(Math.random(0) * (window.innerHeight))
            ctx.fillStyle = `rgba(255,255,255,${flash})`
            ctx.shadowColor = 'rgba(255,255,255,1)';
            ctx.shadowBlur = 100;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.fillRect(starX, starY, starSize, starSize)
        }
    }, 400)

    setInterval(function size() {
        for (let i = 0; i < 1; i++) {
            if (starSize > 0) {
                starSize--;
            } else {
                for (let i = 0; i < 3; i++) {
                    starSize++
                }
            }
        }
    }, 400)

    setInterval(function flashing() {

        for (let i = 0; i < 1; i++) {
            if (flash < 1) {
                flash = flash + 0.1;
                console.log("this ran")
            }else if(flash == 1){
                flash = 0.9
                console.log("this went")
            }
           
        }
    }, 450)

}

drawBackground()
