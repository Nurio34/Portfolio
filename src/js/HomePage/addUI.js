
//**    WORDS API */
import WordsAPI_UI from "../WordsAPI/UI";

//**    MINESWEEPER */
import Minesweeper_UI from "../Minesweeper/UI"
import Mineswapper_Functions from "../Minesweeper/Functions"

export default {

    projectsElement : function() {
        return `
            <ul>
                <h2>API Based</h2>
                <li><button>WordsAPI</button></li>
                <li><button>WordsAPI213</button></li>

            </ul>
            <ul>
                <h2>Games</h2>
                <li><button>Minesweeper</button></li>
                <li><button>Minesweeper123</button></li>

            </ul>
        `
    },

    projectsElementFunctions : function() {
        const buttons = document.querySelectorAll(".projects button")
            buttons.forEach(btn => btn.addEventListener("click", ()=>{
                console.log(btn.innerText);
                const app = btn.innerText
                const headerElement = document.querySelector("header");
                const projectsElement = document.querySelector(".projects")
                    headerElement.removeChild(projectsElement)

                if(app == "Minesweeper") {
                    headerElement.innerHTML += Minesweeper_UI.header();
                    Minesweeper_UI.headerFunctions()
                }
                else if(app == "WordsAPI") {
                    headerElement.innerHTML += WordsAPI_UI.header();
                    WordsAPI_UI.headerFunctions()
                }
            }) )
    }
}