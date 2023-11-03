
import Minesweeper_UI from "./UI"

//**    GAME SETTINGS */
let bombs = 0 
let totalFlags = 0
let isGameOver = false
//** */

export default {

    startGame : function() {
        isGameOver = false
        // const mode = window.difficulty
        const width = +window.area
        if(window.difficulty === "Easy")  bombs = Math.floor(width*width / 4)
        if(window.difficulty === "Normal") bombs = Math.floor(width*width / 3)
        if(window.difficulty === "Hard") bombs = Math.floor(width*width / 2)

        const mainElement = document.querySelector("main")
            mainElement.innerHTML = Minesweeper_UI.section()
        const sectionElement = mainElement.querySelector("section")
            sectionElement.className = "grid justify-center p-4 relative"
        const gameBoard = sectionElement.querySelector("#gameBoard")
            gameBoard.className = "flex flex-wrap" 


        //**    CREATING CLASSES ARRAY AND SORT THEM RONDOMLY */
        const bombsArray = Array(bombs).fill("bomb")
        const validArray = Array( (width*width) - bombs ).fill("valid")
        const boardArray = bombsArray.concat(validArray)
            boardArray.sort(()=> Math.random() - 0.5)
        //** */

        const squareWidth = `calc((375px - 2rem) / 10)`
            gameBoard.style = `max-width: calc(${squareWidth} * ${width})`

            for(let i = 1; i <= width*width; i++) {
                const square = document.createElement("div")
                    square.style = `width: ${squareWidth}`
                    square.className = "aspect-square bg-blue-500 border-2 flex place-content-center leading-loose"
                    square.classList.add(boardArray[i-1])
                    square.id = i

                gameBoard.appendChild(square)
                square.addEventListener("click", ()=> check(square,width,bombs) )
                square.addEventListener("contextmenu", (e)=> flag(e,square))
            }

        // //!     DEV : BOMBALARI GÖREBİLMEK İÇİN
        //     const bombEls = document.querySelectorAll(".bomb")
        //         bombEls.forEach(el=> el.classList.add("bg-red-500"))
        // //!     //
    },

    inspect : function() {
        console.log("inspected");
    }
 }

