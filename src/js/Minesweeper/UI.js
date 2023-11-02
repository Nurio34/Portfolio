
import Minesweeper_Functions from "./Functions"

export default {
    
    header : function() {
        return `
        <nav id="Minesweeper" 
                class="grid justify-items-center col-start-1 col-end-3
                        md:col-end-4 bg-blue-300 pb-2">
            <h2>Minesweeper</h2>
            <button id="startButton" 
                    class="border-2 px-4">Start
            </button>
        </nav>
        `
    },

    section : function() {
        return `
        <section>

            <section id="gameBoard"> 

            </section>
        
        </section>
        `
    },

    headerFunctions : function() {
        const startButton = document.querySelector("#Minesweeper #startButton ")
            startButton.addEventListener("click",Minesweeper_Functions.startGame)
    }
}