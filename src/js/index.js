import styles from "../assets/styles/style.css";
import homePage from "./homePage";

document.body.innerHTML = homePage.home();

const searchForm = document.getElementById("searchForm");
searchForm.onsubmit = homePage.submit;
