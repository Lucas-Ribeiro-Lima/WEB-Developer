async function love () {
        const aceito = document.querySelector("#aceito")
        const recuso = document.querySelector("#recuso")
        
        aceito.addEventListener("click", () => {
                alert("Então estamos namorando!")
        })
        
        recuso.addEventListener("click", () => {
                alert("😓")
        })
}
        
love()