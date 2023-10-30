import WordsAPI_apiCalls from "./apiCalls";

export default {
    header: function () {
        return `
        <nav class="wordsApiNav grid justify-items-center col-start-1 col-end-3
        md:col-end-4">
            <h2 class=" text-xl font-semibold">Words API</h2>
            <ul class="flex flex-wrap gap-x-4">
                <li><button>Word</button></li>
                <li><button>Synonyms</button></li>
                <li><button>Definitions</button></li>
                <li><button>Examples</button></li>
                <li><button>Rhymes</button></li>
                <li><button>Antonyms</button></li>
                <li><button>Pronunciation</button></li>
                <li><button>Syllables</button></li>
                <li><button>Frequency</button></li>
                <li><button>Random</button></li>
                <li><button>Search</button></li>
            </ul>
            <input type="search" placeholder="Search for Synonyms..." 
            class=" px-4 py-1 justify-self-stretch text-black">
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
        definition,
        examples,
        hasTypes,
        typeOfs,
        syllables,
        frequency,
    ) {
        return `
        <section>
            <div class="flex gap-x-4 items-center py-1">
                <h2 class=" text-2xl uppercase font-semibold">${word}</h2>
                <p>(${pronunciation.all})</p>
                <p>/ ${result.partOfSpeech}</p>
            </div>
            <p class=" py-1"><span class=" font-medium">Definition</span> : ${definition}</p>
            <p class=" py-1"><span class=" font-medium">Examples</span> : ${examples}</p>
            <p class=" font-medium flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg py-1"><span class=" font-medium">HasTypes :</span>${hasTypes}</p>
            <p class=" py-1"><span class="font-medium">TypeOf :</span>${typeOfs}</p>
            <p class=" py-1"><span class=" font-medium">SimilarTo</span> : ${result.similarTo}</p>
            <p class=" py-1"><span class=" font-medium">Synonyms</span> : ${result.synonyms}</p>
            <p class=" py-1"><span class=" font-medium">Syllables</span> : ${syllables.list}</p>
            <p class=" py-1"><span class=" font-medium">Frequency</span> : ${frequency}</p>
        </section>
        `;
    },
};
