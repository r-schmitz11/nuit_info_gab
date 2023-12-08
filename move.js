var image = document.getElementById('paper')
var score_update = document.getElementById('score')
var change = 0;
let cond = 0
let score = 0

setInterval(function() {
    image.addEventListener("click", (event) => {
        image.style.visibility="hidden"
        cond = 1
    })
    image.style.top = change+"px"
    change += 20;
    if (change > 960 || cond == 1) {
        if (cond == 1) {
            score++;
            score_update.textContent = score
        }
        image.style.visibility="visible"
        change = -170;
        cond = 0
        image.style.top = change+"px"
        image.style.left = Math.random() * 1920+"px"
    }
}, 50);