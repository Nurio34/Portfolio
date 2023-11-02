//**    STYLES */
import styles from "../assets/styles/style.css";

//**    PAGE */
import HomePage_UI from "./HomePage/UI";

//**    WORDS API */
import WordsAPI_UI from "./WordsAPI/UI";

//**    MINESWEEPER */
import Minesweeper_UI from "./Minesweeper/UI"

//**    PAGE HEADER */
const headerElement = document.createElement("header");
document.body.appendChild(headerElement);

headerElement.innerHTML = HomePage_UI.header();
headerElement.className =
    "grid auto-rows-max justify-between items-center p-4 pb-0 bg-blue-700 text-white relative";

HomePage_UI.headerFunctions();

//**    PAGE MAIN */
const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

// //!     WORDS API //
// //**    ADD WORDS API NAV TO PAGE HEADER */
// headerElement.innerHTML += WordsAPI_UI.header();
// WordsAPI_UI.headerFunctions();

//!     MINESWEEPER //
//**    ADD WORDS API NAV TO PAGE HEADER */
headerElement.innerHTML += Minesweeper_UI.header()
Minesweeper_UI.headerFunctions()
// //! DEV : START BUTONLA UĞRAŞMAMAK İÇİN
// import Mineswapper_Functions from "./Minesweeper/Functions"
// Mineswapper_Functions.startGame()
// //!     //