function check(square,width) {
    const squareId = +square.id
    let total = 0
    //**    CHECK EDİLEN SQUARE'İN KRİTİK KONUMLARINI SORGULAMAK */
    const isLeft = square.id % width === 1
    const isRight = square.id % width === 0
    const isTop = square.id <= width
    const isBottom = square.id > (width*width) - width
    //** */
    
    //**    CHECK EDİLEN SQUARE'İ ÇEVRELEYEN 8 SQUARE'İN KONUMLARI */
    const allSquares = [...document.querySelectorAll("#gameBoard div")]

    const rightSquare = allSquares.filter(square => +square.id === squareId + 1)[0]
    const leftSquare = allSquares.filter(square => +square.id === squareId - 1)[0]
    const topSquare = allSquares.filter(square => +square.id === squareId - width )[0]
    const bottomSquare = allSquares.filter(square => +square.id === squareId + width )[0]
    const topRightSquare = allSquares.filter(square => +square.id === squareId - width + 1 )[0]
    const topLeftSquare = allSquares.filter(square => +square.id === squareId - width - 1)[0]
    const bottomRightSquare = allSquares.filter(square => +square.id === squareId + width + 1 )[0]
    const bottomLeftSquare = allSquares.filter(square => +square.id === squareId + width -1 )[0]

    let allSurrendingSquares = [
        rightSquare, leftSquare, topSquare, bottomSquare,
        topRightSquare, topLeftSquare, bottomRightSquare, bottomLeftSquare
    ]

    if(isLeft) allSurrendingSquares = allSurrendingSquares.filter(square=>square !== leftSquare && square !==topLeftSquare && square !==bottomLeftSquare)
    if(isTop) allSurrendingSquares = allSurrendingSquares.filter(square => square !== topLeftSquare && square !== topSquare && square !== topRightSquare)
    if(isRight) allSurrendingSquares = allSurrendingSquares.filter(square=>square !== topRightSquare && square !== rightSquare && square !== bottomRightSquare)
    if(isBottom) allSurrendingSquares = allSurrendingSquares.filter(square=>square !== bottomRightSquare && square !== bottomSquare && square !== bottomRightSquare)
    if(isTop && isLeft ) allSurrendingSquares = allSurrendingSquares.filter(square=>square !== leftSquare && square !==topLeftSquare && square !==bottomLeftSquare && square !== topSquare && square !== topRightSquare)
    if(isTop && isRight ) allSurrendingSquares = allSurrendingSquares.filter(square=>square !== topLeftSquare && square !== top && square !== topRightSquare && square !== rightSquare && square !== bottomRightSquare )
    if(isBottom && isLeft ) allSurrendingSquares = allSurrendingSquares.filter(square=>square !== topLeftSquare && square !== leftSquare && square !== bottomLeftSquare && square !== bottomSquare && square !== bottomRightSquare )
    if(isBottom && isRight ) allSurrendingSquares = allSurrendingSquares.filter(square=>square !== topRightSquare && square !== rightSquare && square !== bottomRightSquare && square !== bottomSquare && square !== bottomLeftSquare )

    const isSurrendingSquaresHasBomb = allSurrendingSquares.some(square=>{
        if(square.classList.contains("bomb")) return true
        return false
    })
    //** */

    //**    CHECK */
    if( square.classList.contains("bomb") && !isGameOver ) {
        square.innerText = "B"
        gameOver()
        return
    }
    else {
        if(isSurrendingSquaresHasBomb && !square.classList.contains("checked") && !square.classList.contains("flag")  && !isGameOver) {
            if( !isRight && rightSquare.classList.contains("bomb") ) total ++
            if( !isLeft && leftSquare.classList.contains("bomb") ) total ++
            if( !isTop && topSquare.classList.contains("bomb") ) total++
            if( !isBottom && bottomSquare.classList.contains("bomb") ) total++
            if( !isTop && !isRight && topRightSquare.classList.contains("bomb") ) total++
            if( !isTop && !isLeft && topLeftSquare.classList.contains("bomb") ) total++
            if( !isBottom && !isRight && bottomRightSquare.classList.contains("bomb") ) total++
            if( !isBottom && !isLeft && bottomLeftSquare.classList.contains("bomb") ) total++
            square.innerText = total
            square.classList.remove("bg-green-500", "flag")
            square.classList.add("bg-yellow-500", "checked")
        }

        if( !isSurrendingSquaresHasBomb && !square.classList.contains("checked") && !square.classList.contains("flag")  && !isGameOver ) {
            square.innerHTML = ""
            square.classList.remove("bg-green-500", "flag")
            square.classList.add("bg-yellow-500", "checked")

            allSurrendingSquares.forEach(square => {
                check(square,width)
            })
        }

        if((allSquares.filter(square=>square.classList.contains("checked")).length) == ( (width*width) - bombs) ){
            gameOver()
        }

    }
    //** */   
}

function flag(e,square) {
    e.preventDefault()
    if(square.classList.contains("checked") || isGameOver) {
        return
    }

    if(square.classList.contains("flag")) {
        square.innerHTML = ""
        square.classList.remove("bg-green-500","flag")
        totalFlags--
        return
    }   
    if(totalFlags < bombs) {
        square.innerHTML = "F"
        square.classList.add("bg-green-500","flag")
        totalFlags++
    }
}

function gameOver() {
    isGameOver = true
    totalFlags = 0

    const sectionElement = document.querySelector("main section")
        sectionElement.innerHTML +=  Minesweeper_UI.gameOverModal()
        Minesweeper_UI.modalFunctions()
}