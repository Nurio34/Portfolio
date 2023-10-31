import styles from "../assets/styles/style.css";
import HomePage_UI from "./HomePage/UI";
import WordsAPI_UI from "./WordsAPI/UI";

const headerElement = document.createElement("header");
document.body.appendChild(headerElement);

headerElement.innerHTML = HomePage_UI.header();
headerElement.className =
    "grid auto-rows-max justify-between items-center p-4 bg-blue-700 text-white relative";
headerElement.innerHTML += WordsAPI_UI.header();

HomePage_UI.headerFunctions();
WordsAPI_UI.headerFunctions();

const mainElement = document.createElement("main");
document.body.appendChild(mainElement);
mainElement.classList.add("p-4", "columns-sm", "space-y-4");

