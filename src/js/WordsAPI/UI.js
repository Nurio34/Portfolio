import WordsAPI_apiCalls from "./apiCalls";

export default {
    header: function () {
        return `
        <nav class="wordsApiNav grid justify-items-center col-start-1 col-end-3
        md:col-end-4">
            <h2 class=" text-xl font-semibold">Words API</h2>
            <ul class="flex flex-wrap justify-center gap-x-4">
                <li><button>Word</button></li>
                <li><button>Rhymes</button></li>
                <li><button>Antonyms</button></li>
                <li><button>Random</button></li>
                <li><button>Search</button></li>
            </ul>
            <input type="search" placeholder="Search for Synonyms..." 
            class=" px-4 py-1 w-full text-black lg:max-w-1/2">
        </nav>

        `;
    },

    headerFunctions: function () {
        const wordsApiNav = document.querySelector(".wordsApiNav");
        const buttons = wordsApiNav.querySelectorAll("button");
        const searchInput = wordsApiNav.querySelector("[type='search']");
        let metod = buttons[0].innerText.toLocaleLowerCase();
        //** */
        buttons.forEach((btn) =>
            btn.addEventListener("click", (e) => {
                metod = btn.innerText.toLocaleLowerCase();
            }),
        );
        //** */
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const word = e.target.value.trim();
                if (word) WordsAPI_apiCalls.call(word, metod);
            }
        });
    },

    section: function (
        word,
        pronunciation,
        result,
        derivations,
        definition,
        examples,
        typeOfs,
        memberOfs,
        partOfs,
        usageOfs,
        hasUsages,
        hasMembers,
        inCategories,
        hasCategories,
        hasParts,
        instanceOfs,
        hasInstances,
        similarTos,
        entails,
        hasSubstances,
        substanceOfs,
        inRegions,
        regionOfs,
        pertainsTos,
        hasTypes,
        synonyms,
        syllables,
        frequency,
        alsos
    ) {
        return `
        <section class=" break-inside-avoid bg-blue-500 p-4 rounded-lg"> 
            <div class="flex gap-x-4 items-center py-1">
                <h2 class=" text-2xl uppercase font-semibold">${word}</h2>
                <p>(${pronunciation.all})</p>
                <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1">/ ${syllables}</p>
                <p>/ ${result.partOfSpeech}</p>
            </div>
            <p class=" py-1">
                <span class=" font-medium">
                    Derivation :
                </span>
                 ${derivations}
            </p>
            <p class=" py-1">
                <span class=" font-medium"
                        title="The meaning of the word, including its part of speech.">
                    Definition : 
                </span> 
                 ${definition}
            </p>
            <p class=" py-1">
                <span class=" font-medium"
                        title="Example sentences using the word.">
                    Examples : 
                </span> 
                 ${examples}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class="font-medium text-black" 
                        title="Words that are more generic than the original word. For example, a hatchback is a type of car.">
                    Hypernyms :
                </span> 
                 ${typeOfs}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black" 
                        title = "Words that are more specific than the original word. For example, purple has types violet, lavender, mauve, etc.">
                    Hyponyms :
                </span>
                 ${hasTypes}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="The larger whole to which this word belongs. Also known as holonyms. For example, a finger is part of a hand, a glove, a paw, etc.">
                    PartOf :
                </span>
                 ${partOfs}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that are part of the original word. Also known as meronyms. For example, a building has parts such as roofing, plumbing etc.">
                    HasParts :
                </span>
                 ${hasParts}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that the original word is an example of. For example, Einstein is an instance of a physicist.">
                    InstanceOf :
                </span>
                 ${instanceOfs}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that are examples of the original word. For example, president has instances such as theodore roosevelt, van buren, etc.">
                    HasInstances :
                </span>
                 ${hasInstances}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that similar to the original word, but are not synonyms. For example, red is similar to bloody.">
                    SimilarTo :
                </span>
                 ${similarTos}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Phrases to which the original word belongs. For example, bump is used in the phrase bump off.">
                    Also : 
                </span> 
                 ${alsos}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that are implied by the original word. Usually used for verbs. For example, rub entails touch.">
                    Entails :
                </span>
                ${entails}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="A group to which the original word belongs. For example, dory is a member of the family zeidae.">
                    MemberOf :
                </span>
                 ${memberOfs}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that belong to the group defined by the original word. For example, a cult has members called cultists.">
                    HasMembers :
                </span>
                ${hasMembers}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Substances to which the original word is a part of. For example, water is a substance of sweat.">
                    SubstanceOf :
                </span>
                ${substanceOfs}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Substances that are part of the original word. For example, wood has a substance called lignin.">
                    HasSubstances :
                </span>
                ${hasSubstances}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="The domain category to which the original word belongs. For example, chaotic is in category physics.">
                    InCategory :
                </span>
                ${inCategories}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Categories of the original word. For example, math has categories such as algebra, imaginary, numerical analysis, etc.">
                    HasCategories :
                </span>
                ${hasCategories}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that the original word is a domain usage of. For example, advil is a useage of the trademark, etc.">
                    UsageOf :
                </span>
                ${usageOfs}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that are examples of the domain the original word defines. For example, colloquialism is a domain that includes examples like big deal, blue moon, etc.">
                    HasUsages :
                </span>
                ${hasUsages}
            </p>                                                                    
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title=" Regions where the word is used. For example, chips is used in region Britain.">
                    InRegion :
                </span>
                ${inRegions}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="A region where words are used. For example, Canada is the region of pogey.">
                    RegionOf :
                </span>
                ${regionOfs}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words to which the original word is relevant. For example, .22-caliber pertains to caliber.">
                    PertainsTo :
                </span>
                ${pertainsTos}
            </p>
            <p class=" flex flex-wrap items-center gap-x-4 gap-y-3 rounded-lg py-1 text-white">
                <span class=" font-medium text-black"
                        title="Words that can be interchanged for the original word in the same context.">
                        Synonyms : 
                </span>
                ${synonyms}
            </p>
            <p class=" py-1">
                <span class=" font-medium"
                        title="Score, ranging from approximately 1 to 7. A higher number means the word is used more frequently.">
                    Frequency :
                </span>
                 ${frequency}</p>            
        </section>
        `;
    },

    sectionFunctions : function() {
        const sectionElements = document.querySelectorAll("section")
        sectionElements.forEach(section=> [...section.children].forEach(child=>{
            if(child.textContent.includes("undefined")) child.parentElement.removeChild(child)
        }))

        const mainElement = document.querySelector("main")
        const buttons = mainElement.querySelectorAll("button")

        // buttons.forEach(button=>button.addEventListener("click",apiCallByButtons)) Infinite calss
    }
};

function apiCallByButtons(button) {
    const word = button.innerText
    const metod = button.dataset.metod
    WordsAPI_apiCalls.call(word, metod)
}