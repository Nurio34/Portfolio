import axios from "axios";
import WordsAPI_UI from "./UI";
//** */
const apiUrl = "https://wordsapiv1.p.rapidapi.com/words/";
const apiKey = window.API_KEY;
let metod = "";
let word = "";
let link = "";
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
};
//** */
export default {
    call: async function (wordGot, metodGot) {
        options.params = {};
        if (metodGot === "word") {
            metod = "";
            word = wordGot;
        } else if (metodGot === "random") {
            metod = "";
            word = "";
            options.params = {
                random: "true",
            };
        } else if (metodGot === "search") {
            metod = "";
            word = "";
            options.params = {
                letterPattern: "^a.{4}$",
                pronunciationpattern: ".*æm$",
                limit: "100",
                page: "1",
                hasDetails: "hasDetails",
            };
        } else {
            metod = `${metodGot}/`;
            word = `${wordGot}/`;
        }
        link = `${apiUrl}${word}${metod}`;
        options.url = link;
        try {
            const { data } = await axios.request(options);
            const resultsArray = data.results;
            const mainElement = document.querySelector("main");

            console.log(data);

            mainElement.innerHTML = resultsArray.map((result) => {

                const definition = result.definition.charAt(0).toUpperCase() + result.definition.slice(1)

                let examples
                if(result.examples) {
                    examples = result.examples.map(example=> {
                        return  example.charAt(0).toUpperCase() + example.slice(1)
    
                    }).join(", ")
                }

                let hasTypes
                if(result.hasTypes) {
                    hasTypes = result.hasTypes.map(hasType=> {
                        const value = hasType.charAt(0).toUpperCase() + hasType.slice(1)
                        return `
                            <button class="bg-gray-500 p-1">${value}</button>
                        `
                    }).join("")
                }
                
                let typeOfs
                if(result.typeOf) {
                    typeOfs = result.typeOf.map(typeOf=> {
                        const value = typeOf.charAt(0).toUpperCase() + typeOf.slice(1)
                        return `
                            <button class="bg-gray-500 p-1">${value}</button>
                        `
                    }).join("")
                }



                return WordsAPI_UI.section(
                    data.word,
                    data.pronunciation,
                    result,
                    definition,
                    examples,
                    hasTypes,
                    typeOfs,
                    data.syllables,
                    data.frequency,
                );
            });
        } catch (error) {
            console.error(error);
        }
    },
};
