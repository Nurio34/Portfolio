
import { all } from "axios"
import Minesweeper_UI from "./UI"

export default {

    startGame : function() {
        const mainElement = document.querySelector("main")
            mainElement.innerHTML = Minesweeper_UI.section()
        const sectionElement = mainElement.querySelector("section")
            sectionElement.className = "flex justify-center p-4"
        const gameBoard = sectionElement.querySelector("#gameBoard")
            gameBoard.className = "flex flex-wrap" 

        //**    GAME SETTINGS */
        const width = 10
        const bombs = 20
        //** */

        //**    CREATING CLASSES ARRAY AND SORT THEM RONDOMLY */
        const bombsArray = Array(bombs).fill("bomb")
        const validArray = Array( (width*width) - bombs ).fill("valid")
        const boardArray = bombsArray.concat(validArray)
            boardArray.sort(()=> Math.random() - 0.5)
        //** */

        const squareWidth = `calc((375px - 2rem) / 10)`
            gameBoard.style = `max-width: calc(${squareWidth} * 10)`

            for(let i = 1; i <= width*width; i++) {
                const square = document.createElement("div")
                    square.style = `width: ${squareWidth}`
                    square.className = "aspect-square bg-blue-500 border-2 flex place-content-center leading-loose"
                    square.classList.add(boardArray[i-1])
                    square.id = i

                gameBoard.appendChild(square)
                square.addEventListener("click", ()=> check(square,width) )
            }

        //!     DEV : BOMBALARI GÖREBİLMEK İÇİN
            const bombEls = document.querySelectorAll(".bomb")
                bombEls.forEach(el=> el.classList.add("bg-red-500"))
        //!     //
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
    const isTopLeft = square.id === "1"
    const isTopRight = square.id === String(width)
    const isBottomRight = square.id === String(width*width)
    const isBottomLeft = square.id === String((width*width) - width + 1)
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
    //** */

    //**    CHECK */
    if( square.classList.contains("bomb") ) {
        square.innerText = "B"
        gameOver()
        return
    }

    if( !isRight && rightSquare.classList.contains("bomb") ) total ++
    if( !isLeft && leftSquare.classList.contains("bomb") ) total ++
    if( !isTop && topSquare.classList.contains("bomb") ) total++
    if( !isBottom && bottomSquare.classList.contains("bomb") ) total++
    if( !isTop && !isRight && topRightSquare.classList.contains("bomb") ) total++
    if( !isTop && !isLeft && topLeftSquare.classList.contains("bomb") ) total++
    if( !isBottom && !isRight && bottomRightSquare.classList.contains("bomb") ) total++
    if( !isBottom && !isLeft && bottomLeftSquare.classList.contains("bomb") ) total++
    //** */

    square.innerText = total
    square.classList.add("bg-yellow-500")
}

function gameOver() {
    console.log("Game over");
}