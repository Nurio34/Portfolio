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

            if(metodGot === "word") {
                mainElement.innerHTML = resultsArray.map((result) => {

                    let derivations
                    if(result.derivation) {
                        derivations = result.derivation.map(derivation=> {
                            return  derivation.charAt(0).toUpperCase() + derivation.slice(1)
        
                        }).join(", ")
                    }
                    
                    const definition = result.definition.charAt(0).toUpperCase() + result.definition.slice(1)
    
                    let examples
                    if(result.examples) {
                        examples = result.examples.map(example=> {
                            return  example.charAt(0).toUpperCase() + example.slice(1)
        
                        }).join(", ")
                    }
    
                    let typeOfs
                    if(result.typeOf) {
                        typeOfs = result.typeOf.map(typeOf=> {
                            const value = typeOf.charAt(0).toUpperCase() + typeOf.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2" data-metod="hasTypes">${value}</button>
                            `
                        }).join("")
                    }
    
                    let hasTypes
                    if(result.hasTypes) {
                        hasTypes = result.hasTypes.map(hasType=> {
                            const value = hasType.charAt(0).toUpperCase() + hasType.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2" data-metod="typeOf">${value}</button>
                            `
                        }).join("")
                    }
    
                    let memberOfs
                    if(result.memberOf) {
                        memberOfs = result.memberOf.map(memberOf=> {
                            const value = memberOf.charAt(0).toUpperCase() + memberOf.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let partOfs
                    if(result.partOf) {
                        partOfs = result.partOf.map(partOf=> {
                            const value = partOf.charAt(0).toUpperCase() + partOf.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let usageOfs
                    if(result.usageOf) {
                        usageOfs = result.usageOf.map(usageOf=> {
                            const value = usageOf.charAt(0).toUpperCase() + usageOf.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let hasUsagesArr
                    if(result.hasUsages) {
                        hasUsagesArr = result.hasUsages.map(hasUsage=> {
                            const value = hasUsage.charAt(0).toUpperCase() + hasUsage.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let hasMembersArr
                    if(result.hasMembers) {
                        hasMembersArr = result.hasMembers.map(hasMember=> {
                            const value = hasMember.charAt(0).toUpperCase() + hasMember.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let inCategories
                    if(result.inCategory) {
                        inCategories = result.inCategory.map(inCategory=> {
                            const value = inCategory.charAt(0).toUpperCase() + inCategory.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let hasCategoriesArr
                    if(result.hasCategories) {
                        hasCategoriesArr = result.hasCategories.map(hasCategorie=> {
                            const value = hasCategorie.charAt(0).toUpperCase() + hasCategorie.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let hasPartsArr
                    if(result.hasParts) {
                        hasPartsArr = result.hasParts.map(hasPart=> {
                            const value = hasPart.charAt(0).toUpperCase() + hasPart.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let instanceOfs
                    if(result.instanceOf) {
                        instanceOfs = result.instanceOf.map(instanceOf=> {
                            const value = instanceOf.charAt(0).toUpperCase() + instanceOf.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let hasInstancesArr
                    if(result.hasInstances) {
                        hasInstancesArr = result.hasInstances.map(hasInstance=> {
                            const value = hasInstance.charAt(0).toUpperCase() + hasInstance.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let similarTos
                    if(result.similarTo) {
                        similarTos = result.similarTo.map(similarTos=> {
                            const value = similarTos.charAt(0).toUpperCase() + similarTos.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let entailsArr
                    if(result.entails) {
                        entailsArr = result.entails.map(entail=> {
                            const value = entail.charAt(0).toUpperCase() + entail.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let hasSubstances
                    if(result.hasSubstances) {
                        hasSubstances = result.hasSubstances.map(hasSubstance=> {
                            const value = hasSubstance.charAt(0).toUpperCase() + hasSubstance.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let substanceOfs
                    if(result.substanceOf) {
                        substanceOfs = result.substanceOf.map(substanceOf=> {
                            const value = substanceOf.charAt(0).toUpperCase() + substanceOf.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
                    
                    let inRegions
                    if(result.inRegion) {
                        inRegions = result.inRegion.map(inRegion=> {
                            const value = inRegion.charAt(0).toUpperCase() + inRegion.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let regionOfs
                    if(result.regionOf) {
                        regionOfs = result.regionOf.map(regionOf=> {
                            const value = regionOf.charAt(0).toUpperCase() + regionOf.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
                    
                    let pertainsTos
                    if(result.pertainsTo) {
                        pertainsTos = result.pertainsTo.map(pertainsTo=> {
                            const value = pertainsTo.charAt(0).toUpperCase() + pertainsTo.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let alsos
                    if(result.also) {
                        alsos = result.also.map(also=> {
                            const value = also.charAt(0).toUpperCase() + also.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
                    
    
                    let synonymss
                    if(result.synonyms) {
                        synonymss = result.synonyms.map(synonym=> {
                            const value = synonym.charAt(0).toUpperCase() + synonym.slice(1)
                            return `
                                <button class="bg-gray-500 p-1 grow max-w-1/2">${value}</button>
                            `
                        }).join("")
                    }
    
                    let syllablesArr
                    if(data.syllables) {
                        syllablesArr = data.syllables.list.map((syllable,i)=> {
                            if(i === 0) {
                                const value = syllable.charAt(0).toUpperCase() + syllable.slice(1)
                                return value
                            }
                            return syllable
                        }).join("-")
                    }
    
                    return WordsAPI_UI.section(
                        data.word,
                        data.pronunciation,
                        result,
                        derivations,
                        definition,
                        examples,
                        typeOfs,
                        memberOfs,
                        partOfs,
                        usageOfs,
                        hasUsagesArr,
                        hasMembersArr,
                        inCategories,
                        hasCategoriesArr,
                        hasPartsArr,
                        instanceOfs,
                        hasInstancesArr,
                        similarTos,
                        entailsArr,
                        hasSubstances,
                        substanceOfs,
                        inRegions,
                        regionOfs,
                        pertainsTos,
                        hasTypes,
                        synonymss,
                        syllablesArr,
                        data.frequency,
                        alsos,
                    );
                }).join("");
            }

            // if(metod === "typeOf") console.log("typeOf");
            

            WordsAPI_UI.sectionFunctions()

            adjustMainElement(mainElement)

            window.addEventListener("resize",e=>{
               adjustMainElement(mainElement) 
            })
            

        } catch (error) {
            console.error(error);
        }
    },
};

function adjustMainElement(mainElement) {
    if(window.innerWidth > 1439) {
        if (mainElement.children.length === 1) {
            mainElement.className = "p-4 columns-1 space-y-4"
        } else if (mainElement.children.length === 2) {
            mainElement.className = "p-4 columns-2 space-y-4"
        } else if (mainElement.children.length === 3) {
            mainElement.className = "p-4 columns-3 space-y-4"
        } else {
            mainElement.className = "p-4 columns-4 space-y-4"
        }
    } else if(window.innerWidth > 750) {
        if (mainElement.children.length === 1) {
            mainElement.className = "p-4 columns-1 space-y-4"
        }else{
            mainElement.className = "p-4 columns-2 space-y-4"
        } 
    } else {
        mainElement.className = "p-4 columns-sm space-y-4"
    }
}
"p-4", "columns-sm", "space-y-4"