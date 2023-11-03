
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
            <div class="options-button-group mt-2">
                <button class=" px-4 border-2 border-orange-500 rounded-md">Easy</button>
                <button class=" px-4 border-2 border-orange-500 rounded-md">Normal</button>
                <button class=" px-4 border-2 border-orange-500 rounded-md">Hard</button>
                <select name="" id="" class=" text-black">
                    <option value="10" selected>10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </select>
            </div>
        </nav>
        `
    },

    headerFunctions : function() {
        let difficulty = ""
        let area = ""
        const startButton = document.querySelector("#Minesweeper #startButton ")
            startButton.addEventListener("click",()=>{
                Minesweeper_Functions.startGame()
            })
                startButton.disabled = true


        const optionButtons = document.querySelectorAll("#Minesweeper .options-button-group button")
            optionButtons.forEach(btn=> btn.addEventListener("click", e => {
                optionButtons.forEach(btn=>btn.classList.remove("bg-orange-500"))
                btn.classList.add("bg-orange-500")
                window.difficulty = btn.innerText
                startButton.disabled = false
            }))

        const areaSelectElement = document.querySelector("#Minesweeper select")
            window.area = 10

            if(window.innerWidth < 900) {
                areaSelectElement.disabled = true
            }
            areaSelectElement.addEventListener("change",()=>{
                window.area = areaSelectElement.value
            })
    },

    section : function() {
        return `
        <section>

            <section id="gameBoard"> 

            </section>
        
        </section>
        `
    },

    overlay : function() {
        return `
            <div id="overlay"> </div>
        `
    },

    gameOverModal : function() {
        return `
        <div class="  bg-black text-white py-4 px-10 rounded-lg 
                     grid justify-items-center gap-4">
            <p>Game Over</p>
            <button id="restartButton" class=" bg-blue-500 text-white px-8 py-2 rounded-md">Restart</button>
            <button id="inspectButton" class=" bg-purple-500 text-white px-8 py-2 rounded-md">Inspect</button>
        </div>
        `
    },

    modalFunctions : function() {
        const restartButton = document.getElementById("restartButton")
            restartButton.addEventListener("click",Minesweeper_Functions.startGame)
        const inspectButton = document.getElementById("inspectButton")
            inspectButton.addEventListener("click",Minesweeper_Functions.inspect)
    },
}